import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { title: 'E-Commerce Redesign',  colors: ['#6c5ce7', '#a29bfe'] },
  { title: 'Travel App UI',        colors: ['#00b894', '#55efc4'] },
  { title: 'Finance Dashboard',    colors: ['#0984e3', '#74b9ff'] },
  { title: 'Music Streaming',      colors: ['#e17055', '#fab1a0'] },
  { title: 'Social Platform',      colors: ['#fdcb6e', '#ffeaa7'] },
  { title: 'Fitness Tracker',      colors: ['#e84393', '#fd79a8'] },
  { title: 'Chat Application',     colors: ['#00cec9', '#81ecec'] },
  { title: 'Portfolio Site',       colors: ['#636e72', '#b2bec3'] },
];

const COUNT = PROJECTS.length;
const CARD_W = 3.2;
const CARD_H = 2.0;
const RING_RADIUS = 6;

const canvas = document.getElementById('ring-canvas');
const label = document.getElementById('project-label');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
camera.position.set(0, 1.5, 12);
camera.lookAt(0, 0, 0);

scene.add(new THREE.AmbientLight(0x889aab, 1.2));
const spot = new THREE.PointLight(0x64ffda, 15, 30);
spot.position.set(0, 4, 10);
scene.add(spot);

function makeScreenshot(project, w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, project.colors[0]);
  grad.addColorStop(1, project.colors[1]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, w, h * 0.07);
  const dotY = h * 0.035;
  [0.03, 0.06, 0.09].forEach(xf => {
    ctx.beginPath();
    ctx.arc(w * xf, dotY, h * 0.012, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  });

  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = `bold ${h * 0.08}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(project.title, w / 2, h * 0.5);

  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(w * 0.1, h * 0.6, w * 0.35, h * 0.08);
  ctx.fillRect(w * 0.55, h * 0.6, w * 0.35, h * 0.08);
  ctx.fillRect(w * 0.1, h * 0.72, w * 0.8, h * 0.05);
  ctx.fillRect(w * 0.1, h * 0.80, w * 0.6, h * 0.05);

  return new THREE.CanvasTexture(c);
}

const ring = new THREE.Group();
scene.add(ring);

PROJECTS.forEach((proj, i) => {
  const angle = (i / COUNT) * Math.PI * 2;
  const tex = makeScreenshot(proj, 640, 400);
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  const geo = new THREE.PlaneGeometry(CARD_W, CARD_H);
  const mesh = new THREE.Mesh(geo, mat);

  mesh.position.set(
    Math.sin(angle) * RING_RADIUS,
    0,
    Math.cos(angle) * RING_RADIUS
  );
  mesh.lookAt(0, 0, 0);
  mesh.rotation.x += 0.08;
  ring.add(mesh);
});

const rotState = { y: 0 };
gsap.to(rotState, {
  y: Math.PI * 2,
  ease: 'none',
  scrollTrigger: {
    trigger: '#ring-section',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate(self) {
      ring.rotation.y = rotState.y;
      const facing = -ring.rotation.y;
      let idx = Math.round((facing / (Math.PI * 2)) * COUNT) % COUNT;
      if (idx < 0) idx += COUNT;
      label.textContent = PROJECTS[idx].title;
      label.style.opacity = self.isActive ? '1' : '0';
    },
    onLeave() { label.style.opacity = '0'; },
    onLeaveBack() { label.style.opacity = '0'; },
  },
});

function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener('resize', resize);
resize();

(function tick() {
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
})();
