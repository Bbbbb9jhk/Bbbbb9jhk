import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('globe-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(0, 0, 3.2);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.2;

scene.add(new THREE.AmbientLight(0x334466, 1.5));
const dir = new THREE.DirectionalLight(0xffffff, 1.8);
dir.position.set(5, 3, 5);
scene.add(dir);

const sphereGeo = new THREE.SphereGeometry(1, 64, 64);

function buildEarthTexture(size) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size / 2;
  const ctx = c.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 0, c.height);
  grad.addColorStop(0, '#0b3d91');
  grad.addColorStop(0.5, '#1a6db0');
  grad.addColorStop(1, '#0b3d91');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, c.width, c.height);

  const continents = [
    [[0.12,0.18],[0.08,0.28],[0.10,0.38],[0.18,0.42],[0.25,0.38],[0.28,0.30],[0.24,0.20],[0.18,0.16]],
    [[0.22,0.50],[0.18,0.55],[0.17,0.65],[0.20,0.75],[0.24,0.80],[0.27,0.72],[0.26,0.60],[0.24,0.52]],
    [[0.45,0.20],[0.42,0.26],[0.44,0.32],[0.48,0.34],[0.52,0.30],[0.50,0.22],[0.47,0.18]],
    [[0.44,0.38],[0.40,0.45],[0.42,0.58],[0.46,0.68],[0.52,0.65],[0.54,0.52],[0.52,0.42],[0.48,0.36]],
    [[0.52,0.14],[0.55,0.20],[0.60,0.24],[0.68,0.22],[0.75,0.26],[0.78,0.32],[0.74,0.38],[0.68,0.42],[0.62,0.38],[0.56,0.34],[0.52,0.28]],
    [[0.76,0.55],[0.73,0.60],[0.75,0.66],[0.80,0.68],[0.84,0.64],[0.82,0.56],[0.78,0.53]],
  ];

  ctx.fillStyle = '#2d8a4e';
  continents.forEach(pts => {
    ctx.beginPath();
    pts.forEach(([x, y], i) => {
      const px = x * c.width;
      const py = y * c.height;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = 'rgba(220,230,240,0.6)';
  ctx.fillRect(0, 0, c.width, c.height * 0.06);
  ctx.fillRect(0, c.height * 0.94, c.width, c.height * 0.06);

  return new THREE.CanvasTexture(c);
}

const earthTex = buildEarthTexture(1024);
const earthMat = new THREE.MeshPhongMaterial({
  map: earthTex,
  shininess: 25,
  specular: new THREE.Color(0x222244),
});
const earth = new THREE.Mesh(sphereGeo, earthMat);
scene.add(earth);

const atmosGeo = new THREE.SphereGeometry(1.04, 64, 64);
const atmosMat = new THREE.MeshBasicMaterial({
  color: 0x4488ff,
  transparent: true,
  opacity: 0.12,
  side: THREE.BackSide,
});
scene.add(new THREE.Mesh(atmosGeo, atmosMat));

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
  earth.rotation.y += 0.002;
  controls.update();
  renderer.render(scene, camera);
})();
