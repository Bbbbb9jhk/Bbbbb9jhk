(()=>{var Np=0,Jh=1,Op=2;var _f=1,Fp=2,gi=3,Vi=0,dn=1,xi=2;var ki=0,rs=1,$h=2,Kh=3,Qh=4,Bp=5,ts=100,zp=101,kp=102,jh=103,eu=104,Vp=200,Hp=201,Gp=202,Wp=203,xf=204,vf=205,Xp=206,qp=207,Yp=208,Zp=209,Jp=210,$p=0,Kp=1,Qp=2,ql=3,jp=4,em=5,tm=6,nm=7,yf=0,im=1,rm=2,vi=0,sm=1,am=2,om=3,lm=4,cm=5,Mf=300,ls=301,cs=302,Yl=303,Zl=304,_o=306,Jl=1e3,Zn=1001,$l=1002,en=1003,tu=1004;var pl=1005;var Ln=1006,hm=1007;var Gs=1008;var dr=1009,um=1010,fm=1011,Sf=1012,dm=1013,lr=1014,cr=1015,Ws=1016,pm=1017,mm=1018,ss=1020,gm=1021,Jn=1023,_m=1024,xm=1025,hr=1026,hs=1027,vm=1028,ym=1029,Mm=1030,Sm=1031,bm=1033,ml=33776,gl=33777,_l=33778,xl=33779,nu=35840,iu=35841,ru=35842,su=35843,Tm=36196,au=37492,ou=37496,lu=37808,cu=37809,hu=37810,uu=37811,fu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,xu=37818,vu=37819,yu=37820,Mu=37821,vl=36492,Em=36283,Su=36284,bu=36285,Tu=36286;var Qa=2300,ja=2301,yl=2302,Eu=2400,wu=2401,Au=2402;var bf=3e3,ur=3001,wm=3200,Am=3201,Rm=0,Cm=1,fr="",Ge="srgb",ni="srgb-linear",Tf="display-p3";var Ml=7680;var Pm=519,Ru=35044;var Cu="300 es",Kl=1035,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sl=Math.PI/180,Ql=180/Math.PI;function Ks(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function fn(r,e,t){return Math.max(e,Math.min(t,r))}function Lm(r,e){return(r%e+e)%e}function bl(r,e,t){return(1-t)*r+t*e}function Pu(r){return(r&r-1)===0&&r!==0}function Im(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pa(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ot=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class r{constructor(){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],m=i[0],g=i[3],p=i[6],y=i[1],v=i[4],E=i[7],M=i[2],w=i[5],A=i[8];return s[0]=o*m+a*y+l*M,s[3]=o*g+a*v+l*w,s[6]=o*p+a*E+l*A,s[1]=c*m+h*y+f*M,s[4]=c*g+h*v+f*w,s[7]=c*p+h*E+f*A,s[2]=u*m+d*y+_*M,s[5]=u*g+d*v+_*w,s[8]=u*p+d*E+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,_=t*f+n*u+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/_;return e[0]=f*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=u*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tl=new Qe;function Ef(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var Lu={};function Vs(r){r in Lu||(Lu[r]=!0,console.warn(r))}function as(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function El(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Dm=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Um=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nm(r){return r.convertSRGBToLinear().applyMatrix3(Um)}function Om(r){return r.applyMatrix3(Dm).convertLinearToSRGB()}var Fm={[ni]:r=>r,[Ge]:r=>r.convertSRGBToLinear(),[Tf]:Nm},Bm={[ni]:r=>r,[Ge]:r=>r.convertLinearToSRGB(),[Tf]:Om},Wn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ni},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Fm[e],i=Bm[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zr,to=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=eo("canvas")),zr.width=e.width,zr.height=e.height;let n=zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},no=class{constructor(e=null){this.isSource=!0,this.uuid=Ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(wl(i[o].image)):s.push(wl(i[o]))}else s=wl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function wl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?to.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zm=0,Un=class r extends Hi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Zn,i=Zn,s=Ln,o=Gs,a=Jn,l=dr,c=r.DEFAULT_ANISOTROPY,h=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Ks(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ur?Ge:fr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ge?ur:bf}set encoding(e){Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Ge:fr}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Mf;Un.DEFAULT_ANISOTROPY=1;var mt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(d+1)/2,M=(p+1)/2,w=(h+u)/4,A=(f+m)/4,I=(_+g)/4;return v>E&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=A/n):E>M?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=I/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=I/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(f-m)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mi=class extends Hi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Ge:fr),this.texture=new Un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},io=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jl=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==u||c!==d||h!==_){let g=1-a,p=l*u+c*d+h*_+f*m,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let M=Math.sqrt(v),w=Math.atan2(M,p*y);g=Math.sin(g*w)/M,a=Math.sin(a*w)/M}let E=a*y;if(l=l*g+u*E,c=c*g+d*E,h=h*g+_*E,f=f*g+m*E,g===1-a){let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+h*f+l*d-c*u,e[t+1]=l*_+h*u+c*f-a*d,e[t+2]=c*_+h*d+a*u-l*f,e[t+3]=h*_-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Iu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,f=l*i+s*n-o*t,u=-s*t-o*n-a*i;return this.x=c*l+u*-s+h*-a-f*-o,this.y=h*l+u*-o+f*-s-c*-a,this.z=f*l+u*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new z,Iu=new Gi,pr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox),kr.applyMatrix4(e.matrixWorld),this.union(kr);else{let i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ui)}else i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),La.subVectors(this.max,Ns),Vr.subVectors(e.a,Ns),Hr.subVectors(e.b,Ns),Gr.subVectors(e.c,Ns),Ui.subVectors(Hr,Vr),Ni.subVectors(Gr,Hr),ir.subVectors(Vr,Gr);let t=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-ir.z,ir.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,ir.z,0,-ir.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-ir.y,ir.x,0];return!Rl(t,Vr,Hr,Gr,La)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Vr,Hr,Gr,La))?!1:(Ia.crossVectors(Ui,Ni),t=[Ia.x,Ia.y,Ia.z],Rl(t,Vr,Hr,Gr,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new z,new z,new z,new z,new z,new z,new z,new z],ui=new z,kr=new pr,Vr=new z,Hr=new z,Gr=new z,Ui=new z,Ni=new z,ir=new z,Ns=new z,La=new z,Ia=new z,rr=new z;function Rl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){rr.fromArray(r,s);let a=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var km=new pr,Os=new z,Cl=new z,Xs=class{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):km.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Cl)),this.expandByPoint(Os.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new z,Pl=new z,Da=new z,Oi=new z,Ll=new z,Ua=new z,Il=new z,ec=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pl.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Pl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=Oi.dot(this.direction),l=-Oi.dot(Da),c=Oi.lengthSq(),h=Math.abs(1-o*o),f,u,d,_;if(h>0)if(f=o*l-a,u=o*a-l,_=s*h,f>=0)if(u>=-_)if(u<=_){let m=1/h;f*=m,u*=m,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Pl).addScaledVector(Da,u),d}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){Ll.subVectors(t,e),Ua.subVectors(n,e),Il.crossVectors(Ll,Ua);let o=this.direction.dot(Il),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(Ua.crossVectors(Oi,Ua));if(l<0)return null;let c=a*this.direction.dot(Ll.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(Il);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class r{constructor(){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,f,u,d,_,m,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=o*h,d=o*f,_=a*h,m=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=u-m*c,t[9]=-a*l,t[2]=m-u*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,_=c*h,m=c*f;t[0]=u+m*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=m+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,_=c*h,m=c*f;t[0]=u-m*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=m-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,_=a*h,m=a*f;t[0]=l*h,t[4]=_*c-d,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,_=a*l,m=a*c;t[0]=l*h,t[4]=m-u*f,t[8]=_*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+_,t[10]=u-m*f}else if(e.order==="XZY"){let u=o*l,d=o*c,_=a*l,m=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+m,t[5]=o*h,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*h,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Hm)}lookAt(e,t,n){let i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Fi.crossVectors(n,bn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Fi.crossVectors(n,bn)),Fi.normalize(),Na.crossVectors(bn,Fi),i[0]=Fi.x,i[4]=Na.x,i[8]=bn.x,i[1]=Fi.y,i[5]=Na.y,i[9]=bn.y,i[2]=Fi.z,i[6]=Na.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],m=n[6],g=n[10],p=n[14],y=n[3],v=n[7],E=n[11],M=n[15],w=i[0],A=i[4],I=i[8],x=i[12],T=i[1],H=i[5],O=i[9],U=i[13],F=i[2],B=i[6],K=i[10],k=i[14],G=i[3],Q=i[7],R=i[11],le=i[15];return s[0]=o*w+a*T+l*F+c*G,s[4]=o*A+a*H+l*B+c*Q,s[8]=o*I+a*O+l*K+c*R,s[12]=o*x+a*U+l*k+c*le,s[1]=h*w+f*T+u*F+d*G,s[5]=h*A+f*H+u*B+d*Q,s[9]=h*I+f*O+u*K+d*R,s[13]=h*x+f*U+u*k+d*le,s[2]=_*w+m*T+g*F+p*G,s[6]=_*A+m*H+g*B+p*Q,s[10]=_*I+m*O+g*K+p*R,s[14]=_*x+m*U+g*k+p*le,s[3]=y*w+v*T+E*F+M*G,s[7]=y*A+v*H+E*B+M*Q,s[11]=y*I+v*O+E*K+M*R,s[15]=y*x+v*U+E*k+M*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],_=e[3],m=e[7],g=e[11],p=e[15];return _*(+s*l*f-i*c*f-s*a*u+n*c*u+i*a*d-n*l*d)+m*(+t*l*d-t*c*u+s*o*u-i*o*d+i*c*h-s*l*h)+g*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-t*l*f+t*a*u+i*o*f-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],_=e[12],m=e[13],g=e[14],p=e[15],y=f*g*c-m*u*c+m*l*d-a*g*d-f*l*p+a*u*p,v=_*u*c-h*g*c-_*l*d+o*g*d+h*l*p-o*u*p,E=h*m*c-_*f*c+_*a*d-o*m*d-h*a*p+o*f*p,M=_*f*l-h*m*l-_*a*u+o*m*u+h*a*g-o*f*g,w=t*y+n*v+i*E+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=y*A,e[1]=(m*u*s-f*g*s-m*i*d+n*g*d+f*i*p-n*u*p)*A,e[2]=(a*g*s-m*l*s+m*i*c-n*g*c-a*i*p+n*l*p)*A,e[3]=(f*l*s-a*u*s-f*i*c+n*u*c+a*i*d-n*l*d)*A,e[4]=v*A,e[5]=(h*g*s-_*u*s+_*i*d-t*g*d-h*i*p+t*u*p)*A,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*p-t*l*p)*A,e[7]=(o*u*s-h*l*s+h*i*c-t*u*c-o*i*d+t*l*d)*A,e[8]=E*A,e[9]=(_*f*s-h*m*s-_*n*d+t*m*d+h*n*p-t*f*p)*A,e[10]=(o*m*s-_*a*s+_*n*c-t*m*c-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*d-t*a*d)*A,e[12]=M*A,e[13]=(h*m*i-_*f*i+_*n*u-t*m*u-h*n*g+t*f*g)*A,e[14]=(_*a*i-o*m*i-_*n*l+t*m*l+o*n*g-t*a*g)*A,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*u+t*a*u)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,_=s*f,m=o*h,g=o*f,p=a*f,y=l*c,v=l*h,E=l*f,M=n.x,w=n.y,A=n.z;return i[0]=(1-(m+p))*M,i[1]=(d+E)*M,i[2]=(_-v)*M,i[3]=0,i[4]=(d-E)*w,i[5]=(1-(u+p))*w,i[6]=(g+y)*w,i[7]=0,i[8]=(_+v)*A,i[9]=(g-y)*A,i[10]=(1-(u+m))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Wr.set(i[0],i[1],i[2]).length(),o=Wr.set(i[4],i[5],i[6]).length(),a=Wr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);let c=1/s,h=1/o,f=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),u=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),f=(t+e)*l,u=(n+i)*c,d=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wr=new z,Xn=new Lt,Vm=new z(0,0,0),Hm=new z(1,1,1),Fi=new z,Na=new z,bn=new z,Du=new Lt,Uu=new Gi,ro=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ro.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gm=0,Nu=new z,Xr=new Gi,di=new Lt,Oa=new z,Fs=new z,Wm=new z,Xm=new Gi,Ou=new z(1,0,0),Fu=new z(0,1,0),Bu=new z(0,0,1),qm={type:"added"},zu={type:"removed"},Nn=class r extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new z,t=new ro,n=new Gi,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Qe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Fs,Oa,this.up):di.lookAt(Oa,Fs,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Xr.setFromRotationMatrix(di),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(zu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Nn.DEFAULT_UP=new z(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new z,pi=new z,Dl=new z,mi=new z,qr=new z,Yr=new z,ku=new z,Ul=new z,Nl=new z,Ol=new z,Fa=!1,ns=class r{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qn.subVectors(i,t),pi.subVectors(n,t),Dl.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(pi),l=qn.dot(Dl),c=pi.dot(pi),h=pi.dot(Dl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);let u=1/f,d=(c*l-a*h)*u,_=(o*h-a*l)*u;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,mi),l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),pi.subVectors(e,t),qn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),qn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fa=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;qr.subVectors(i,n),Yr.subVectors(s,n),Ul.subVectors(e,n);let l=qr.dot(Ul),c=Yr.dot(Ul);if(l<=0&&c<=0)return t.copy(n);Nl.subVectors(e,i);let h=qr.dot(Nl),f=Yr.dot(Nl);if(h>=0&&f<=h)return t.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(qr,o);Ol.subVectors(e,s);let d=qr.dot(Ol),_=Yr.dot(Ol);if(_>=0&&d<=_)return t.copy(s);let m=d*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Yr,a);let g=h*_-d*f;if(g<=0&&f-h>=0&&d-_>=0)return ku.subVectors(s,i),a=(f-h)/(f-h+(d-_)),t.copy(i).addScaledVector(ku,a);let p=1/(g+m+u);return o=m*p,a=u*p,t.copy(n).addScaledVector(qr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ym=0,us=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=rs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xf,this.blendDst=vf,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ge){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Wn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Wn.workingColorSpace){if(e=Lm(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fl(o,s,e+1/3),this.g=Fl(o,s,e),this.b=Fl(o,s,e-1/3)}return Wn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ge){let n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ge){return Wn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(fn(Xt.r*255,0,255))*65536+Math.round(fn(Xt.g*255,0,255))*256+Math.round(fn(Xt.b*255,0,255))}getHexString(e=Ge){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wn.workingColorSpace){Wn.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,s=Xt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wn.workingColorSpace){return Wn.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ge){Wn.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ge?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),Yn.h+=e,Yn.s+=t,Yn.l+=n,this.setHSL(Yn.h,Yn.s,Yn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Ba);let n=bl(Yn.h,Ba.h,t),i=bl(Yn.s,Ba.s,t),s=bl(Yn.l,Ba.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new lt;lt.NAMES=wf;var fs=class extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new z,za=new ot,Dn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ru,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var ao=class extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yi=class extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Zm=0,Pn=new Lt,Bl=new Nn,Zr=new z,Tn=new pr,Bs=new pr,Ot=new z,mr=class r extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ef(e)?oo:ao)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Tn.min,Bs.min),Tn.expandByPoint(Ot),Ot.addVectors(Tn.max,Bs.max),Tn.expandByPoint(Ot)):(Tn.expandByPoint(Bs.min),Tn.expandByPoint(Bs.max))}Tn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Ot.add(Zr)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new z,h[T]=new z;let f=new z,u=new z,d=new z,_=new ot,m=new ot,g=new ot,p=new z,y=new z;function v(T,H,O){f.fromArray(i,T*3),u.fromArray(i,H*3),d.fromArray(i,O*3),_.fromArray(o,T*2),m.fromArray(o,H*2),g.fromArray(o,O*2),u.sub(f),d.sub(f),m.sub(_),g.sub(_);let U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(p.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(U),y.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(U),c[T].add(p),c[H].add(p),c[O].add(p),h[T].add(y),h[H].add(y),h[O].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let T=0,H=E.length;T<H;++T){let O=E[T],U=O.start,F=O.count;for(let B=U,K=U+F;B<K;B+=3)v(n[B+0],n[B+1],n[B+2])}let M=new z,w=new z,A=new z,I=new z;function x(T){A.fromArray(s,T*3),I.copy(A);let H=c[T];M.copy(H),M.sub(A.multiplyScalar(A.dot(H))).normalize(),w.crossVectors(I,H);let U=w.dot(h[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=U}for(let T=0,H=E.length;T<H;++T){let O=E[T],U=O.start,F=O.count;for(let B=U,K=U+F;B<K;B+=3)x(n[B+0]),x(n[B+1]),x(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let u=0,d=e.count;u<d;u+=3){let _=e.getX(u+0),m=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let p=0;p<h;p++)u[_++]=c[d++]}return new Dn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Lt,ei=new ec,ka=new Xs,Hu=new z,Jr=new z,$r=new z,Kr=new z,zl=new z,Va=new z,Ha=new ot,Ga=new ot,Wa=new ot,Gu=new z,Wu=new z,Xu=new z,Xa=new z,qa=new z,In=class extends Nn{constructor(e=new mr,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(zl.fromBufferAttribute(f,e),o?Va.addScaledVector(zl,h):Va.addScaledVector(zl.sub(t),h))}t.add(Va)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ei.copy(e.ray).recast(e.near),!(ka.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ka,Hu)===null||ei.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Vu.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n,i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,f=i.groups,u=i.drawRange;if(o!==null)if(Array.isArray(s))for(let d=0,_=f.length;d<_;d++){let m=f[d],g=s[m.materialIndex],p=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=p,E=y;v<E;v+=3){let M=o.getX(v),w=o.getX(v+1),A=o.getX(v+2);n=Ya(this,g,e,ei,l,c,h,M,w,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let d=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=d,g=_;m<g;m+=3){let p=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);n=Ya(this,s,e,ei,l,c,h,p,y,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let d=0,_=f.length;d<_;d++){let m=f[d],g=s[m.materialIndex],p=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=p,E=y;v<E;v+=3){let M=v,w=v+1,A=v+2;n=Ya(this,g,e,ei,l,c,h,M,w,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let d=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=d,g=_;m<g;m+=3){let p=m,y=m+1,v=m+2;n=Ya(this,s,e,ei,l,c,h,p,y,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Jm(r,e,t,n,i,s,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Vi,a),l===null)return null;qa.copy(a),qa.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:r}}function Ya(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Jr),r.getVertexPosition(l,$r),r.getVertexPosition(c,Kr);let h=Jm(r,e,t,n,Jr,$r,Kr,Xa);if(h){i&&(Ha.fromBufferAttribute(i,a),Ga.fromBufferAttribute(i,l),Wa.fromBufferAttribute(i,c),h.uv=ns.getInterpolation(Xa,Jr,$r,Kr,Ha,Ga,Wa,new ot)),s&&(Ha.fromBufferAttribute(s,a),Ga.fromBufferAttribute(s,l),Wa.fromBufferAttribute(s,c),h.uv1=ns.getInterpolation(Xa,Jr,$r,Kr,Ha,Ga,Wa,new ot),h.uv2=h.uv1),o&&(Gu.fromBufferAttribute(o,a),Wu.fromBufferAttribute(o,l),Xu.fromBufferAttribute(o,c),h.normal=ns.getInterpolation(Xa,Jr,$r,Kr,Gu,Wu,Xu,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};ns.getNormal(Jr,$r,Kr,f.normal),h.face=f}return h}var qs=class r extends mr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(h,3)),this.setAttribute("uv",new yi(f,2));function _(m,g,p,y,v,E,M,w,A,I,x){let T=E/A,H=M/I,O=E/2,U=M/2,F=w/2,B=A+1,K=I+1,k=0,G=0,Q=new z;for(let R=0;R<K;R++){let le=R*H-U;for(let oe=0;oe<B;oe++){let q=oe*T-O;Q[m]=q*y,Q[g]=le*v,Q[p]=F,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[g]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(oe/A),f.push(1-R/I),k+=1}}for(let R=0;R<I;R++)for(let le=0;le<A;le++){let oe=u+le+B*R,q=u+le+B*(R+1),$=u+(le+1)+B*(R+1),ie=u+(le+1)+B*R;l.push(oe,q,ie),l.push(q,$,ie),G+=6}a.addGroup(d,G,x),d+=G,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){let e={};for(let t=0;t<r.length;t++){let n=ds(r[t]);for(let i in n)e[i]=n[i]}return e}function $m(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Af(r){return r.getRenderTarget()===null?r.outputColorSpace:ni}var Km={clone:ds,merge:jt},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=$m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},lo=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qt=class extends lo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qr=-90,jr=1,tc=class extends Nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new qt(Qr,jr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new qt(Qr,jr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let o=new qt(Qr,jr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let a=new qt(Qr,jr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let l=new qt(Qr,jr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new qt(Qr,jr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),f=e.toneMapping,u=e.xr.enabled;e.toneMapping=vi,e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},co=class extends Un{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nc=class extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?Ge:fr),this.texture=new co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ki});s.uniforms.tEquirect.value=t;let o=new In(i,s),a=t.minFilter;return t.minFilter===Gs&&(t.minFilter=Ln),new tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},kl=new z,eg=new z,tg=new Qe,_i=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=kl.subVectors(n,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tg.getNormalMatrix(e),i=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new Xs,Za=new z,Ys=class{constructor(e=new _i,t=new _i,n=new _i,i=new _i,s=new _i,o=new _i){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],f=n[7],u=n[8],d=n[9],_=n[10],m=n[11],g=n[12],p=n[13],y=n[14],v=n[15];return t[0].setComponents(a-i,f-l,m-u,v-g).normalize(),t[1].setComponents(a+i,f+l,m+u,v+g).normalize(),t[2].setComponents(a+s,f+c,m+d,v+p).normalize(),t[3].setComponents(a-s,f-c,m-d,v-p).normalize(),t[4].setComponents(a-o,f-h,m-_,v-y).normalize(),t[5].setComponents(a+o,f+h,m+_,v+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Za.x=i.normal.x>0?e.max.x:e.min.x,Za.y=i.normal.y>0?e.max.y:e.min.y,Za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ng(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let f=c.array,u=c.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,f,u),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,f){let u=h.array,d=h.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,u):(t?r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count):r.bufferSubData(f,d.offset*u.BYTES_PER_ELEMENT,u.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=n.get(c);f===void 0?n.set(c,i(c,h)):f.version<c.version&&(s(f.buffer,c,h),f.version=c.version)}return{get:o,remove:a,update:l}}var Zs=class r extends mr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,u=t/l,d=[],_=[],m=[],g=[];for(let p=0;p<h;p++){let y=p*u-o;for(let v=0;v<c;v++){let E=v*f-s;_.push(E,-y,0),m.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,E=y+c*(p+1),M=y+1+c*(p+1),w=y+1+c*p;d.push(v,E,w),d.push(E,M,w)}this.setIndex(d),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(m,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg="vec3 transformed = vec3( position );",hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Qg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,o_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,__=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,b_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Z_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,a0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,v0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,P0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xe={alphamap_fragment:ig,alphamap_pars_fragment:rg,alphatest_fragment:sg,alphatest_pars_fragment:ag,aomap_fragment:og,aomap_pars_fragment:lg,begin_vertex:cg,beginnormal_vertex:hg,bsdfs:ug,iridescence_fragment:fg,bumpmap_pars_fragment:dg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:_g,color_fragment:xg,color_pars_fragment:vg,color_pars_vertex:yg,color_vertex:Mg,common:Sg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Eg,displacementmap_vertex:wg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,encodings_fragment:Cg,encodings_pars_fragment:Pg,envmap_fragment:Lg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Dg,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:qg,envmap_vertex:Ng,fog_vertex:Og,fog_pars_vertex:Fg,fog_fragment:Bg,fog_pars_fragment:zg,gradientmap_pars_fragment:kg,lightmap_fragment:Vg,lightmap_pars_fragment:Hg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:$g,lights_physical_fragment:Kg,lights_physical_pars_fragment:Qg,lights_fragment_begin:jg,lights_fragment_maps:e_,lights_fragment_end:t_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:s_,map_fragment:a_,map_pars_fragment:o_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:u_,morphcolor_vertex:f_,morphnormal_vertex:d_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:x_,normal_pars_vertex:v_,normal_vertex:y_,normalmap_pars_fragment:M_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:b_,clearcoat_pars_fragment:T_,iridescence_pars_fragment:E_,output_fragment:w_,packing:A_,premultiplied_alpha_fragment:R_,project_vertex:C_,dithering_fragment:P_,dithering_pars_fragment:L_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:D_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:N_,shadowmap_vertex:O_,shadowmask_pars_fragment:F_,skinbase_vertex:B_,skinning_pars_vertex:z_,skinning_vertex:k_,skinnormal_vertex:V_,specularmap_fragment:H_,specularmap_pars_fragment:G_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:Y_,uv_pars_fragment:Z_,uv_pars_vertex:J_,uv_vertex:$_,worldpos_vertex:K_,background_vert:Q_,background_frag:j_,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:r0,depth_frag:s0,distanceRGBA_vert:a0,distanceRGBA_frag:o0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:f0,meshbasic_frag:d0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:_0,meshnormal_vert:x0,meshnormal_frag:v0,meshphong_vert:y0,meshphong_frag:M0,meshphysical_vert:S0,meshphysical_frag:b0,meshtoon_vert:T0,meshtoon_frag:E0,points_vert:w0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}}},ti={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Ja={r:0,b:0,g:0};function I0(r,e,t,n,i,s,o){let a=new lt(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function _(g,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0),r.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_o)?(h===void 0&&(h=new In(new qs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ds(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ge,(f!==v||u!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new In(new Zs(2,2),new Si({name:"BackgroundMaterial",uniforms:ds(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,p){g.getRGB(Ja,Af(r)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:_}}function D0(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null),c=l,h=!1;function f(F,B,K,k,G){let Q=!1;if(o){let R=m(k,K,B);c!==R&&(c=R,d(c.object)),Q=p(F,k,K,G),Q&&y(F,k,K,G)}else{let R=B.wireframe===!0;(c.geometry!==k.id||c.program!==K.id||c.wireframe!==R)&&(c.geometry=k.id,c.program=K.id,c.wireframe=R,Q=!0)}G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,I(F,B,K,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,B,K){let k=K.wireframe===!0,G=a[F.id];G===void 0&&(G={},a[F.id]=G);let Q=G[B.id];Q===void 0&&(Q={},G[B.id]=Q);let R=Q[k];return R===void 0&&(R=g(u()),Q[k]=R),R}function g(F){let B=[],K=[],k=[];for(let G=0;G<i;G++)B[G]=0,K[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:k,object:F,attributes:{},index:null}}function p(F,B,K,k){let G=c.attributes,Q=B.attributes,R=0,le=K.getAttributes();for(let oe in le)if(le[oe].location>=0){let $=G[oe],ie=Q[oe];if(ie===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),$===void 0||$.attribute!==ie||ie&&$.data!==ie.data)return!0;R++}return c.attributesNum!==R||c.index!==k}function y(F,B,K,k){let G={},Q=B.attributes,R=0,le=K.getAttributes();for(let oe in le)if(le[oe].location>=0){let $=Q[oe];$===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&($=F.instanceColor));let ie={};ie.attribute=$,$&&$.data&&(ie.data=$.data),G[oe]=ie,R++}c.attributes=G,c.attributesNum=R,c.index=k}function v(){let F=c.newAttributes;for(let B=0,K=F.length;B<K;B++)F[B]=0}function E(F){M(F,0)}function M(F,B){let K=c.newAttributes,k=c.enabledAttributes,G=c.attributeDivisors;K[F]=1,k[F]===0&&(r.enableVertexAttribArray(F),k[F]=1),G[F]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),G[F]=B)}function w(){let F=c.newAttributes,B=c.enabledAttributes;for(let K=0,k=B.length;K<k;K++)B[K]!==F[K]&&(r.disableVertexAttribArray(K),B[K]=0)}function A(F,B,K,k,G,Q){n.isWebGL2===!0&&(K===r.INT||K===r.UNSIGNED_INT)?r.vertexAttribIPointer(F,B,K,G,Q):r.vertexAttribPointer(F,B,K,k,G,Q)}function I(F,B,K,k){if(n.isWebGL2===!1&&(F.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let G=k.attributes,Q=K.getAttributes(),R=B.defaultAttributeValues;for(let le in Q){let oe=Q[le];if(oe.location>=0){let q=G[le];if(q===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(q=F.instanceColor)),q!==void 0){let $=q.normalized,ie=q.itemSize,se=t.get(q);if(se===void 0)continue;let L=se.buffer,we=se.type,be=se.bytesPerElement;if(q.isInterleavedBufferAttribute){let ae=q.data,ye=ae.stride,ke=q.offset;if(ae.isInstancedInterleavedBuffer){for(let re=0;re<oe.locationSize;re++)M(oe.location+re,ae.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let re=0;re<oe.locationSize;re++)E(oe.location+re);r.bindBuffer(r.ARRAY_BUFFER,L);for(let re=0;re<oe.locationSize;re++)A(oe.location+re,ie/oe.locationSize,we,$,ye*be,(ke+ie/oe.locationSize*re)*be)}else{if(q.isInstancedBufferAttribute){for(let ae=0;ae<oe.locationSize;ae++)M(oe.location+ae,q.meshPerAttribute);F.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ae=0;ae<oe.locationSize;ae++)E(oe.location+ae);r.bindBuffer(r.ARRAY_BUFFER,L);for(let ae=0;ae<oe.locationSize;ae++)A(oe.location+ae,ie/oe.locationSize,we,$,ie*be,ie/oe.locationSize*ae*be)}}else if(R!==void 0){let $=R[le];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(oe.location,$);break;case 3:r.vertexAttrib3fv(oe.location,$);break;case 4:r.vertexAttrib4fv(oe.location,$);break;default:r.vertexAttrib1fv(oe.location,$)}}}}w()}function x(){O();for(let F in a){let B=a[F];for(let K in B){let k=B[K];for(let G in k)_(k[G].object),delete k[G];delete B[K]}delete a[F]}}function T(F){if(a[F.id]===void 0)return;let B=a[F.id];for(let K in B){let k=B[K];for(let G in k)_(k[G].object),delete k[G];delete B[K]}delete a[F.id]}function H(F){for(let B in a){let K=a[B];if(K[F.id]===void 0)continue;let k=K[F.id];for(let G in k)_(k[G].object),delete k[G];delete K[F.id]}}function O(){U(),h=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function U0(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let u,d;if(i)u=r,d="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](s,c,h,f),t.update(h,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function N0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,E=o||e.has("OES_texture_float"),M=v&&E,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:w}}function O0(r){let e=this,t=null,n=0,i=!1,s=!1,o=new _i,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!g)s?h(null):c();else{let y=s?0:n,v=y*4,E=p.clippingState||null;l.value=E,E=h(_,u,v,d);for(let M=0;M!==v;++M)E[M]=t[M];p.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,_){let m=f!==null?f.length:0,g=null;if(m!==0){if(g=l.value,_!==!0||g===null){let p=d+m*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,E=d;v!==m;++v,E+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function F0(r){let e=new WeakMap;function t(o,a){return a===Yl?o.mapping=ls:a===Zl&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Yl||a===Zl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ic=class extends lo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},is=4,qu=[.125,.215,.35,.446,.526,.582],or=20,Vl=new ic,Yu=new lt,Hl=null,ar=(1+Math.sqrt(5))/2,es=1/ar,Zu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ar,es),new z(0,ar,-es),new z(es,0,ar),new z(-es,0,ar),new z(ar,es,0),new z(-ar,es,0)],ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hl=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ws,format:Jn,colorSpace:ni,depthBuffer:!1},i=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(s)),this._blurMaterial=z0(s,e,t)}return i}_compileMaterial(e){let t=new In(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,i){let a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Yu),h.toneMapping=vi,h.autoClear=!1;let d=new fs({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new In(new qs,d),m=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,m=!0):(d.color.copy(Yu),m=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;$a(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;$a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Zu[(i-1)%Zu.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new In(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*or-1),m=s/_,g=isFinite(s)?1+Math.floor(h*m):or;g>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);let p=[],y=0;for(let A=0;A<or;++A){let I=A/m,x=Math.exp(-I*I/2);p.push(x),A===0?y+=x:A<g&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-n;let E=this._sizeLods[i],M=3*E*(i>v-is?i-v+is:0),w=4*(this._cubeSize-E);$a(t,M,w,3*E,2*E),l.setRenderTarget(t),l.render(f,Vl)}};function B0(r){let e=[],t=[],n=[],i=r,s=r-is+1+qu.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-is?l=qu[o-r+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,m=3,g=2,p=1,y=new Float32Array(m*_*d),v=new Float32Array(g*_*d),E=new Float32Array(p*_*d);for(let w=0;w<d;w++){let A=w%3*2/3-1,I=w>2?0:-1,x=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(x,m*_*w),v.set(u,g*_*w);let T=[w,w,w,w,w,w];E.set(T,p*_*w)}let M=new mr;M.setAttribute("position",new Dn(y,m)),M.setAttribute("uv",new Dn(v,g)),M.setAttribute("faceIndex",new Dn(E,p)),e.push(M),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(r,e,t){let n=new Mi(r,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function z0(r,e,t){let n=new Float32Array(or),i=new z(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function $u(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ku(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yl||l===Zl,h=l===ls||l===cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ho(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new ho(r));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V0(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H0(r,e,t,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(e.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)e.update(u[_],r.ARRAY_BUFFER);let d=f.morphAttributes;for(let _ in d){let m=d[_];for(let g=0,p=m.length;g<p;g++)e.update(m[g],r.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,_=f.attributes.position,m=0;if(d!==null){let y=d.array;m=d.version;for(let v=0,E=y.length;v<E;v+=3){let M=y[v+0],w=y[v+1],A=y[v+2];u.push(M,w,w,A,A,M)}}else{let y=_.array;m=_.version;for(let v=0,E=y.length/3-1;v<E;v+=3){let M=v+0,w=v+1,A=v+2;u.push(M,w,w,A,A,M)}}let g=new(Ef(u)?oo:ao)(u,1);g.version=m;let p=s.get(f);p&&e.remove(p),s.set(f,g)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function G0(r,e,t,n){let i=n.isWebGL2,s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,d){r.drawElements(s,d,a,u*l),t.update(d,s,1)}function f(u,d,_){if(_===0)return;let m,g;if(i)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,d,a,u*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f}function W0(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function X0(r,e){return r[0]-e[0]}function q0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Y0(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let u=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=d!==void 0?d.length:0,m=s.get(h);if(m===void 0||m.count!==_){let F=function(){O.dispose(),s.delete(h),h.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],I=0;y===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let x=h.attributes.position.count*I,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let H=new Float32Array(x*T*4*_),O=new io(H,x,T,_);O.type=cr,O.needsUpdate=!0;let U=I*4;for(let B=0;B<_;B++){let K=M[B],k=w[B],G=A[B],Q=x*T*4*B;for(let R=0;R<K.count;R++){let le=R*U;y===!0&&(o.fromBufferAttribute(K,R),H[Q+le+0]=o.x,H[Q+le+1]=o.y,H[Q+le+2]=o.z,H[Q+le+3]=0),v===!0&&(o.fromBufferAttribute(k,R),H[Q+le+4]=o.x,H[Q+le+5]=o.y,H[Q+le+6]=o.z,H[Q+le+7]=0),E===!0&&(o.fromBufferAttribute(G,R),H[Q+le+8]=o.x,H[Q+le+9]=o.y,H[Q+le+10]=o.z,H[Q+le+11]=G.itemSize===4?o.w:1)}}m={count:_,texture:O,size:new ot(x,T)},s.set(h,m),h.addEventListener("dispose",F)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];let p=h.morphTargetsRelative?1:1-g;f.getUniforms().setValue(r,"morphTargetBaseInfluence",p),f.getUniforms().setValue(r,"morphTargetInfluences",u),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,_=n[h.id];if(_===void 0||_.length!==d){_=[];for(let v=0;v<d;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<d;v++){let E=_[v];E[0]=v,E[1]=u[v]}_.sort(q0);for(let v=0;v<8;v++)v<d&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(X0);let m=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let E=a[v],M=E[0],w=E[1];M!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+v)!==m[M]&&h.setAttribute("morphTarget"+v,m[M]),g&&h.getAttribute("morphNormal"+v)!==g[M]&&h.setAttribute("morphNormal"+v,g[M]),i[v]=w,p+=w):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let y=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Z0(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Cf=new Un,Pf=new io,Lf=new jl,If=new co,Qu=[],ju=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function ms(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Qu[i];if(s===void 0&&(s=new Float32Array(i),Qu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xo(r,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function J0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function K0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Q0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function j0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;nf.set(n),r.uniformMatrix2fv(this.addr,!1,nf),Dt(t,n)}}function ex(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;tf.set(n),r.uniformMatrix3fv(this.addr,!1,tf),Dt(t,n)}}function tx(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;ef.set(n),r.uniformMatrix4fv(this.addr,!1,ef),Dt(t,n)}}function nx(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ix(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function rx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function sx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function ax(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ox(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function lx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function cx(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function hx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cf,i)}function ux(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lf,i)}function fx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||If,i)}function dx(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pf,i)}function px(r){switch(r){case 5126:return J0;case 35664:return $0;case 35665:return K0;case 35666:return Q0;case 35674:return j0;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return dx}}function mx(r,e){r.uniform1fv(this.addr,e)}function gx(r,e){let t=ms(e,this.size,2);r.uniform2fv(this.addr,t)}function _x(r,e){let t=ms(e,this.size,3);r.uniform3fv(this.addr,t)}function xx(r,e){let t=ms(e,this.size,4);r.uniform4fv(this.addr,t)}function vx(r,e){let t=ms(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yx(r,e){let t=ms(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mx(r,e){let t=ms(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sx(r,e){r.uniform1iv(this.addr,e)}function bx(r,e){r.uniform2iv(this.addr,e)}function Tx(r,e){r.uniform3iv(this.addr,e)}function Ex(r,e){r.uniform4iv(this.addr,e)}function wx(r,e){r.uniform1uiv(this.addr,e)}function Ax(r,e){r.uniform2uiv(this.addr,e)}function Rx(r,e){r.uniform3uiv(this.addr,e)}function Cx(r,e){r.uniform4uiv(this.addr,e)}function Px(r,e,t){let n=this.cache,i=e.length,s=xo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cf,s[o])}function Lx(r,e,t){let n=this.cache,i=e.length,s=xo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Lf,s[o])}function Ix(r,e,t){let n=this.cache,i=e.length,s=xo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||If,s[o])}function Dx(r,e,t){let n=this.cache,i=e.length,s=xo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pf,s[o])}function Ux(r){switch(r){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return bx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Dx}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=px(t.type)}},sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ux(t.type)}},ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function rf(r,e){r.seq.push(e),r.map[e.id]=e}function Nx(r,e,t){let n=r.name,i=n.length;for(Gl.lastIndex=0;;){let s=Gl.exec(n),o=Gl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rf(t,c===void 0?new rc(a,r,e):new sc(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new ac(a),rf(t,f)),t=f}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Nx(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function sf(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Ox=0;function Fx(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bx(r){switch(r){case ni:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function af(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Fx(r.getShaderSource(e),o)}else return i}function zx(r,e){let t=Bx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kx(r,e){let t;switch(e){case sm:t="Linear";break;case am:t="Reinhard";break;case om:t="OptimizedCineon";break;case lm:t="ACESFilmic";break;case cm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vx(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function Hx(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gx(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ks(r){return r!==""}function of(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(r){return r.replace(Wx,Xx)}function Xx(r,e){let t=Xe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oc(t)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(r){return r.replace(qx,Yx)}function Yx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $x(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function Kx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case im:e="ENVMAP_BLENDING_MIX";break;case rm:e="ENVMAP_BLENDING_ADD";break}return e}function Qx(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jx(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Zx(t),c=Jx(t),h=$x(t),f=Kx(t),u=Qx(t),d=t.isWebGL2?"":Vx(t),_=Hx(s),m=i.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[_].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=[d,_].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[hf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[d,hf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==vi?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.encodings_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=oc(o),o=of(o,t),o=lf(o,t),a=oc(a),a=of(a,t),a=lf(a,t),o=cf(o),a=cf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,E=y+p+a,M=sf(i,i.VERTEX_SHADER,v),w=sf(i,i.FRAGMENT_SHADER,E);if(i.attachShader(m,M),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let x=i.getProgramInfoLog(m).trim(),T=i.getShaderInfoLog(M).trim(),H=i.getShaderInfoLog(w).trim(),O=!0,U=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,M,w);else{let F=af(i,M,"vertex"),B=af(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+B)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||H==="")&&(U=!1);U&&(this.diagnostics={runnable:O,programLog:x,vertexShader:{log:T,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(M),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new os(i,m)),A};let I;return this.getAttributes=function(){return I===void 0&&(I=Gx(i,m)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}var ev=0,lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cc(e),t.set(e,n)),n}},cc=class{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}};function tv(r,e,t,n,i,s,o){let a=new so,l=new lc,c=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,u=i.vertexTextures,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function g(x,T,H,O,U){let F=O.fog,B=U.geometry,K=x.isMeshStandardMaterial?O.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),G=k&&k.mapping===_o?k.image.height:null,Q=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let R=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=R!==void 0?R.length:0,oe=0;B.morphAttributes.position!==void 0&&(oe=1),B.morphAttributes.normal!==void 0&&(oe=2),B.morphAttributes.color!==void 0&&(oe=3);let q,$,ie,se;if(Q){let Ke=ti[Q];q=Ke.vertexShader,$=Ke.fragmentShader}else q=x.vertexShader,$=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);let L=r.getRenderTarget(),we=U.isInstancedMesh===!0,be=!!x.map,ae=!!x.matcap,ye=!!k,ke=!!x.aoMap,re=!!x.lightMap,Ae=!!x.bumpMap,nt=!!x.normalMap,rt=!!x.displacementMap,V=!!x.emissiveMap,it=!!x.metalnessMap,We=!!x.roughnessMap,st=x.clearcoat>0,$e=x.iridescence>0,C=x.sheen>0,b=x.transmission>0,Y=st&&!!x.clearcoatMap,j=st&&!!x.clearcoatNormalMap,te=st&&!!x.clearcoatRoughnessMap,ne=$e&&!!x.iridescenceMap,Re=$e&&!!x.iridescenceThicknessMap,de=C&&!!x.sheenColorMap,J=C&&!!x.sheenRoughnessMap,Te=!!x.specularMap,pe=!!x.specularColorMap,Pe=!!x.specularIntensityMap,me=b&&!!x.transmissionMap,Me=b&&!!x.thicknessMap,Ve=!!x.gradientMap,Ze=!!x.alphaMap,at=x.alphaTest>0,P=!!x.extensions,Z=!!B.attributes.uv1,ee=!!B.attributes.uv2,he=!!B.attributes.uv3;return{isWebGL2:h,shaderID:Q,shaderName:x.type,vertexShader:q,fragmentShader:$,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:we,instancingColor:we&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:L===null?r.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ni,map:be,matcap:ae,envMap:ye,envMapMode:ye&&k.mapping,envMapCubeUVHeight:G,aoMap:ke,lightMap:re,bumpMap:Ae,normalMap:nt,displacementMap:u&&rt,emissiveMap:V,normalMapObjectSpace:nt&&x.normalMapType===Cm,normalMapTangentSpace:nt&&x.normalMapType===Rm,metalnessMap:it,roughnessMap:We,clearcoat:st,clearcoatMap:Y,clearcoatNormalMap:j,clearcoatRoughnessMap:te,iridescence:$e,iridescenceMap:ne,iridescenceThicknessMap:Re,sheen:C,sheenColorMap:de,sheenRoughnessMap:J,specularMap:Te,specularColorMap:pe,specularIntensityMap:Pe,transmission:b,transmissionMap:me,thicknessMap:Me,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===rs,alphaMap:Ze,alphaTest:at,combine:x.combine,mapUv:be&&m(x.map.channel),aoMapUv:ke&&m(x.aoMap.channel),lightMapUv:re&&m(x.lightMap.channel),bumpMapUv:Ae&&m(x.bumpMap.channel),normalMapUv:nt&&m(x.normalMap.channel),displacementMapUv:rt&&m(x.displacementMap.channel),emissiveMapUv:V&&m(x.emissiveMap.channel),metalnessMapUv:it&&m(x.metalnessMap.channel),roughnessMapUv:We&&m(x.roughnessMap.channel),clearcoatMapUv:Y&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(x.sheenRoughnessMap.channel),specularMapUv:Te&&m(x.specularMap.channel),specularColorMapUv:pe&&m(x.specularColorMap.channel),specularIntensityMapUv:Pe&&m(x.specularIntensityMap.channel),transmissionMapUv:me&&m(x.transmissionMap.channel),thicknessMapUv:Me&&m(x.thicknessMap.channel),alphaMapUv:Ze&&m(x.alphaMap.channel),vertexTangents:nt&&!!B.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Z,vertexUv2s:ee,vertexUv3s:he,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(be||Ze),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:vi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xi,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:P&&x.extensions.derivatives===!0,extensionFragDepth:P&&x.extensions.fragDepth===!0,extensionDrawBuffers:P&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let H in x.defines)T.push(H),T.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(y(T,x),v(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),x.push(a.mask)}function E(x){let T=_[x.type],H;if(T){let O=ti[T];H=Km.clone(O.uniforms)}else H=x.uniforms;return H}function M(x,T){let H;for(let O=0,U=c.length;O<U;O++){let F=c[O];if(F.cacheKey===T){H=F,++H.usedTimes;break}}return H===void 0&&(H=new jx(r,T,x,s),c.push(H)),H}function w(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:I}}function nv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function uf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ff(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,u,d,_,m,g){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=m,p.group=g),e++,p}function a(f,u,d,_,m,g){let p=o(f,u,d,_,m,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,u,d,_,m,g){let p=o(f,u,d,_,m,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||iv),n.length>1&&n.sort(u||uf),i.length>1&&i.sort(u||uf)}function h(){for(let f=e,u=r.length;f<u;f++){let d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function rv(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new ff,r.set(n,[o])):i>=s.length?(o=new ff,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function sv(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new lt};break;case"SpotLight":t={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function av(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var ov=0;function lv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cv(r,e){let t=new sv,n=av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new z);let s=new z,o=new Lt,a=new Lt;function l(h,f){let u=0,d=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,g=0,p=0,y=0,v=0,E=0,M=0,w=0,A=0,I=0;h.sort(lv);let x=f===!0?Math.PI:1;for(let H=0,O=h.length;H<O;H++){let U=h[H],F=U.color,B=U.intensity,K=U.distance,k=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=F.r*B*x,d+=F.g*B*x,_+=F.b*B*x;else if(U.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],B);else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){let Q=U.shadow,R=n.get(U);R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.directionalShadow[m]=R,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=U.shadow.matrix,E++}i.directional[m]=G,m++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(F).multiplyScalar(B*x),G.distance=K,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[p]=G;let Q=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,Q.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[p]=Q.matrix,U.castShadow){let R=n.get(U);R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=k,w++}p++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=G,y++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*x),G.distance=U.distance,G.decay=U.decay,U.castShadow){let Q=U.shadow,R=n.get(U);R.shadowBias=Q.bias,R.shadowNormalBias=Q.normalBias,R.shadowRadius=Q.radius,R.shadowMapSize=Q.mapSize,R.shadowCameraNear=Q.camera.near,R.shadowCameraFar=Q.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=U.shadow.matrix,M++}i.point[g]=G,g++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(B*x),G.groundColor.copy(U.groundColor).multiplyScalar(B*x),i.hemi[v]=G,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=_;let T=i.hash;(T.directionalLength!==m||T.pointLength!==g||T.spotLength!==p||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==E||T.numPointShadows!==M||T.numSpotShadows!==w||T.numSpotMaps!==A)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=y,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,T.directionalLength=m,T.pointLength=g,T.spotLength=p,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=E,T.numPointShadows=M,T.numSpotShadows=w,T.numSpotMaps=A,i.version=ov++)}function c(h,f){let u=0,d=0,_=0,m=0,g=0,p=f.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let E=h[y];if(E.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(E.isSpotLight){let M=i.spot[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),_++}else if(E.isRectAreaLight){let M=i.rectArea[m];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function df(r,e){let t=new cv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hv(r,e){let t=new WeakMap;function n(s,o=0){let a=t.get(s),l;return a===void 0?(l=new df(r,e),t.set(s,[l])):o>=a.length?(l=new df(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var hc=class extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uc=class extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dv(r,e,t){let n=new Ys,i=new ot,s=new ot,o=new mt,a=new hc({depthPacking:Am}),l=new uc,c={},h=t.maxTextureSize,f={[Vi]:dn,[dn]:Vi,[xi]:xi},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:uv,fragmentShader:fv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new mr;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new In(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let p=this.type;this.render=function(M,w,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;let I=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ki),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=p!==gi&&this.type===gi,U=p===gi&&this.type!==gi;for(let F=0,B=M.length;F<B;F++){let K=M[F],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let G=k.getFrameExtents();if(i.multiply(G),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,k.mapSize.y=s.y)),k.map===null||O===!0||U===!0){let R=this.type!==gi?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new Mi(i.x,i.y,R),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let Q=k.getViewportCount();for(let R=0;R<Q;R++){let le=k.getViewport(R);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),H.viewport(o),k.updateMatrices(K,R),n=k.getFrustum(),E(w,A,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===gi&&y(k,A),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(I,x,T)};function y(M,w){let A=e.update(m);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Mi(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,A,u,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,A,d,m,null)}function v(M,w,A,I){let x=null,T=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)x=T;else if(x=A.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=x.uuid,O=w.uuid,U=c[H];U===void 0&&(U={},c[H]=U);let F=U[O];F===void 0&&(F=x.clone(),U[O]=F),x=F}if(x.visible=w.visible,x.wireframe=w.wireframe,I===gi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=r.properties.get(x);H.light=A}return x}function E(M,w,A,I,x){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===gi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let O=e.update(M),U=M.material;if(Array.isArray(U)){let F=O.groups;for(let B=0,K=F.length;B<K;B++){let k=F[B],G=U[k.materialIndex];if(G&&G.visible){let Q=v(M,G,I,x);r.renderBufferDirect(A,null,O,Q,M,k)}}}else if(U.visible){let F=v(M,U,I,x);r.renderBufferDirect(A,null,O,F,M,null)}}let H=M.children;for(let O=0,U=H.length;O<U;O++)E(H[O],w,A,I,x)}}function pv(r,e,t){let n=t.isWebGL2;function i(){let P=!1,Z=new mt,ee=null,he=new mt(0,0,0,0);return{setMask:function(ge){ee!==ge&&!P&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){P=ge},setClear:function(ge,Ke,tt,ht,un){un===!0&&(ge*=ht,Ke*=ht,tt*=ht),Z.set(ge,Ke,tt,ht),he.equals(Z)===!1&&(r.clearColor(ge,Ke,tt,ht),he.copy(Z))},reset:function(){P=!1,ee=null,he.set(-1,0,0,0)}}}function s(){let P=!1,Z=null,ee=null,he=null;return{setTest:function(ge){ge?L(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(ge){Z!==ge&&!P&&(r.depthMask(ge),Z=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case $p:r.depthFunc(r.NEVER);break;case Kp:r.depthFunc(r.ALWAYS);break;case Qp:r.depthFunc(r.LESS);break;case ql:r.depthFunc(r.LEQUAL);break;case jp:r.depthFunc(r.EQUAL);break;case em:r.depthFunc(r.GEQUAL);break;case tm:r.depthFunc(r.GREATER);break;case nm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=ge}},setLocked:function(ge){P=ge},setClear:function(ge){he!==ge&&(r.clearDepth(ge),he=ge)},reset:function(){P=!1,Z=null,ee=null,he=null}}}function o(){let P=!1,Z=null,ee=null,he=null,ge=null,Ke=null,tt=null,ht=null,un=null;return{setTest:function(ve){P||(ve?L(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(ve){Z!==ve&&!P&&(r.stencilMask(ve),Z=ve)},setFunc:function(ve,Se,ze){(ee!==ve||he!==Se||ge!==ze)&&(r.stencilFunc(ve,Se,ze),ee=ve,he=Se,ge=ze)},setOp:function(ve,Se,ze){(Ke!==ve||tt!==Se||ht!==ze)&&(r.stencilOp(ve,Se,ze),Ke=ve,tt=Se,ht=ze)},setLocked:function(ve){P=ve},setClear:function(ve){un!==ve&&(r.clearStencil(ve),un=ve)},reset:function(){P=!1,Z=null,ee=null,he=null,ge=null,Ke=null,tt=null,ht=null,un=null}}}let a=new i,l=new s,c=new o,h=new WeakMap,f=new WeakMap,u={},d={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,E=null,M=null,w=null,A=null,I=null,x=!1,T=null,H=null,O=null,U=null,F=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,k=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=k>=2);let Q=null,R={},le=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),q=new mt().fromArray(le),$=new mt().fromArray(oe);function ie(P,Z,ee,he){let ge=new Uint8Array(4),Ke=r.createTexture();r.bindTexture(P,Ke),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let tt=0;tt<ee;tt++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(Z,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(Z+tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return Ke}let se={};se[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(se[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(r.DEPTH_TEST),l.setFunc(ql),rt(!1),V(Jh),L(r.CULL_FACE),Ae(ki);function L(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function we(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function be(P,Z){return d[P]!==Z?(r.bindFramebuffer(P,Z),d[P]=Z,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Z),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Z)),!0):!1}function ae(P,Z){let ee=m,he=!1;if(P)if(ee=_.get(Z),ee===void 0&&(ee=[],_.set(Z,ee)),P.isWebGLMultipleRenderTargets){let ge=P.texture;if(ee.length!==ge.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Ke=0,tt=ge.length;Ke<tt;Ke++)ee[Ke]=r.COLOR_ATTACHMENT0+Ke;ee.length=ge.length,he=!0}}else ee[0]!==r.COLOR_ATTACHMENT0&&(ee[0]=r.COLOR_ATTACHMENT0,he=!0);else ee[0]!==r.BACK&&(ee[0]=r.BACK,he=!0);he&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ye(P){return g!==P?(r.useProgram(P),g=P,!0):!1}let ke={[ts]:r.FUNC_ADD,[zp]:r.FUNC_SUBTRACT,[kp]:r.FUNC_REVERSE_SUBTRACT};if(n)ke[jh]=r.MIN,ke[eu]=r.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(ke[jh]=P.MIN_EXT,ke[eu]=P.MAX_EXT)}let re={[Vp]:r.ZERO,[Hp]:r.ONE,[Gp]:r.SRC_COLOR,[xf]:r.SRC_ALPHA,[Jp]:r.SRC_ALPHA_SATURATE,[Yp]:r.DST_COLOR,[Xp]:r.DST_ALPHA,[Wp]:r.ONE_MINUS_SRC_COLOR,[vf]:r.ONE_MINUS_SRC_ALPHA,[Zp]:r.ONE_MINUS_DST_COLOR,[qp]:r.ONE_MINUS_DST_ALPHA};function Ae(P,Z,ee,he,ge,Ke,tt,ht){if(P===ki){p===!0&&(we(r.BLEND),p=!1);return}if(p===!1&&(L(r.BLEND),p=!0),P!==Bp){if(P!==y||ht!==x){if((v!==ts||w!==ts)&&(r.blendEquation(r.FUNC_ADD),v=ts,w=ts),ht)switch(P){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $h:r.blendFunc(r.ONE,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $h:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,M=null,A=null,I=null,y=P,x=ht}return}ge=ge||Z,Ke=Ke||ee,tt=tt||he,(Z!==v||ge!==w)&&(r.blendEquationSeparate(ke[Z],ke[ge]),v=Z,w=ge),(ee!==E||he!==M||Ke!==A||tt!==I)&&(r.blendFuncSeparate(re[ee],re[he],re[Ke],re[tt]),E=ee,M=he,A=Ke,I=tt),y=P,x=!1}function nt(P,Z){P.side===xi?we(r.CULL_FACE):L(r.CULL_FACE);let ee=P.side===dn;Z&&(ee=!ee),rt(ee),P.blending===rs&&P.transparent===!1?Ae(ki):Ae(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let he=P.stencilWrite;c.setTest(he),he&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),We(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?L(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(P){T!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),T=P)}function V(P){P!==Np?(L(r.CULL_FACE),P!==H&&(P===Jh?r.cullFace(r.BACK):P===Op?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),H=P}function it(P){P!==O&&(K&&r.lineWidth(P),O=P)}function We(P,Z,ee){P?(L(r.POLYGON_OFFSET_FILL),(U!==Z||F!==ee)&&(r.polygonOffset(Z,ee),U=Z,F=ee)):we(r.POLYGON_OFFSET_FILL)}function st(P){P?L(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function $e(P){P===void 0&&(P=r.TEXTURE0+B-1),Q!==P&&(r.activeTexture(P),Q=P)}function C(P,Z,ee){ee===void 0&&(Q===null?ee=r.TEXTURE0+B-1:ee=Q);let he=R[ee];he===void 0&&(he={type:void 0,texture:void 0},R[ee]=he),(he.type!==P||he.texture!==Z)&&(Q!==ee&&(r.activeTexture(ee),Q=ee),r.bindTexture(P,Z||se[P]),he.type=P,he.texture=Z)}function b(){let P=R[Q];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){q.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function Me(P){$.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Ve(P,Z){let ee=f.get(Z);ee===void 0&&(ee=new WeakMap,f.set(Z,ee));let he=ee.get(P);he===void 0&&(he=r.getUniformBlockIndex(Z,P.name),ee.set(P,he))}function Ze(P,Z){let he=f.get(Z).get(P);h.get(Z)!==he&&(r.uniformBlockBinding(Z,he,P.__bindingPointIndex),h.set(Z,he))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,R={},d={},_=new WeakMap,m=[],g=null,p=!1,y=null,v=null,E=null,M=null,w=null,A=null,I=null,x=!1,T=null,H=null,O=null,U=null,F=null,q.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:L,disable:we,bindFramebuffer:be,drawBuffers:ae,useProgram:ye,setBlending:Ae,setMaterial:nt,setFlipSided:rt,setCullFace:V,setLineWidth:it,setPolygonOffset:We,setScissorTest:st,activeTexture:$e,bindTexture:C,unbindTexture:b,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:pe,texImage3D:Pe,updateUBOMapping:Ve,uniformBlockBinding:Ze,texStorage2D:J,texStorage3D:Te,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:Re,compressedTexSubImage3D:de,scissor:me,viewport:Me,reset:at}}function mv(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,m,g=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return p?new OffscreenCanvas(C,b):eo("canvas")}function v(C,b,Y,j){let te=1;if((C.width>j||C.height>j)&&(te=j/Math.max(C.width,C.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ne=b?Im:Math.floor,Re=ne(te*C.width),de=ne(te*C.height);m===void 0&&(m=y(Re,de));let J=Y?y(Re,de):m;return J.width=Re,J.height=de,J.getContext("2d").drawImage(C,0,0,Re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Re+"x"+de+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function E(C){return Pu(C.width)&&Pu(C.height)}function M(C){return a?!1:C.wrapS!==Zn||C.wrapT!==Zn||C.minFilter!==en&&C.minFilter!==Ln}function w(C,b){return C.generateMipmaps&&b&&C.minFilter!==en&&C.minFilter!==Ln}function A(C){r.generateMipmap(C)}function I(C,b,Y,j,te=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=b;return b===r.RED&&(Y===r.FLOAT&&(ne=r.R32F),Y===r.HALF_FLOAT&&(ne=r.R16F),Y===r.UNSIGNED_BYTE&&(ne=r.R8)),b===r.RG&&(Y===r.FLOAT&&(ne=r.RG32F),Y===r.HALF_FLOAT&&(ne=r.RG16F),Y===r.UNSIGNED_BYTE&&(ne=r.RG8)),b===r.RGBA&&(Y===r.FLOAT&&(ne=r.RGBA32F),Y===r.HALF_FLOAT&&(ne=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ne=j===Ge&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)),(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(C,b,Y){return w(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){return C===en||C===tu||C===pl?r.NEAREST:r.LINEAR}function H(C){let b=C.target;b.removeEventListener("dispose",H),U(b),b.isVideoTexture&&_.delete(b)}function O(C){let b=C.target;b.removeEventListener("dispose",O),B(b)}function U(C){let b=n.get(C);if(b.__webglInit===void 0)return;let Y=C.source,j=g.get(Y);if(j){let te=j[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(C),Object.keys(j).length===0&&g.delete(Y)}n.remove(C)}function F(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let Y=C.source,j=g.get(Y);delete j[b.__cacheKey],o.memory.textures--}function B(C){let b=C.texture,Y=n.get(C),j=n.get(b);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(Y.__webglFramebuffer[te]),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let te=0;te<Y.__webglColorRenderbuffer.length;te++)Y.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[te]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ne=b.length;te<ne;te++){let Re=n.get(b[te]);Re.__webglTexture&&(r.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(C)}let K=0;function k(){K=0}function G(){let C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function Q(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function R(C,b){let Y=n.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Y,C,b);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+b)}function le(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){we(Y,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+b)}function oe(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){we(Y,C,b);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+b)}function q(C,b){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){be(Y,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+b)}let $={[Jl]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[$l]:r.MIRRORED_REPEAT},ie={[en]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[pl]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[hm]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR};function se(C,b,Y){if(Y?(r.texParameteri(C,r.TEXTURE_WRAP_S,$[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,$[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,$[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ie[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ie[b.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==Zn||b.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,T(b.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==en&&b.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===en||b.minFilter!==pl&&b.minFilter!==Gs||b.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ws&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function L(C,b){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",H));let j=b.source,te=g.get(j);te===void 0&&(te={},g.set(j,te));let ne=Q(b);if(ne!==C.__cacheKey){te[ne]===void 0&&(te[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),te[ne].usedTimes++;let Re=te[C.__cacheKey];Re!==void 0&&(te[C.__cacheKey].usedTimes--,Re.usedTimes===0&&F(b)),C.__cacheKey=ne,C.__webglTexture=te[ne].texture}return Y}function we(C,b,Y){let j=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=r.TEXTURE_3D);let te=L(C,b),ne=b.source;t.bindTexture(j,C.__webglTexture,r.TEXTURE0+Y);let Re=n.get(ne);if(ne.version!==Re.__version||te===!0){t.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let de=M(b)&&E(b.image)===!1,J=v(b.image,de,!1,h);J=$e(b,J);let Te=E(J)||a,pe=s.convert(b.format,b.colorSpace),Pe=s.convert(b.type),me=I(b.internalFormat,pe,Pe,b.colorSpace);se(j,b,Te);let Me,Ve=b.mipmaps,Ze=a&&b.isVideoTexture!==!0,at=Re.__version===void 0||te===!0,P=x(b,J,Te);if(b.isDepthTexture)me=r.DEPTH_COMPONENT,a?b.type===cr?me=r.DEPTH_COMPONENT32F:b.type===lr?me=r.DEPTH_COMPONENT24:b.type===ss?me=r.DEPTH24_STENCIL8:me=r.DEPTH_COMPONENT16:b.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===hr&&me===r.DEPTH_COMPONENT&&b.type!==Sf&&b.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=lr,Pe=s.convert(b.type)),b.format===hs&&me===r.DEPTH_COMPONENT&&(me=r.DEPTH_STENCIL,b.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ss,Pe=s.convert(b.type))),at&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,me,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,me,J.width,J.height,0,pe,Pe,null));else if(b.isDataTexture)if(Ve.length>0&&Te){Ze&&at&&t.texStorage2D(r.TEXTURE_2D,P,me,Ve[0].width,Ve[0].height);for(let Z=0,ee=Ve.length;Z<ee;Z++)Me=Ve[Z],Ze?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,pe,Pe,Me.data):t.texImage2D(r.TEXTURE_2D,Z,me,Me.width,Me.height,0,pe,Pe,Me.data);b.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(r.TEXTURE_2D,P,me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,pe,Pe,J.data)):t.texImage2D(r.TEXTURE_2D,0,me,J.width,J.height,0,pe,Pe,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,P,me,Ve[0].width,Ve[0].height,J.depth);for(let Z=0,ee=Ve.length;Z<ee;Z++)Me=Ve[Z],b.format!==Jn?pe!==null?Ze?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,J.depth,pe,Me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,me,Me.width,Me.height,J.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,J.depth,pe,Pe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,me,Me.width,Me.height,J.depth,0,pe,Pe,Me.data)}else{Ze&&at&&t.texStorage2D(r.TEXTURE_2D,P,me,Ve[0].width,Ve[0].height);for(let Z=0,ee=Ve.length;Z<ee;Z++)Me=Ve[Z],b.format!==Jn?pe!==null?Ze?t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,pe,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,me,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,Me.width,Me.height,pe,Pe,Me.data):t.texImage2D(r.TEXTURE_2D,Z,me,Me.width,Me.height,0,pe,Pe,Me.data)}else if(b.isDataArrayTexture)Ze?(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,P,me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,Pe,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,J.width,J.height,J.depth,0,pe,Pe,J.data);else if(b.isData3DTexture)Ze?(at&&t.texStorage3D(r.TEXTURE_3D,P,me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,Pe,J.data)):t.texImage3D(r.TEXTURE_3D,0,me,J.width,J.height,J.depth,0,pe,Pe,J.data);else if(b.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(r.TEXTURE_2D,P,me,J.width,J.height);else{let Z=J.width,ee=J.height;for(let he=0;he<P;he++)t.texImage2D(r.TEXTURE_2D,he,me,Z,ee,0,pe,Pe,null),Z>>=1,ee>>=1}}else if(Ve.length>0&&Te){Ze&&at&&t.texStorage2D(r.TEXTURE_2D,P,me,Ve[0].width,Ve[0].height);for(let Z=0,ee=Ve.length;Z<ee;Z++)Me=Ve[Z],Ze?t.texSubImage2D(r.TEXTURE_2D,Z,0,0,pe,Pe,Me):t.texImage2D(r.TEXTURE_2D,Z,me,pe,Pe,Me);b.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(r.TEXTURE_2D,P,me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Pe,J)):t.texImage2D(r.TEXTURE_2D,0,me,pe,Pe,J);w(b,Te)&&A(j),Re.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function be(C,b,Y){if(b.image.length!==6)return;let j=L(C,b),te=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);let ne=n.get(te);if(te.version!==ne.__version||j===!0){t.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);let Re=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!Re&&!de?J[Z]=v(b.image[Z],!1,!0,c):J[Z]=de?b.image[Z].image:b.image[Z],J[Z]=$e(b,J[Z]);let Te=J[0],pe=E(Te)||a,Pe=s.convert(b.format,b.colorSpace),me=s.convert(b.type),Me=I(b.internalFormat,Pe,me,b.colorSpace),Ve=a&&b.isVideoTexture!==!0,Ze=ne.__version===void 0||j===!0,at=x(b,Te,pe);se(r.TEXTURE_CUBE_MAP,b,pe);let P;if(Re){Ve&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Me,Te.width,Te.height);for(let Z=0;Z<6;Z++){P=J[Z].mipmaps;for(let ee=0;ee<P.length;ee++){let he=P[ee];b.format!==Jn?Pe!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee,0,0,he.width,he.height,Pe,me,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee,Me,he.width,he.height,0,Pe,me,he.data)}}}else{P=b.mipmaps,Ve&&Ze&&(P.length>0&&at++,t.texStorage2D(r.TEXTURE_CUBE_MAP,at,Me,J[0].width,J[0].height));for(let Z=0;Z<6;Z++)if(de){Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,Pe,me,J[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,J[Z].width,J[Z].height,0,Pe,me,J[Z].data);for(let ee=0;ee<P.length;ee++){let ge=P[ee].image[Z].image;Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee+1,0,0,ge.width,ge.height,Pe,me,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee+1,Me,ge.width,ge.height,0,Pe,me,ge.data)}}else{Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,me,J[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Me,Pe,me,J[Z]);for(let ee=0;ee<P.length;ee++){let he=P[ee];Ve?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee+1,0,0,Pe,me,he.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee+1,Me,Pe,me,he.image[Z])}}}w(b,pe)&&A(r.TEXTURE_CUBE_MAP),ne.__version=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ae(C,b,Y,j,te){let ne=s.convert(Y.format,Y.colorSpace),Re=s.convert(Y.type),de=I(Y.internalFormat,ne,Re,Y.colorSpace);n.get(b).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,de,b.width,b.height,b.depth,0,ne,Re,null):t.texImage2D(te,0,de,b.width,b.height,0,ne,Re,null)),t.bindFramebuffer(r.FRAMEBUFFER,C),We(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,te,n.get(Y).__webglTexture,0,it(b)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,te,n.get(Y).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(C,b,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let j=r.DEPTH_COMPONENT16;if(Y||We(b)){let te=b.depthTexture;te&&te.isDepthTexture&&(te.type===cr?j=r.DEPTH_COMPONENT32F:te.type===lr&&(j=r.DEPTH_COMPONENT24));let ne=it(b);We(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,j,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,j,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,j,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let j=it(b);Y&&We(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,b.width,b.height):We(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{let j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<j.length;te++){let ne=j[te],Re=s.convert(ne.format,ne.colorSpace),de=s.convert(ne.type),J=I(ne.internalFormat,Re,de,ne.colorSpace),Te=it(b);Y&&We(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,J,b.width,b.height):We(b)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,J,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,J,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ke(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);let j=n.get(b.depthTexture).__webglTexture,te=it(b);if(b.depthTexture.format===hr)We(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(b.depthTexture.format===hs)We(b)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function re(C){let b=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ke(b.__webglFramebuffer,C)}else if(Y){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=r.createRenderbuffer(),ye(b.__webglDepthbuffer[j],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ye(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,b,Y){let j=n.get(C);b!==void 0&&ae(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Y!==void 0&&re(C)}function nt(C){let b=C.texture,Y=n.get(C),j=n.get(b);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=b.version,o.memory.textures++);let te=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,Re=E(C)||a;if(te){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)Y.__webglFramebuffer[de]=r.createFramebuffer()}else{if(Y.__webglFramebuffer=r.createFramebuffer(),ne)if(i.drawBuffers){let de=C.texture;for(let J=0,Te=de.length;J<Te;J++){let pe=n.get(de[J]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&We(C)===!1){let de=ne?b:[b];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let J=0;J<de.length;J++){let Te=de[J];Y.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[J]);let pe=s.convert(Te.format,Te.colorSpace),Pe=s.convert(Te.type),me=I(Te.internalFormat,pe,Pe,Te.colorSpace,C.isXRRenderTarget===!0),Me=it(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,Y.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),se(r.TEXTURE_CUBE_MAP,b,Re);for(let de=0;de<6;de++)ae(Y.__webglFramebuffer[de],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de);w(b,Re)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let de=C.texture;for(let J=0,Te=de.length;J<Te;J++){let pe=de[J],Pe=n.get(pe);t.bindTexture(r.TEXTURE_2D,Pe.__webglTexture),se(r.TEXTURE_2D,pe,Re),ae(Y.__webglFramebuffer,C,pe,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D),w(pe,Re)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,j.__webglTexture),se(de,b,Re),ae(Y.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,de),w(b,Re)&&A(de),t.unbindTexture()}C.depthBuffer&&re(C)}function rt(C){let b=E(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let j=0,te=Y.length;j<te;j++){let ne=Y[j];if(w(ne,b)){let Re=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(ne).__webglTexture;t.bindTexture(Re,de),A(Re),t.unbindTexture()}}}function V(C){if(a&&C.samples>0&&We(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,j=C.height,te=r.COLOR_BUFFER_BIT,ne=[],Re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){ne.push(r.COLOR_ATTACHMENT0+Te),C.depthBuffer&&ne.push(Re);let pe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(pe===!1&&(C.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),J&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[Te]),pe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Re]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Re])),J){let Pe=n.get(b[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,Y,j,0,0,Y,j,te,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,de.__webglColorRenderbuffer[Te]);let pe=n.get(b[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function it(C){return Math.min(f,C.samples)}function We(C){let b=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function st(C){let b=o.render.frame;_.get(C)!==b&&(_.set(C,b),C.update())}function $e(C,b){let Y=C.colorSpace,j=C.format,te=C.type;return C.isCompressedTexture===!0||C.format===Kl||Y!==ni&&Y!==fr&&(Y===Ge?a===!1?e.has("EXT_sRGB")===!0&&j===Jn?(C.format=Kl,C.minFilter=Ln,C.generateMipmaps=!1):b=to.sRGBToLinear(b):(j!==Jn||te!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=R,this.setTexture2DArray=le,this.setTexture3D=oe,this.setTextureCube=q,this.rebindTextures=Ae,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=We}function gv(r,e,t){let n=t.isWebGL2;function i(s,o=fr){let a;if(s===dr)return r.UNSIGNED_BYTE;if(s===pm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===mm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===um)return r.BYTE;if(s===fm)return r.SHORT;if(s===Sf)return r.UNSIGNED_SHORT;if(s===dm)return r.INT;if(s===lr)return r.UNSIGNED_INT;if(s===cr)return r.FLOAT;if(s===Ws)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gm)return r.ALPHA;if(s===Jn)return r.RGBA;if(s===_m)return r.LUMINANCE;if(s===xm)return r.LUMINANCE_ALPHA;if(s===hr)return r.DEPTH_COMPONENT;if(s===hs)return r.DEPTH_STENCIL;if(s===Kl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vm)return r.RED;if(s===ym)return r.RED_INTEGER;if(s===Mm)return r.RG;if(s===Sm)return r.RG_INTEGER;if(s===bm)return r.RGBA_INTEGER;if(s===ml||s===gl||s===_l||s===xl)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ml)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ml)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_l)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nu||s===iu||s===ru||s===su)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===iu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===ou)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===au)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ou)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===cu||s===hu||s===uu||s===fu||s===du||s===pu||s===mu||s===gu||s===_u||s===xu||s===vu||s===yu||s===Mu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===du)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_u)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mu)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vl)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Em||s===Su||s===bu||s===Tu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Su)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ss?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var fc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zi=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_v={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dc=class extends Un{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:hr,h!==hr&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=lr),n===void 0&&h===hs&&(n=ss),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1}},pc=class extends Hi{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null,m=t.getContextAttributes(),g=null,p=null,y=[],v=[],E=new Set,M=new Map,w=new qt;w.layers.enable(1),w.viewport=new mt;let A=new qt;A.layers.enable(2),A.viewport=new mt;let I=[w,A],x=new fc;x.layers.enable(1),x.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=y[q];return $===void 0&&($=new Hs,y[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=y[q];return $===void 0&&($=new Hs,y[q]=$),$.getGripSpace()},this.getHand=function(q){let $=y[q];return $===void 0&&($=new Hs,y[q]=$),$.getHandSpace()};function O(q){let $=v.indexOf(q.inputSource);if($===-1)return;let ie=y[$];ie!==void 0&&ie.dispatchEvent({type:q.type,data:q.inputSource})}function U(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",F);for(let q=0;q<y.length;q++){let $=v[q];$!==null&&(v[q]=null,y[q].disconnect($))}T=null,H=null,e.setRenderTarget(g),d=null,u=null,f=null,i=null,p=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",U),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:d}),p=new Mi(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ie=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?hs:hr,ie=m.stencil?ss:lr);let L={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(L),i.updateRenderState({layers:[u]}),p=new Mi(u.textureWidth,u.textureHeight,{format:Jn,type:dr,depthTexture:new dc(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let we=e.properties.get(p);we.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(q){for(let $=0;$<q.removed.length;$++){let ie=q.removed[$],se=v.indexOf(ie);se>=0&&(v[se]=null,y[se].disconnect(ie))}for(let $=0;$<q.added.length;$++){let ie=q.added[$],se=v.indexOf(ie);if(se===-1){for(let we=0;we<y.length;we++)if(we>=v.length){v.push(ie),se=we;break}else if(v[we]===null){v[we]=ie,se=we;break}if(se===-1)break}let L=y[se];L&&L.connect(ie)}}let B=new z,K=new z;function k(q,$,ie){B.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);let se=B.distanceTo(K),L=$.projectionMatrix.elements,we=ie.projectionMatrix.elements,be=L[14]/(L[10]-1),ae=L[14]/(L[10]+1),ye=(L[9]+1)/L[5],ke=(L[9]-1)/L[5],re=(L[8]-1)/L[0],Ae=(we[8]+1)/we[0],nt=be*re,rt=be*Ae,V=se/(-re+Ae),it=V*-re;$.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(it),q.translateZ(V),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let We=be+V,st=ae+V,$e=nt-it,C=rt+(se-it),b=ye*ae/st*We,Y=ke*ae/st*We;q.projectionMatrix.makePerspective($e,C,b,Y,We,st),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function G(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;x.near=A.near=w.near=q.near,x.far=A.far=w.far=q.far,(T!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,H=x.far);let $=q.parent,ie=x.cameras;G(x,$);for(let se=0;se<ie.length;se++)G(ie[se],$);ie.length===2?k(x,w,A):x.projectionMatrix.copy(w.projectionMatrix),Q(q,x,$)};function Q(q,$,ie){ie===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);let se=q.children;for(let L=0,we=se.length;L<we;L++)se[L].updateMatrixWorld(!0);q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ql*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.getPlanes=function(){return E};let R=null;function le(q,$){if(h=$.getViewerPose(c||o),_=$,h!==null){let ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;ie.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let L=0;L<ie.length;L++){let we=ie[L],be=null;if(d!==null)be=d.getViewport(we);else{let ye=f.getViewSubImage(u,we);be=ye.viewport,L===0&&(e.setRenderTargetTextures(p,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let ae=I[L];ae===void 0&&(ae=new qt,ae.layers.enable(L),ae.viewport=new mt,I[L]=ae),ae.matrix.fromArray(we.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(we.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),L===0&&(x.matrix.copy(ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(ae)}}for(let ie=0;ie<y.length;ie++){let se=v[ie],L=y[ie];se!==null&&L!==void 0&&L.update(se,$,c||o)}if(R&&R(q,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ie=null;for(let se of E)$.detectedPlanes.has(se)||(ie===null&&(ie=[]),ie.push(se));if(ie!==null)for(let se of ie)E.delete(se),M.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(let se of $.detectedPlanes)if(!E.has(se))E.add(se),M.set(se,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{let L=M.get(se);se.lastChangedTime>L&&(M.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}_=null}let oe=new Rf;oe.setAnimationLoop(le),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}};function xv(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Af(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=r.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vv(r,e,t,n){let i={},s={},o=[],a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(_(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",g));let M=v.program;n.updateUBOMapping(y,M);let w=e.render.frame;s[y.id]!==w&&(u(y),s[y.id]=w)}function h(y){let v=f();y.__bindingPointIndex=v;let E=r.createBuffer(),M=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,M,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=i[y.id],E=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,A=E.length;w<A;w++){let I=E[w];if(d(I,w,M)===!0){let x=I.__offset,T=Array.isArray(I.value)?I.value:[I.value],H=0;for(let O=0;O<T.length;O++){let U=T[O],F=m(U);typeof U=="number"?(I.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,x+H,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=U.elements[0],I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=U.elements[0],I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=U.elements[0]):(U.toArray(I.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,E){let M=y.value;if(E[v]===void 0){if(typeof M=="number")E[v]=M;else{let w=Array.isArray(M)?M:[M],A=[];for(let I=0;I<w.length;I++)A.push(w[I].clone());E[v]=A}return!0}else if(typeof M=="number"){if(E[v]!==M)return E[v]=M,!0}else{let w=Array.isArray(E[v])?E[v]:[E[v]],A=Array.isArray(M)?M:[M];for(let I=0;I<w.length;I++){let x=w[I];if(x.equals(A[I])===!1)return x.copy(A[I]),!0}}return!1}function _(y){let v=y.uniforms,E=0,M=16,w=0;for(let A=0,I=v.length;A<I;A++){let x=v[A],T={boundary:0,storage:0},H=Array.isArray(x.value)?x.value:[x.value];for(let O=0,U=H.length;O<U;O++){let F=H[O],B=m(F);T.boundary+=B.boundary,T.storage+=B.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,A>0){w=E%M;let O=M-w;w!==0&&O-T.boundary<0&&(E+=M-w,x.__offset=E)}E+=T.storage}return w=E%M,w>0&&(E+=M-w),y.__size=E,y.__cache={},this}function m(y){let v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function yv(){let r=eo("canvas");return r.style.display="block",r}var Js=class{constructor(e={}){let{canvas:t=yv(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;let d=null,_=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ge,this.useLegacyLights=!0,this.toneMapping=vi,this.toneMappingExposure=1;let p=this,y=!1,v=0,E=0,M=null,w=-1,A=null,I=new mt,x=new mt,T=null,H=t.width,O=t.height,U=1,F=null,B=null,K=new mt(0,0,H,O),k=new mt(0,0,H,O),G=!1,Q=new Ys,R=!1,le=!1,oe=null,q=new Lt,$=new z,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return M===null?U:1}let L=n;function we(S,N){for(let X=0;X<S.length;X++){let D=S[X],W=t.getContext(D,N);if(W!==null)return W}return null}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r152"),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),L===null){let N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),L=we(N,S),L===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,ae,ye,ke,re,Ae,nt,rt,V,it,We,st,$e,C,b,Y,j,te,ne,Re,de,J,Te,pe;function Pe(){be=new V0(L),ae=new N0(L,be,e),be.init(ae),J=new gv(L,be,ae),ye=new pv(L,be,ae),ke=new W0(L),re=new nv,Ae=new mv(L,be,ye,re,ae,J,ke),nt=new F0(p),rt=new k0(p),V=new ng(L,ae),Te=new D0(L,be,V,ae),it=new H0(L,V,ke,Te),We=new Z0(L,it,V,ke),ne=new Y0(L,ae,Ae),Y=new O0(re),st=new tv(p,nt,rt,be,ae,Te,Y),$e=new xv(p,re),C=new rv,b=new hv(be,ae),te=new I0(p,nt,rt,ye,We,u,l),j=new dv(p,We,ae),pe=new vv(L,ke,ae,ye),Re=new U0(L,be,ke,ae),de=new G0(L,be,ke,ae),ke.programs=st.programs,p.capabilities=ae,p.extensions=be,p.properties=re,p.renderLists=C,p.shadowMap=j,p.state=ye,p.info=ke}Pe();let me=new pc(p,L);this.xr=me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(H,O,!1))},this.getSize=function(S){return S.set(H,O)},this.setSize=function(S,N,X=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,O=N,t.width=Math.floor(S*U),t.height=Math.floor(N*U),X===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(H*U,O*U).floor()},this.setDrawingBufferSize=function(S,N,X){H=S,O=N,U=X,t.width=Math.floor(S*X),t.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,N,X,D){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,N,X,D),ye.viewport(I.copy(K).multiplyScalar(U).floor())},this.getScissor=function(S){return S.copy(k)},this.setScissor=function(S,N,X,D){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,N,X,D),ye.scissor(x.copy(k).multiplyScalar(U).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(S){ye.setScissorTest(G=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){B=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(S=!0,N=!0,X=!0){let D=0;S&&(D|=L.COLOR_BUFFER_BIT),N&&(D|=L.DEPTH_BUFFER_BIT),X&&(D|=L.STENCIL_BUFFER_BIT),L.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),C.dispose(),b.dispose(),re.dispose(),nt.dispose(),rt.dispose(),We.dispose(),Te.dispose(),pe.dispose(),st.dispose(),me.dispose(),me.removeEventListener("sessionstart",ge),me.removeEventListener("sessionend",Ke),oe&&(oe.dispose(),oe=null),tt.stop()};function Me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let S=ke.autoReset,N=j.enabled,X=j.autoUpdate,D=j.needsUpdate,W=j.type;Pe(),ke.autoReset=S,j.enabled=N,j.autoUpdate=X,j.needsUpdate=D,j.type=W}function Ze(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){let N=S.target;N.removeEventListener("dispose",at),P(N)}function P(S){Z(S),re.remove(S)}function Z(S){let N=re.get(S).programs;N!==void 0&&(N.forEach(function(X){st.releaseProgram(X)}),S.isShaderMaterial&&st.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,D,W,ce){N===null&&(N=ie);let Ee=W.isMesh&&W.matrixWorld.determinant()<0,_e=Ie(S,N,X,D,W);ye.setMaterial(D,Ee);let De=X.index,Ue=1;D.wireframe===!0&&(De=it.getWireframeAttribute(X),Ue=2);let Ce=X.drawRange,Le=X.attributes.position,Fe=Ce.start*Ue,_t=(Ce.start+Ce.count)*Ue;ce!==null&&(Fe=Math.max(Fe,ce.start*Ue),_t=Math.min(_t,(ce.start+ce.count)*Ue)),De!==null?(Fe=Math.max(Fe,0),_t=Math.min(_t,De.count)):Le!=null&&(Fe=Math.max(Fe,0),_t=Math.min(_t,Le.count));let Gt=_t-Fe;if(Gt<0||Gt===1/0)return;Te.setup(W,D,_e,X,De);let dt,He=Re;if(De!==null&&(dt=V.get(De),He=de,He.setIndex(dt)),W.isMesh)D.wireframe===!0?(ye.setLineWidth(D.wireframeLinewidth*se()),He.setMode(L.LINES)):He.setMode(L.TRIANGLES);else if(W.isLine){let Be=D.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*se()),W.isLineSegments?He.setMode(L.LINES):W.isLineLoop?He.setMode(L.LINE_LOOP):He.setMode(L.LINE_STRIP)}else W.isPoints?He.setMode(L.POINTS):W.isSprite&&He.setMode(L.TRIANGLES);if(W.isInstancedMesh)He.renderInstances(Fe,Gt,W.count);else if(X.isInstancedBufferGeometry){let Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,tr=Math.min(X.instanceCount,Be);He.renderInstances(Fe,Gt,tr)}else He.render(Fe,Gt)},this.compile=function(S,N){function X(D,W,ce){D.transparent===!0&&D.side===xi&&D.forceSinglePass===!1?(D.side=dn,D.needsUpdate=!0,ue(D,W,ce),D.side=Vi,D.needsUpdate=!0,ue(D,W,ce),D.side=xi):ue(D,W,ce)}_=b.get(S),_.init(),g.push(_),S.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(_.pushLight(D),D.castShadow&&_.pushShadow(D))}),_.setupLights(p.useLegacyLights),S.traverse(function(D){let W=D.material;if(W)if(Array.isArray(W))for(let ce=0;ce<W.length;ce++){let Ee=W[ce];X(Ee,S,D)}else X(W,S,D)}),g.pop(),_=null};let ee=null;function he(S){ee&&ee(S)}function ge(){tt.stop()}function Ke(){tt.start()}let tt=new Rf;tt.setAnimationLoop(he),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(S){ee=S,me.setAnimationLoop(S),S===null?tt.stop():tt.start()},me.addEventListener("sessionstart",ge),me.addEventListener("sessionend",Ke),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,N,M),_=b.get(S,g.length),_.init(),g.push(_),q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(q),le=this.localClippingEnabled,R=Y.init(this.clippingPlanes,le),d=C.get(S,m.length),d.init(),m.push(d),ht(S,N,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(F,B),R===!0&&Y.beginShadows();let X=_.state.shadowsArray;if(j.render(X,S,N),R===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,S),_.setupLights(p.useLegacyLights),N.isArrayCamera){let D=N.cameras;for(let W=0,ce=D.length;W<ce;W++){let Ee=D[W];un(d,S,Ee,Ee.viewport)}}else un(d,S,N);M!==null&&(Ae.updateMultisampleRenderTarget(M),Ae.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(p,S,N),Te.resetDefaultState(),w=-1,A=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ht(S,N,X,D){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){D&&$.setFromMatrixPosition(S.matrixWorld).applyMatrix4(q);let Ee=We.update(S),_e=S.material;_e.visible&&d.push(S,Ee,_e,X,$.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==ke.render.frame&&(S.skeleton.update(),S.skeleton.frame=ke.render.frame);let Ee=We.update(S),_e=S.material;if(D&&(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),$.copy(Ee.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(q)),Array.isArray(_e)){let De=Ee.groups;for(let Ue=0,Ce=De.length;Ue<Ce;Ue++){let Le=De[Ue],Fe=_e[Le.materialIndex];Fe&&Fe.visible&&d.push(S,Ee,Fe,X,$.z,Le)}}else _e.visible&&d.push(S,Ee,_e,X,$.z,null)}}let ce=S.children;for(let Ee=0,_e=ce.length;Ee<_e;Ee++)ht(ce[Ee],N,X,D)}function un(S,N,X,D){let W=S.opaque,ce=S.transmissive,Ee=S.transparent;_.setupLightsView(X),R===!0&&Y.setGlobalState(p.clippingPlanes,X),ce.length>0&&ve(W,ce,N,X),D&&ye.viewport(I.copy(D)),W.length>0&&Se(W,N,X),ce.length>0&&Se(ce,N,X),Ee.length>0&&Se(Ee,N,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ve(S,N,X,D){if(oe===null){let _e=ae.isWebGL2;oe=new Mi(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ws:dr,minFilter:Gs,samples:_e&&a===!0?4:0})}let W=p.getRenderTarget();p.setRenderTarget(oe),p.clear();let ce=p.toneMapping;p.toneMapping=vi,Se(S,X,D),Ae.updateMultisampleRenderTarget(oe),Ae.updateRenderTargetMipmap(oe);let Ee=!1;for(let _e=0,De=N.length;_e<De;_e++){let Ue=N[_e],Ce=Ue.object,Le=Ue.geometry,Fe=Ue.material,_t=Ue.group;if(Fe.side===xi&&Ce.layers.test(D.layers)){let Gt=Fe.side;Fe.side=dn,Fe.needsUpdate=!0,ze(Ce,X,D,Le,Fe,_t),Fe.side=Gt,Fe.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ae.updateMultisampleRenderTarget(oe),Ae.updateRenderTargetMipmap(oe)),p.setRenderTarget(W),p.toneMapping=ce}function Se(S,N,X){let D=N.isScene===!0?N.overrideMaterial:null;for(let W=0,ce=S.length;W<ce;W++){let Ee=S[W],_e=Ee.object,De=Ee.geometry,Ue=D===null?Ee.material:D,Ce=Ee.group;_e.layers.test(X.layers)&&ze(_e,N,X,De,Ue,Ce)}}function ze(S,N,X,D,W,ce){S.onBeforeRender(p,N,X,D,W,ce),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(p,N,X,D,S,ce),W.transparent===!0&&W.side===xi&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,p.renderBufferDirect(X,N,D,W,S,ce),W.side=Vi,W.needsUpdate=!0,p.renderBufferDirect(X,N,D,W,S,ce),W.side=xi):p.renderBufferDirect(X,N,D,W,S,ce),S.onAfterRender(p,N,X,D,W,ce)}function ue(S,N,X){N.isScene!==!0&&(N=ie);let D=re.get(S),W=_.state.lights,ce=_.state.shadowsArray,Ee=W.state.version,_e=st.getParameters(S,W.state,ce,N,X),De=st.getProgramCacheKey(_e),Ue=D.programs;D.environment=S.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(S.isMeshStandardMaterial?rt:nt).get(S.envMap||D.environment),Ue===void 0&&(S.addEventListener("dispose",at),Ue=new Map,D.programs=Ue);let Ce=Ue.get(De);if(Ce!==void 0){if(D.currentProgram===Ce&&D.lightsStateVersion===Ee)return Ne(S,_e),Ce}else _e.uniforms=st.getUniforms(S),S.onBuild(X,_e,p),S.onBeforeCompile(_e,p),Ce=st.acquireProgram(_e,De),Ue.set(De,Ce),D.uniforms=_e.uniforms;let Le=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=Y.uniform),Ne(S,_e),D.needsLights=At(S),D.lightsStateVersion=Ee,D.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);let Fe=Ce.getUniforms(),_t=os.seqWithValue(Fe.seq,Le);return D.currentProgram=Ce,D.uniformsList=_t,Ce}function Ne(S,N){let X=re.get(S);X.outputColorSpace=N.outputColorSpace,X.instancing=N.instancing,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Ie(S,N,X,D,W){N.isScene!==!0&&(N=ie),Ae.resetTextureUnits();let ce=N.fog,Ee=D.isMeshStandardMaterial?N.environment:null,_e=M===null?p.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ni,De=(D.isMeshStandardMaterial?rt:nt).get(D.envMap||Ee),Ue=D.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ce=!!D.normalMap&&!!X.attributes.tangent,Le=!!X.morphAttributes.position,Fe=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color,Gt=D.toneMapped?p.toneMapping:vi,dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=dt!==void 0?dt.length:0,Be=re.get(D),tr=_.state.lights;if(R===!0&&(le===!0||S!==A)){let Mn=S===A&&D.id===w;Y.setState(D,S,Mn)}let Tt=!1;D.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==tr.state.version||Be.outputColorSpace!==_e||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==De||D.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Y.numPlanes||Be.numIntersection!==Y.numIntersection)||Be.vertexAlphas!==Ue||Be.vertexTangents!==Ce||Be.morphTargets!==Le||Be.morphNormals!==Fe||Be.morphColors!==_t||Be.toneMapping!==Gt||ae.isWebGL2===!0&&Be.morphTargetsCount!==He)&&(Tt=!0):(Tt=!0,Be.__version=D.version);let vn=Be.currentProgram;Tt===!0&&(vn=ue(D,N,W));let yn=!1,Gn=!1,Di=!1,Et=vn.getUniforms(),nr=Be.uniforms;if(ye.useProgram(vn.program)&&(yn=!0,Gn=!0,Di=!0),D.id!==w&&(w=D.id,Gn=!0),yn||A!==S){if(Et.setValue(L,"projectionMatrix",S.projectionMatrix),ae.logarithmicDepthBuffer&&Et.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),A!==S&&(A=S,Gn=!0,Di=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let Mn=Et.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,$.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Et.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||W.isSkinnedMesh)&&Et.setValue(L,"viewMatrix",S.matrixWorldInverse)}if(W.isSkinnedMesh){Et.setOptional(L,W,"bindMatrix"),Et.setOptional(L,W,"bindMatrixInverse");let Mn=W.skeleton;Mn&&(ae.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Et.setValue(L,"boneTexture",Mn.boneTexture,Ae),Et.setValue(L,"boneTextureSize",Mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let fl=X.morphAttributes;if((fl.position!==void 0||fl.normal!==void 0||fl.color!==void 0&&ae.isWebGL2===!0)&&ne.update(W,X,vn),(Gn||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,Et.setValue(L,"receiveShadow",W.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(nr.envMap.value=De,nr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Gn&&(Et.setValue(L,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&Oe(nr,Di),ce&&D.fog===!0&&$e.refreshFogUniforms(nr,ce),$e.refreshMaterialUniforms(nr,D,U,O,oe),os.upload(L,Be.uniformsList,nr,Ae)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(os.upload(L,Be.uniformsList,nr,Ae),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Et.setValue(L,"center",W.center),Et.setValue(L,"modelViewMatrix",W.modelViewMatrix),Et.setValue(L,"normalMatrix",W.normalMatrix),Et.setValue(L,"modelMatrix",W.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let Mn=D.uniformsGroups;for(let dl=0,Up=Mn.length;dl<Up;dl++)if(ae.isWebGL2){let Zh=Mn[dl];pe.update(Zh,vn),pe.bind(Zh,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Oe(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function At(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,N,X){re.get(S.texture).__webglTexture=N,re.get(S.depthTexture).__webglTexture=X;let D=re.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=X===void 0,D.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){let X=re.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){M=S,v=N,E=X;let D=!0,W=null,ce=!1,Ee=!1;if(S){let De=re.get(S);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(L.FRAMEBUFFER,null),D=!1):De.__webglFramebuffer===void 0?Ae.setupRenderTarget(S):De.__hasExternalTextures&&Ae.rebindTextures(S,re.get(S.texture).__webglTexture,re.get(S.depthTexture).__webglTexture);let Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ee=!0);let Ce=re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=Ce[N],ce=!0):ae.isWebGL2&&S.samples>0&&Ae.useMultisampledRTT(S)===!1?W=re.get(S).__webglMultisampledFramebuffer:W=Ce,I.copy(S.viewport),x.copy(S.scissor),T=S.scissorTest}else I.copy(K).multiplyScalar(U).floor(),x.copy(k).multiplyScalar(U).floor(),T=G;if(ye.bindFramebuffer(L.FRAMEBUFFER,W)&&ae.drawBuffers&&D&&ye.drawBuffers(S,W),ye.viewport(I),ye.scissor(x),ye.setScissorTest(T),ce){let De=re.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,X)}else if(Ee){let De=re.get(S.texture),Ue=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,X||0,Ue)}w=-1},this.readRenderTargetPixels=function(S,N,X,D,W,ce,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(_e=_e[Ee]),_e){ye.bindFramebuffer(L.FRAMEBUFFER,_e);try{let De=S.texture,Ue=De.format,Ce=De.type;if(Ue!==Jn&&J.convert(Ue)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Le=Ce===Ws&&(be.has("EXT_color_buffer_half_float")||ae.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ce!==dr&&J.convert(Ce)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===cr&&(ae.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-D&&X>=0&&X<=S.height-W&&L.readPixels(N,X,D,W,J.convert(Ue),J.convert(Ce),ce)}finally{let De=M!==null?re.get(M).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(S,N,X=0){let D=Math.pow(2,-X),W=Math.floor(N.image.width*D),ce=Math.floor(N.image.height*D);Ae.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,S.x,S.y,W,ce),ye.unbindTexture()},this.copyTextureToTexture=function(S,N,X,D=0){let W=N.image.width,ce=N.image.height,Ee=J.convert(X.format),_e=J.convert(X.type);Ae.setTexture2D(X,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,S.x,S.y,W,ce,Ee,_e,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,D,S.x,S.y,Ee,_e,N.image),D===0&&X.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,N,X,D,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=S.max.x-S.min.x+1,Ee=S.max.y-S.min.y+1,_e=S.max.z-S.min.z+1,De=J.convert(D.format),Ue=J.convert(D.type),Ce;if(D.isData3DTexture)Ae.setTexture3D(D,0),Ce=L.TEXTURE_3D;else if(D.isDataArrayTexture)Ae.setTexture2DArray(D,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let Le=L.getParameter(L.UNPACK_ROW_LENGTH),Fe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),_t=L.getParameter(L.UNPACK_SKIP_PIXELS),Gt=L.getParameter(L.UNPACK_SKIP_ROWS),dt=L.getParameter(L.UNPACK_SKIP_IMAGES),He=X.isCompressedTexture?X.mipmaps[0]:X.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,He.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,He.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,S.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,S.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S.min.z),X.isDataTexture||X.isData3DTexture?L.texSubImage3D(Ce,W,N.x,N.y,N.z,ce,Ee,_e,De,Ue,He.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ce,W,N.x,N.y,N.z,ce,Ee,_e,De,He.data)):L.texSubImage3D(Ce,W,N.x,N.y,N.z,ce,Ee,_e,De,Ue,He),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dt),W===0&&D.generateMipmaps&&L.generateMipmap(Ce),ye.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ae.setTextureCube(S,0):S.isData3DTexture?Ae.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ae.setTexture2DArray(S,0):Ae.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){v=0,E=0,M=null,ye.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ge?ur:bf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Ge:ni}},mc=class extends Js{};mc.prototype.isWebGL1Renderer=!0;var uo=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var fo=class extends Un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};function Bi(r,e,t){return Df(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ka(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Df(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ps=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gc=class extends ps{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:s=e,a=2*t-n;break;case Au:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:o=e,l=2*n-t;break;case Au:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),m=_*_,g=m*_,p=-u*g+2*u*m-u*_,y=(1+u)*g+(-1.5-2*u)*m+(-.5+u)*_+1,v=(-1-d)*g+(1.5+d)*m+.5*_,E=d*g-d*m;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+y*o[c+M]+v*o[l+M]+E*o[f+M];return s}},_c=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},xc=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case yl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Bi(n,s,o),this.values=Bi(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Df(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Bi(this.times),t=Bi(this.values),n=this.getValueSize(),i=this.getInterpolation()===yl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let _=0;_!==n;++_){let m=t[f+_];if(m!==t[u+_]||m!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Bi(e,0,o),this.values=Bi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=Bi(this.times,0),t=Bi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=ja;var gr=class extends $n{};gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Qa;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends $n{};vc.prototype.ValueTypeName="color";var yc=class extends $n{};yc.prototype.ValueTypeName="number";var Mc=class extends ps{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(s,0,o,c-a,o,c,l);return s}},$s=class extends $n{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.DefaultInterpolation=ja;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var _r=class extends $n{};_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Qa;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends $n{};Sc.prototype.ValueTypeName="vector";var po=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Wl=new Lt,pf=new z,mf=new z,bc=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gf=new Lt,zs=new z,Xl=new z,Tc=class extends bc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),Xl.copy(n.position),Xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xl),n.updateMatrixWorld(),i.makeTranslation(-zs.x,-zs.y,-zs.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf)}},mo=class extends po{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var go=class extends po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ac="\\[\\]\\.:\\/",Mv=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Sv="[^"+Ac.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Tv=/(WCOD+)?/.source.replace("WCOD",Sv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Av=new RegExp("^"+bv+Tv+Ev+wv+"$"),Rv=["material","materials","bones","map"],Ec=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(e){let t=Av.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Ec;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var PM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"152"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="152");function bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_s={duration:.5,overwrite:!1,delay:0},Yc,Yt,gt,Fn=1e8,ut=1/Fn,Oc=Math.PI*2,Pv=Oc/4,Lv=0,Hf=Math.sqrt,Iv=Math.cos,Dv=Math.sin,Ut=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},Ro=function(e){return typeof e>"u"},si=function(e){return typeof e=="object"},gn=function(e){return e!==!1},Zc=function(){return typeof window<"u"},vo=function(e){return Mt(e)||Ut(e)},Gf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,Fc=/(?:-?\.?\d|\.)+/gi,Jc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$c=/[+-]=-?[.\d]+/,Wf=/[^,'"\[\]\s]+/gi,Uv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,ii,Bc,Kc,wn={},bo={},Xf,qf=function(e){return(bo=Mr(e,wn))&&Jt},Co=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ia=function(e,t){return!t&&console.warn(e)},Yf=function(e,t){return e&&(wn[e]=t)&&bo&&(bo[e]=t)||wn},ra=function(){return 0},Nv={suppressEvents:!0,isStart:!0,kill:!1},yo={suppressEvents:!0,kill:!1},Ov={suppressEvents:!0},Qc={},Xi=[],zc={},Zf,pn={},Pc={},Uf=30,Mo=[],jc="",eh=function(e){var t=e[0],n,i;if(si(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Mo.length;i--&&!Mo[i].targetTest(t););n=Mo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ih(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||eh(Bn(e))[0]._gsap},th=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():Ro(n)&&e.getAttribute&&e.getAttribute(t)||n},tn=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},br=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},To=function(){var e=Xi.length,t=Xi.slice(0),n,i;for(zc={},Xi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jf=function(e,t,n,i){Xi.length&&!Yt&&To(),e.render(t,n,i||Yt&&t<0&&(e._initted||e._startAt)),Xi.length&&!Yt&&To()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wf).length<2?t:Ut(e)?e.trim():e},Kf=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mr=function(e,t){for(var n in t)e[n]=t[n];return e},Nf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Eo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ea=function(e){var t=e.parent||xt,n=e.keyframes?Bv(Zt(e.keyframes)):zn;if(gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Po=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},kv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kc=function(e,t,n,i){return e._startAt&&(Yt?e._startAt.revert(yo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vv=function r(e){return!e||e._ts&&r(e.parent)},Of=function(e){return e._repeat?xs(e._tTime,e=e.duration()+e._rDelay)*e:0},xs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},wo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lo=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lo(e),n._dirty||xr(n,e)),e},jf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wo(e.rawTime(),t),(!t._dur||oa(0,t.totalDuration(),n)-t._tTime>ut)&&t.render(n,!0)),xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ut}},ri=function(e,t,n,i){return t.parent&&Yi(t),t._start=Ft((Ei(n)?n:n||e!==xt?On(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qf(e,t,"_first","_last",e._sort?"_start":0),Vc(t)||(e._recent=t),i||jf(e,t),e._ts<0&&Io(e,e._tTime),e},ed=function(e,t){return(wn.ScrollTrigger||Co("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},td=function(e,t,n,i,s){if(ah(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Yt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zf!==mn.frame)return Xi.push(e),e._lazy=[s,i],1},Hv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Vc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Hv(e)&&!(!e._initted&&Vc(e))||(e._ts<0||e._dp._ts<0)&&!Vc(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=oa(0,e._tDur,t),h=xs(l,a),e._yoyo&&h&1&&(o=1-o),h!==xs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Yt||i||e._zTime===ut||!t&&e._zTime){if(!e._initted&&td(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ut:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&kc(e,t,n,!0),e._onUpdate&&!n&&En(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yi(e,1),!n&&!Yt&&(En(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},vs=function(e,t,n,i){var s=e._repeat,o=Ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ft(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Io(e,e._tTime=e._tDur*a),e.parent&&Lo(e),n||xr(e.parent,e),e},Ff=function(e){return e instanceof kt?xr(e):vs(e,e._dur)},Xv={_start:0,endTime:ra,totalDuration:ra},On=function r(e,t,n){var i=e.labels,s=e._recent||Xv,o=e.duration()>=Fn?s.endTime(!1):e._dur,a,l,c;return Ut(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ta=function(e,t,n){var i=Ei(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=gn(l.vars.inherit)&&l.parent;o.immediateRender=gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},Zi=function(e,t){return e||e===0?t(e):t},oa=function(e,t,n){return n<e?e:n>t?t:n},Vt=function(e,t){return!Ut(e)||!(t=Uv.exec(e))?"":t[1]},qv=function(e,t,n){return Zi(n,function(i){return oa(e,t,i)})},Hc=[].slice,nd=function(e,t){return e&&si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&si(e[0]))&&!e.nodeType&&e!==ii},Yv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ut(i)&&!t||nd(i,1)?(s=n).push.apply(s,Bn(i)):n.push(i)})||n},Bn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Ut(e)&&!n&&(Bc||!ys())?Hc.call((t||Kc).querySelectorAll(e),0):Zt(e)?Yv(e,n):nd(e)?Hc.call(e,0):e?[e]:[]},Gc=function(e){return e=Bn(e)[0]||ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Bn(t,n.querySelectorAll?n:n===e?ia("Invalid scope")||Kc.createElement("div"):e)}},id=function(e){return e.sort(function(){return .5-Math.random()})},rd=function(e){if(Mt(e))return e;var t=si(e)?e:{each:e},n=vr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return Ut(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,_){var m=(_||t).length,g=o[m],p,y,v,E,M,w,A,I,x;if(!g){if(x=t.grid==="auto"?0:(t.grid||[1,Fn])[1],!x){for(A=-Fn;A<(A=_[x++].getBoundingClientRect().left)&&x<m;);x<m&&x--}for(g=o[m]=[],p=l?Math.min(x,m)*h-.5:i%x,y=x===Fn?0:l?m*f/x-.5:i/x|0,A=0,I=Fn,w=0;w<m;w++)v=w%x-p,E=y-(w/x|0),g[w]=M=c?Math.abs(c==="y"?E:v):Hf(v*v+E*E),M>A&&(A=M),M<I&&(I=M);i==="random"&&id(g),g.max=A-I,g.min=I,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(x>m?m-1:c?c==="y"?m/x:x:Math.max(x,m/x))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Vt(t.amount||t.each)||0,n=n&&m<0?dd(n):n}return m=(g[u]-g.min)/g.max||0,Ft(g.b+(n?n(m):m)*g.v)+g.u}},Wc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ei(n)?0:Vt(n))}},sd=function(e,t){var n=Zt(e),i,s;return!n&&si(e)&&(i=n=e.radius||Fn,e.values?(e=Bn(e.values),(s=!Ei(e[0]))&&(i*=i)):e=Wc(e.increment)),Zi(t,n?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Fn,h=0,f=e.length,u,d;f--;)s?(u=e[f].x-a,d=e[f].y-l,u=u*u+d*d):u=Math.abs(e[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?e[h]:o,s||h===o||Ei(o)?h:h+Vt(o)}:Wc(e))},ad=function(e,t,n,i){return Zi(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Jv=function(e,t){return function(n){return e(parseFloat(n))+(t||Vt(n))}},$v=function(e,t,n){return ld(e,t,0,1,n)},od=function(e,t,n){return Zi(n,function(i){return e[~~t(i)]})},Kv=function r(e,t,n){var i=t-e;return Zt(e)?od(e,r(0,e.length),t):Zi(n,function(s){return(i+(s-e)%i)%i+e})},Qv=function r(e,t,n){var i=t-e,s=i*2;return Zt(e)?od(e,r(0,e.length-1),t):Zi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ms=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Wf:Fc),n+=e.substr(t,i-t)+ad(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ld=function(e,t,n,i,s){var o=t-e,a=i-n;return Zi(s,function(l){return n+((l-e)/o*a||0)})},jv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ut(e),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(h=[],f=e.length,u=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var m=Math.min(u,~~_);return h[m](_-m)},n=t}else i||(e=Mr(Zt(e)?[]:{},e));if(!h){for(l in t)rh.call(a,e,l,"get",t[l]);s=function(_){return ch(_,a)||(o?e.p:e)}}}return Zi(n,s)},Bf=function(e,t,n){var i=e.labels,s=Fn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},En=function(e,t,n){var i=e.vars,s=i[t],o=gt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xi.length&&To(),a&&(gt=a),h=l?s.apply(c,l):s.call(c),gt=o,h},Qs=function(e){return Yi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Yt),e.progress()<1&&En(e,"onInterrupt"),e},gs,cd=[],hd=function(e){if(e)if(e=!e.name&&e.default||e,Zc()||e.headless){var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ra,render:ch,add:rh,kill:my,modifier:py,rawVars:0},o={targetTest:0,get:0,getSetter:Do,aliases:{},register:0};if(ys(),e!==i){if(pn[t])return;zn(i,zn(Eo(e,s),o)),Mr(i.prototype,Mr(s,Eo(e,o))),pn[i.prop=t]=i,e.targetTest&&(Mo.push(i),Qc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yf(t,i),e.register&&e.register(Jt,i,nn)}else cd.push(e)},ct=255,js={aqua:[0,ct,ct],lime:[0,ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ct],navy:[0,0,128],white:[ct,ct,ct],olive:[128,128,0],yellow:[ct,ct,0],orange:[ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ct,0,0],pink:[ct,192,203],cyan:[0,ct,ct],transparent:[ct,ct,ct,0]},Lc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ct+.5|0},ud=function(e,t,n){var i=e?Ei(e)?[e>>16,e>>8&ct,e&ct]:0:js.black,s,o,a,l,c,h,f,u,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),js[e])i=js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ct,i&ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ct,e&ct]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Fc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Lc(l+1/3,s,o),i[1]=Lc(l,s,o),i[2]=Lc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Jc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fc)||js.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/ct,o=i[1]/ct,a=i[2]/ct,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},fd=function(e){var t=[],n=[],i=-1;return e.split(Ti).forEach(function(s){var o=s.match(Sr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},zf=function(e,t,n){var i="",s=(e+i).match(Ti),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(u){return(u=ud(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=fd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Ti,"1").split(Sr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Ti),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ti=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in js)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),ey=/hsl[a]?\(/,nh=function(e){var t=e.join(" "),n;if(Ti.lastIndex=0,Ti.test(t))return n=ey.test(t),e[1]=zf(e[1],n),e[0]=zf(e[0],n,fd(e[1])),!0},sa,mn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,_=function m(g){var p=r()-i,y=g===!0,v,E,M,w;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,v=M-o,(v>0||y)&&(w=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=s?4:s-v),E=1),y||(l=c(m)),E)for(d=0;d<a.length;d++)a[d](M,u,w,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Xf&&(!Bc&&Zc()&&(ii=Bc=window,Kc=ii.document||{},wn.gsap=Jt,(ii.gsapVersions||(ii.gsapVersions=[])).push(Jt.version),qf(bo||ii.GreenSockGlobals||!ii.gsap&&ii||{}),cd.forEach(hd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(g){return setTimeout(g,o-f.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ra},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,p,y){var v=p?function(E,M,w,A){g(E,M,w,A),f.remove(v)}:g;return f.remove(g),a[y?"unshift":"push"](v),ys(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),ys=function(){return!sa&&mn.wake()},je={},ty=/^[\d.\-M][\d.\-,\s]/,ny=/["']/g,iy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ny,"").trim():+c,i=l.substr(a+1).trim();return t},ry=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sy=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iy(t[1])]:ry(e).split(",").map($f)):je._CE&&ty.test(e)?je._CE("",e):n},dd=function(e){return function(t){return 1-e(1-t)}},pd=function r(e,t){for(var n=e._first,i;n;)n instanceof kt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vr=function(e,t){return e&&(Mt(e)?e:je[e]||sy(e))||t},Tr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return tn(e,function(a){je[a]=wn[a]=s,je[o=a.toLowerCase()]=n;for(var l in s)je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[a+"."+l]=s[l]}),s},md=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ic=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Oc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Dv((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:md(a);return s=Oc/s,l.config=function(c,h){return r(e,c,h)},l},Dc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:md(n);return i.config=function(s){return r(e,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Tr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Tr("Elastic",Ic("in"),Ic("out"),Ic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Tr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Tr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Tr("Circ",function(r){return-(Hf(1-r*r)-1)});Tr("Sine",function(r){return r===1?1:-Iv(r*Pv)+1});Tr("Back",Dc("in"),Dc("out"),Dc());je.SteppedEase=je.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ut;return function(a){return((i*oa(0,o,a)|0)+s)*n}}};_s.ease=je["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jc+=r+","+r+"Params,"});var ih=function(e,t){this.id=Lv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:th,this.set=t?t.getSetter:Do},aa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vs(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),sa||mn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Io(this,n),!s._dp||s.parent||jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ut?0:this._rts,this.totalTime(oa(-Math.abs(this._delay),this._tDur,s),i!==!1),Lo(this),kv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ov);var i=Yt;return Yt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Yt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ff(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ff(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(On(this,n),gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ut)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Mt(n)?n:Kf,a=function(){var c=i.then;i.then=null,Mt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Qs(this)},r})();zn(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});var kt=(function(r){Vf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=gn(n.sortChildren),xt&&ri(n.parent||xt,bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ed(bi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ta(0,arguments,this),this},t.from=function(i,s,o){return ta(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ta(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(i,s,On(this,o),1),this},t.call=function(i,s,o){return ri(this,wt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new wt(i,o,On(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ea(o).immediateRender=gn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,ea(a).immediateRender=gn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,_,m,g,p,y,v,E,M,w,A;if(this!==xt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,E=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(u=Ft(h%g),h===l?(m=this._repeat,u=c):(m=~~(h/g),m&&m===h/g&&(u=c,m--),u>c&&(u=c)),M=xs(this._tTime,g),!a&&this._tTime&&M!==m&&this._tTime-M*g-this._dur<=0&&(M=m),w&&m&1&&(u=c-u,A=1),m!==M&&!this._lock){var I=w&&M&1,x=I===(w&&m&1);if(m<M&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(A?0:Ft(m*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;pd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wv(this,Ft(a),Ft(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!m&&(En(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-ut);break}}d=_}else{d=this._last;for(var T=i<0?i:u;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Yt&&(d._initted||d._startAt)),u!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=T?-ut:ut);break}}d=_}}if(y&&!s&&(this.pause(),y.render(u>=a?0:-ut)._zTime=u>=a?1:-1,this._ts))return this._start=E,Lo(this),this.render(i,s,o);this._onUpdate&&!s&&En(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(En(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ei(s)||(s=On(this,s,i)),!(i instanceof aa)){if(Zt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ut(i))return this.addLabel(i,s);if(Mt(i))i=wt.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof wt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ut(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(Po(this,i),i===this._recent&&(this._recent=this._last),xr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(mn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=On(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=wt.delayedCall(0,s||ra,o);return a.data="isPause",this._hasPause=1,ri(this,a,On(this,i))},t.removePause=function(i){var s=this._first;for(i=On(this,i);s;)s._start===i&&s.data==="isPause"&&Yi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Wi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Bn(i),l=this._first,c=Ei(s),h;l;)l instanceof wt?Fv(l._targets,a)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=On(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,_=wt.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ut,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&vs(_,g,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},s));return u?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,zn({startAt:{time:On(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bf(this,On(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bf(this,On(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return xr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Fn,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;vs(o,o===xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(xt._ts&&(Jf(xt,wo(i,xt)),Zf=mn.frame),mn.frame>=Uf){Uf+=_n.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&_n.autoSleep&&mn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mn.sleep()}}},e})(aa);zn(kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ay=function(e,t,n,i,s,o,a){var l=new nn(this._pt,e,t,0,1,lh,null,s),c=0,h=0,f,u,d,_,m,g,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ms(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),u=n.match(Cc)||[];f=Cc.exec(i);)_=f[0],m=i.substring(c,f.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),_!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:m||h===1?m:",",s:g,c:_.charAt(1)==="="?br(g,_)-g:parseFloat(_)-g,m:d&&d<4?Math.round:0},c=Cc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($c.test(i)||p)&&(l.e=0),this._pt=l,l},rh=function(e,t,n,i,s,o,a,l,c,h){Mt(i)&&(i=i(s||0,e,o));var f=e[t],u=n!=="get"?n:Mt(f)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Mt(f)?c?uy:xd:oh,_;if(Ut(i)&&(~i.indexOf("random(")&&(i=Ms(i)),i.charAt(1)==="="&&(_=br(u,i)+(Vt(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Xc)return!isNaN(u*i)&&i!==""?(_=new nn(this._pt,e,t,+u||0,i-(u||0),typeof f=="boolean"?dy:vd,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Co(t,i),ay.call(this,e,t,u,i,d,l||_n.stringFilter,c))},oy=function(e,t,n,i,s){if(Mt(e)&&(e=na(e,s,t,n,i)),!si(e)||e.style&&e.nodeType||Zt(e)||Gf(e))return Ut(e)?na(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=na(e[a],s,t,n,i);return o},sh=function(e,t,n,i,s,o){var a,l,c,h;if(pn[e]&&(a=new pn[e]).init(s,a.rawVars?t[e]:oy(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new nn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==gs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Wi,Xc,ah=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:g,v=e._overwrite==="auto"&&!Yc,E=e.timeline,M,w,A,I,x,T,H,O,U,F,B,K,k;if(E&&(!u||!s)&&(s="none"),e._ease=vr(s,_s.ease),e._yEase=f?dd(vr(f===!0?s:f,_s.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!i.runBackwards,!E||u&&!i.stagger){if(O=g[0]?qi(g[0]).harness:0,K=O&&i[O.prop],M=Eo(i,Qc),m&&(m._zTime<0&&m.progress(1),t<0&&h&&a&&!d?m.render(-1,!0):m.revert(h&&_?yo:Nv),m._lazy=0),o){if(Yi(e._startAt=wt.set(g,zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&gn(l),startAt:null,delay:0,onUpdate:c&&function(){return En(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt||!a&&!d)&&e._startAt.revert(yo),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!m){if(t&&(a=!1),A=zn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&gn(l),immediateRender:a,stagger:0,parent:p},M),K&&(A[O.prop]=K),Yi(e._startAt=wt.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Yt?e._startAt.revert(yo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&gn(l)||l&&!_,w=0;w<g.length;w++){if(x=g[w],H=x._gsap||eh(g)[w]._gsap,e._ptLookup[w]=F={},zc[H.id]&&Xi.length&&To(),B=y===g?w:y.indexOf(x),O&&(U=new O).init(x,K||M,e,B,y)!==!1&&(e._pt=I=new nn(e._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(G){F[G]=I}),U.priority&&(T=1)),!O||K)for(A in M)pn[A]&&(U=sh(A,M,e,B,x,y))?U.priority&&(T=1):F[A]=I=rh.call(e,x,A,"get",M[A],B,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),v&&e._pt&&(Wi=e,xt.killTweensOf(x,F,e.globalTime(t)),k=!e.parent,Wi=0),e._pt&&l&&(zc[H.id]=1)}T&&hh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,u&&t<=0&&E.render(Fn,!0,!0)},ly=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,u,d;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if(h=u[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Xc=1,e.vars[t]="+=0",ah(e,a),Xc=0,l?ia(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=St(n)+Vt(f.e)),f.b&&(f.b=h.s+Vt(f.b))},cy=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Mr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},hy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Zt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},na=function(e,t,n,i,s){return Mt(e)?e.call(t,n,i,s):Ut(e)&&~e.indexOf("random(")?Ms(e):e},gd=jc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_d={};tn(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _d[r]=1});var wt=(function(r){Vf(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ea(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,y=i.parent||xt,v=(Zt(n)||Gf(n)?Ei(n[0]):"length"in i)?[n]:Bn(n),E,M,w,A,I,x,T,H;if(a._targets=v.length?eh(v):ia("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||u||vo(c)||vo(h)){if(i=a.vars,E=a.timeline=new kt({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=bi(a),E._start=0,u||vo(c)||vo(h)){if(A=v.length,T=u&&rd(u),si(u))for(I in u)~gd.indexOf(I)&&(H||(H={}),H[I]=u[I]);for(M=0;M<A;M++)w=Eo(i,_d),w.stagger=0,p&&(w.yoyoEase=p),H&&Mr(w,H),x=v[M],w.duration=+na(c,bi(a),M,x,v),w.delay=(+na(h,bi(a),M,x,v)||0)-a._delay,!u&&A===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),E.to(x,w,T?T(M,x,v):0),E._ease=je.none;E.duration()?c=h=0:a.timeline=0}else if(_){ea(zn(E.vars.defaults,{ease:"none"})),E._ease=vr(_.ease||i.ease||"none");var O=0,U,F,B;if(Zt(_))_.forEach(function(K){return E.to(v,K,">")}),E.duration();else{w={};for(I in _)I==="ease"||I==="easeEach"||hy(I,_[I],w,_.easeEach);for(I in w)for(U=w[I].sort(function(K,k){return K.t-k.t}),O=0,M=0;M<U.length;M++)F=U[M],B={ease:F.e,duration:(F.t-(M?U[M-1].t:0))/100*c},B[I]=F.v,E.to(v,B,O),O+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!Yc&&(Wi=bi(a),xt.killTweensOf(v),Wi=0),ri(y,bi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ft(y._time)&&gn(f)&&Vv(bi(a))&&y.data!=="nested")&&(a._tTime=-ut,a.render(Math.max(0,-h)||0)),g&&ed(bi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-ut&&!h?l:i<ut?0:i,u,d,_,m,g,p,y,v,E;if(!c)Gv(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=f,v=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,o);if(u=Ft(f%m),f===l?(_=this._repeat,u=c):(_=~~(f/m),_&&_===Ft(f/m)&&(u=c,_--),u>c&&(u=c)),p=this._yoyo&&_&1,p&&(E=this._yEase,u=c-u),g=xs(this._tTime,m),u===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(v&&this._yEase&&pd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Ft(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(td(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(u/c),this._from&&(this.ratio=y=1-y),u&&!a&&!s&&!_&&(En(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&kc(this,i,s,o),En(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&En(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&kc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yi(this,1),!s&&!(h&&!a)&&(f||a||p)&&(En(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){sa||mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ah(this,c),h=this._ease(c/this._dur),ly(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Io(this,0),this.parent||Qf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wi&&Wi.vars.overwrite!==!0)._first||Qs(this),this.parent&&o!==this.timeline.totalDuration()&&vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Bn(i):a,c=this._ptLookup,h=this._pt,f,u,d,_,m,g,p;if((!s||s==="all")&&zv(a,l))return s==="all"&&(this._pt=0),Qs(this);for(f=this._op=this._op||[],s!=="all"&&(Ut(s)&&(m={},tn(s,function(y){return m[y]=1}),s=m),s=cy(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(f[p]=s,_=u,d={}):(d=f[p]=f[p]||{},_=s);for(m in _)g=u&&u[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Po(this,g,"_pt"),delete u[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&h&&Qs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ta(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ta(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return xt.killTweensOf(i,s,o)},e})(aa);zn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){wt[r]=function(){var e=new kt,t=Hc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var oh=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},uy=function(e,t,n,i){return e[t](i.fp,n)},fy=function(e,t,n){return e.setAttribute(t,n)},Do=function(e,t){return Mt(e[t])?xd:Ro(e[t])&&e.setAttribute?fy:oh},vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ch=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},py=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},my=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Po(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},nn=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||vd,this.d=l||this,this.set=c||oh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gy,this.m=n,this.mt=s,this.tween=i},r})();tn(jc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Qc[r]=1});wn.TweenMax=wn.TweenLite=wt;wn.TimelineLite=wn.TimelineMax=kt;xt=new kt({sortChildren:!1,defaults:_s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=nh;var yr=[],So={},_y=[],kf=0,xy=0,Uc=function(e){return(So[e]||_y).map(function(t){return t()})},qc=function(){var e=Date.now(),t=[];e-kf>2&&(Uc("matchMediaInit"),yr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ii.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Uc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kf=e,Uc("matchMedia"))},yd=(function(){function r(t,n){this.selector=n&&Gc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=xy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Mt(n)&&(s=i,i=n,n=Mt);var o=this,a=function(){var c=gt,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gc(s)),gt=o,f=i.apply(o,arguments),Mt(f)&&o._r.push(f),gt=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Mt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof kt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof wt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=yr.length;o--;)yr[o].id===this.id&&yr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),vy=(function(){function r(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){si(n)||(n={matches:n});var o=new yd(0,s||this.scope),a=o.conditions={},l,c,h;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ii.matchMedia(n[c]),l&&(yr.indexOf(o)<0&&yr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(qc):l.addEventListener("change",qc)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ao={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hd(i)})},timeline:function(e){return new kt(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ut(e)&&(e=Bn(e)[0]);var s=qi(e||{}).get,o=n?Kf:$f;return n==="native"&&(n=""),e&&(t?o((pn[t]&&pn[t].get||s)(e,t,n,i)):function(a,l,c){return o((pn[a]&&pn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Bn(e),e.length>1){var i=e.map(function(h){return Jt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=pn[t],a=qi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;gs._pt=0,f.init(e,n?h+n:h,gs,0,[e]),f.render(1,f),gs._pt&&ch(1,gs)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Jt.to(e,Mr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vr(e.ease,_s.ease)),Nf(_s,e||{})},config:function(e){return Nf(_n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!pn[a]&&!wn[a]&&ia(t+" effect requires "+a+" plugin.")}),Pc[t]=function(a,l,c){return n(Bn(a),zn(l||{},s),c)},o&&(kt.prototype[t]=function(a,l,c){return this.add(Pc[t](a,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=vr(t)},parseEase:function(e,t){return arguments.length?vr(e,t):je},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kt(e),i,s;for(n.smoothChildTiming=gn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(xt,n,0),n},context:function(e,t){return e?new yd(e,t):gt},matchMedia:function(e){return new vy(e)},matchMediaRefresh:function(){return yr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qc()},addEventListener:function(e,t){var n=So[e]||(So[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=So[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Kv,wrapYoyo:Qv,distribute:rd,random:ad,snap:sd,normalize:$v,getUnit:Vt,clamp:qv,splitColor:ud,toArray:Bn,selector:Gc,mapRange:ld,pipe:Zv,unitize:Jv,interpolate:jv,shuffle:id},install:qf,effects:Pc,ticker:mn,updateRoot:kt.updateRoot,plugins:pn,globalTimeline:xt,core:{PropTween:nn,globals:Yf,Tween:wt,Timeline:kt,Animation:aa,getCache:qi,_removeLinkedListItem:Po,reverting:function(){return Yt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return Yc=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ao[r]=wt[r]});mn.add(kt.updateRoot);gs=Ao.to({},{duration:0});var yy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},My=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=yy(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Nc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ut(s)&&(l={},tn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}My(a,s)}}}},Jt=Ao.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Yt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nc("roundProps",Wc),Nc("modifiers"),Nc("snap",sd))||Ao;wt.version=kt.version=Jt.version="3.12.5";Xf=1;Zc()&&ys();var Sy=je.Power0,by=je.Power1,Ty=je.Power2,Ey=je.Power3,wy=je.Power4,Ay=je.Linear,Ry=je.Quad,Cy=je.Cubic,Py=je.Quart,Ly=je.Quint,Iy=je.Strong,Dy=je.Elastic,Uy=je.Back,Ny=je.SteppedEase,Oy=je.Bounce,Fy=je.Sine,By=je.Expo,zy=je.Circ;var Md,Ji,bs,_h,Rr,ky,Sd,xh,Vy=function(){return typeof window<"u"},Ai={},Ar=180/Math.PI,Ts=Math.PI/180,Ss=Math.atan2,bd=1e8,vh=/([A-Z])/g,Hy=/(left|right|width|margin|padding|x)/i,Gy=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Xy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ld=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yy=function(e,t,n){return e.style[t]=n},Zy=function(e,t,n){return e.style.setProperty(t,n)},Jy=function(e,t,n){return e._gsap[t]=n},$y=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ky=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Qy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},vt="transform",xn=vt+"Origin",jy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ai&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wi(i,a)}):this.tfm[e]=o.x?o[e]:wi(i,e),e===xn&&(this.tfm.zOrigin=o.zOrigin);else return ai.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(vt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},Id=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xh(),(!s||!s.isStart)&&!n[vt]&&(Id(n),i.zOrigin&&n[xn]&&(n[xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dd=function(e,t){var n={target:e,props:[],revert:eM,save:jy};return e._gsap||Jt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ud,ph=function(e,t){var n=Ji.createElementNS?Ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ji.createElement(e);return n&&n.style?n:Ji.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Es(t)||t,1)||""},Td="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var i=t||Rr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Td[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Td[o]:"")+e},mh=function(){Vy()&&window.document&&(Md=window,Ji=Md.document,bs=Ji.documentElement,Rr=ph("div")||{style:{}},ky=ph("div"),vt=Es(vt),xn=vt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ud=!!Es("perspective"),xh=Jt.core.reverting,_h=1)},uh=function r(e){var t=ph("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(bs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),bs.removeChild(t),this.style.cssText=s,o},Ed=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Nd=function(e){var t;try{t=e.getBBox()}catch{t=uh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===uh||(t=uh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ed(e,["x","cx","x1"])||0,y:+Ed(e,["y","cy","y1"])||0,width:0,height:0}:t},Od=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Nd(e))},Cr=function(e,t){if(t){var n=e.style,i;t in Ai&&t!==xn&&(t=vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(vh,"-$1").toLowerCase())):n.removeAttribute(t)}},$i=function(e,t,n,i,s,o){var a=new nn(e._pt,t,n,0,1,o?Ld:Pd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},wd={deg:1,rad:1,turn:1},tM={grid:1,flex:1},Ki=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Rr.style,l=Hy.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",_,m,g,p;if(i===o||!s||wd[i]||wd[o])return s;if(o!=="px"&&!u&&(s=r(e,t,n,"px")),p=e.getCTM&&Od(e),(d||o==="%")&&(Ai[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],St(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(u?o:i),m=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ji||!m.appendChild)&&(m=Ji.body),g=m._gsap,g&&d&&g.width&&l&&g.time===mn.time&&!g.uncache)return St(s/g.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,_=e[h],y?e.style[t]=y:Cr(e,t)}else(d||o==="%")&&!tM[oi(m,"display")]&&(a.position=oi(e,"position")),m===e&&(a.position="static"),m.appendChild(Rr),_=Rr[h],m.removeChild(Rr),a.position="absolute";return l&&d&&(g=qi(m),g.time=mn.time,g.width=m[h]),St(u?_*s/f:_&&s?f/_*s:0)},wi=function(e,t,n,i){var s;return _h||mh(),t in ai&&t!=="transform"&&(t=ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ai[t]&&t!=="transform"?(s=ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:No(oi(e,xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Uo[t]&&Uo[t](e,t,n)||oi(e,t)||th(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ki(e,t,s,n)+n:s},nM=function(e,t,n,i){if(!n||n==="none"){var s=Es(t,e,1),o=s&&oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var a=new nn(this._pt,e.style,t,0,1,lh),l=0,c=0,h,f,u,d,_,m,g,p,y,v,E,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(m=e.style[t],e.style[t]=i,i=oi(e,t)||i,m?e.style[t]=m:Cr(e,t)),h=[n,i],nh(h),n=h[0],i=h[1],u=n.match(Sr)||[],M=i.match(Sr)||[],M.length){for(;f=Sr.exec(i);)g=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(m=u[c++]||"")&&(d=parseFloat(m)||0,E=m.substr((d+"").length),g.charAt(1)==="="&&(g=br(d,g)+E),p=parseFloat(g),v=g.substr((p+"").length),l=Sr.lastIndex-v.length,v||(v=v||_n.units[t]||E,l===i.length&&(i+=v,a.e+=v)),E!==v&&(d=Ki(e,t,m,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Ld:Pd;return $c.test(i)&&(a.e=0),this._pt=a,a},Ad={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ad[n]||n,t[1]=Ad[i]||i,t.join(" ")},rM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ai[a]&&(l=1,a=a==="transformOrigin"?xn:vt),Cr(n,a);l&&(Cr(n,vt),o&&(o.svg&&n.removeAttribute("transform"),ha(n,1),o.uncache=1,Id(i)))}},Uo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new nn(e._pt,t,n,0,0,rM);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ca=[1,0,0,1,0,0],Fd={},Bd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rd=function(e){var t=oi(e,vt);return Bd(t)?ca:t.substr(7).match(Jc).map(St)},yh=function(e,t){var n=e._gsap||qi(e),i=e.style,s=Rd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ca:s):(s===ca&&!e.offsetParent&&e!==bs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,bs.appendChild(e)),s=Rd(e),l?i.display=l:Cr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):bs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gh=function(e,t,n,i,s,o){var a=e._gsap,l=s||yh(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],_=l[1],m=l[2],g=l[3],p=l[4],y=l[5],v=t.split(" "),E=parseFloat(v[0])||0,M=parseFloat(v[1])||0,w,A,I,x;n?l!==ca&&(A=d*g-_*m)&&(I=E*(g/A)+M*(-m/A)+(m*y-g*p)/A,x=E*(-_/A)+M*(d/A)-(d*y-_*p)/A,E=I,M=x):(w=Nd(e),E=w.x+(~v[0].indexOf("%")?E/100*w.width:E),M=w.y+(~(v[1]||v[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(p=E-c,y=M-h,a.xOffset=f+(p*d+y*m)-p,a.yOffset=u+(p*_+y*g)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[xn]="0px 0px",o&&($i(o,a,"xOrigin",c,E),$i(o,a,"yOrigin",h,M),$i(o,a,"xOffset",f,a.xOffset),$i(o,a,"yOffset",u,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+M)},ha=function(e,t){var n=e._gsap||new ih(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=oi(e,xn)||"0",h,f,u,d,_,m,g,p,y,v,E,M,w,A,I,x,T,H,O,U,F,B,K,k,G,Q,R,le,oe,q,$,ie;return h=f=u=m=g=p=y=v=E=0,d=_=1,n.svg=!!(e.getCTM&&Od(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),A=yh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),gh(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==ca&&(H=A[0],O=A[1],U=A[2],F=A[3],h=B=A[4],f=K=A[5],A.length===6?(d=Math.sqrt(H*H+O*O),_=Math.sqrt(F*F+U*U),m=H||O?Ss(O,H)*Ar:0,y=U||F?Ss(U,F)*Ar+m:0,y&&(_*=Math.abs(Math.cos(y*Ts))),n.svg&&(h-=M-(M*H+w*U),f-=w-(M*O+w*F))):(ie=A[6],q=A[7],R=A[8],le=A[9],oe=A[10],$=A[11],h=A[12],f=A[13],u=A[14],I=Ss(ie,oe),g=I*Ar,I&&(x=Math.cos(-I),T=Math.sin(-I),k=B*x+R*T,G=K*x+le*T,Q=ie*x+oe*T,R=B*-T+R*x,le=K*-T+le*x,oe=ie*-T+oe*x,$=q*-T+$*x,B=k,K=G,ie=Q),I=Ss(-U,oe),p=I*Ar,I&&(x=Math.cos(-I),T=Math.sin(-I),k=H*x-R*T,G=O*x-le*T,Q=U*x-oe*T,$=F*T+$*x,H=k,O=G,U=Q),I=Ss(O,H),m=I*Ar,I&&(x=Math.cos(I),T=Math.sin(I),k=H*x+O*T,G=B*x+K*T,O=O*x-H*T,K=K*x-B*T,H=k,B=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),d=St(Math.sqrt(H*H+O*O+U*U)),_=St(Math.sqrt(K*K+ie*ie)),I=Ss(B,K),y=Math.abs(I)>2e-4?I*Ar:0,E=$?1/($<0?-$:$):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Bd(oi(e,vt)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=St(d),n.scaleY=St(_),n.rotation=St(m)+a,n.rotationX=St(g)+a,n.rotationY=St(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[xn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=_n.force3D,n.renderTransform=n.svg?aM:Ud?zd:sM,n.uncache=0,n},No=function(e){return(e=e.split(" "))[0]+" "+e[1]},fh=function(e,t,n){var i=Vt(t);return St(parseFloat(t)+parseFloat(Ki(e,"x",n+"px",i)))+i},sM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zd(e,t)},Er="0deg",la="0px",wr=") ",zd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,E="",M=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==Er||h!==Er)){var w=parseFloat(h)*Ts,A=Math.sin(w),I=Math.cos(w),x;w=parseFloat(f)*Ts,x=Math.cos(w),o=fh(y,o,A*x*-v),a=fh(y,a,-Math.sin(w)*-v),l=fh(y,l,I*x*-v+v)}g!==la&&(E+="perspective("+g+wr),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(M||o!==la||a!==la||l!==la)&&(E+=l!==la||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+wr),c!==Er&&(E+="rotate("+c+wr),h!==Er&&(E+="rotateY("+h+wr),f!==Er&&(E+="rotateX("+f+wr),(u!==Er||d!==Er)&&(E+="skew("+u+", "+d+wr),(_!==1||m!==1)&&(E+="scale("+_+", "+m+wr),y.style[vt]=E||"translate(0, 0)"},aM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),E=parseFloat(a),M,w,A,I,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ts,c*=Ts,M=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-u,I=Math.cos(l-c)*u,c&&(h*=Ts,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,I*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),M*=x,w*=x)),M=St(M),w=St(w),A=St(A),I=St(I)):(M=f,I=u,w=A=0),(v&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(v=Ki(d,"x",o,"px"),E=Ki(d,"y",a,"px")),(_||m||g||p)&&(v=St(v+_-(_*M+m*A)+g),E=St(E+m-(_*w+m*I)+p)),(i||s)&&(x=d.getBBox(),v=St(v+i/100*x.width),E=St(E+s/100*x.height)),x="matrix("+M+","+w+","+A+","+I+","+v+","+E+")",d.setAttribute("transform",x),y&&(d.style[vt]=x)},oM=function(e,t,n,i,s){var o=360,a=Ut(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*bd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*bd)%o-~~(c/o)*o)),e._pt=u=new nn(e._pt,t,n,i,c,Wy),u.e=h,u.u="deg",e._props.push(n),u},Cd=function(e,t){for(var n in t)e[n]=t[n];return e},lM=function(e,t,n){var i=Cd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[vt]=t,a=ha(n,1),Cr(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],o[vt]=t,a=ha(n,1),o[vt]=c);for(l in Ai)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Vt(c),_=Vt(h),f=d!==_?Ki(n,l,c,_):parseFloat(c),u=parseFloat(h),e._pt=new nn(e._pt,a,l,f,u-f,dh),e._pt.u=_||0,e._props.push(l));Cd(a,i)};tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Uo[e>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(_){return wi(a,_,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(_,m){return d[_]=u[m]=u[m]||u[(m-1)/2|0]}),a.init(l,d,f)}});var Mh={name:"css",register:mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,u,d,_,m,g,p,y,v,E,M,w,A,I;_h||mh(),this.styles=this.styles||Dd(e),I=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(h=t[m],!(pn[m]&&sh(m,t,n,i,e,s)))){if(d=typeof h,_=Uo[m],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ms(h)),_)_(this,e,m,h,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),h+="",Ti.lastIndex=0,Ti.test(c)||(g=Vt(c),p=Vt(h)),p?g!==p&&(c=Ki(e,m,c,p)+p):g&&(h+=g),this.add(a,"setProperty",c,h,i,s,0,0,m),o.push(m),I.push(m,0,a[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],Ut(c)&&~c.indexOf("random(")&&(c=Ms(c)),Vt(c+"")||c==="auto"||(c+=_n.units[m]||Vt(wi(e,m))||""),(c+"").charAt(1)==="="&&(c=wi(e,m))):c=wi(e,m),u=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),m in ai&&(m==="autoAlpha"&&(u===1&&wi(e,"visibility")==="hidden"&&f&&(u=0),I.push("visibility",0,a.visibility),$i(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=ai[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Ai,v){if(this.styles.save(m),E||(M=e._gsap,M.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,E=this._pt=new nn(this._pt,a,vt,0,1,M.renderTransform,M,0,-1),E.dep=1),m==="scale")this._pt=new nn(this._pt,M,"scaleY",M.scaleY,(y?br(M.scaleY,y+f):f)-M.scaleY||0,dh),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){I.push(xn,0,a[xn]),h=iM(h),M.svg?gh(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&$i(this,M,"zOrigin",M.zOrigin,p),$i(this,a,m,No(c),No(h)));continue}else if(m==="svgOrigin"){gh(e,h,1,w,0,this);continue}else if(m in Fd){oM(this,M,m,u,y?br(u,y+h):h);continue}else if(m==="smoothOrigin"){$i(this,M,"smooth",M.smooth,h);continue}else if(m==="force3D"){M[m]=h;continue}else if(m==="transform"){lM(this,h,e);continue}}else m in a||(m=Es(m)||m);if(v||(f||f===0)&&(u||u===0)&&!Gy.test(h)&&m in a)g=(c+"").substr((u+"").length),f||(f=0),p=Vt(h)||(m in _n.units?_n.units[m]:g),g!==p&&(u=Ki(e,m,c,p)),this._pt=new nn(this._pt,v?M:a,m,u,(y?br(u,y+f):f)-u,!v&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?qy:dh),this._pt.u=p||0,g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Xy);else if(m in a)nM.call(this,e,m,c,y?y+h:h);else if(m in e)this.add(e,m,c||e[m],y?y+h:h,i,s);else if(m!=="parseTransform"){Co(m,h);continue}v||(m in a?I.push(m,0,a[m]):I.push(m,1,c||e[m])),o.push(m)}}A&&hh(this)},render:function(e,t){if(t.tween._time||!xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:ai,getSetter:function(e,t,n){var i=ai[t];return i&&i.indexOf(",")<0&&(t=i),t in Ai&&t!==xn&&(e._gsap.x||wi(e,"x"))?n&&Sd===n?t==="scale"?$y:Jy:(Sd=n||{})&&(t==="scale"?Ky:Qy):e.style&&!Ro(e.style[t])?Yy:~t.indexOf("-")?Zy:Do(e,t)},core:{_removeProperty:Cr,_getMatrix:yh}};Jt.utils.checkPrefix=Es;Jt.core.getStyleSaver=Dd;(function(r,e,t,n){var i=tn(r+","+e+","+t,function(s){Ai[s]=1});tn(e,function(s){_n.units[s]="deg",Fd[s]=1}),ai[i[13]]=r+","+e,tn(n,function(s){var o=s.split(":");ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_n.units[r]="px"});Jt.registerPlugin(Mh);var Oo=Jt.registerPlugin(Mh)||Jt,BM=Oo.core.Tween;function kd(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function cM(r,e,t){return e&&kd(r.prototype,e),t&&kd(r,t),r}var Ht,zo,hM,An,Qi,ji,As,Hd,Pr,fa,Gd,Ri,Kn,Wd,Xd=function(){return Ht||typeof window<"u"&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},qd=1,ws=[],qe=[],Qn=[],da=Date.now,Sh=function(e,t){return t},uM=function(){var e=fa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,qe),i.push.apply(i,Qn),qe=n,Qn=i,Sh=function(o,a){return t[o](a)}},Pi=function(e,t){return~Qn.indexOf(e)&&Qn[Qn.indexOf(e)+1][t]},pa=function(e){return!!~Gd.indexOf(e)},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Fo="scrollLeft",Bo="scrollTop",bh=function(){return Ri&&Ri.isPressed||qe.cache++},ko=function(e,t){var n=function i(s){if(s||s===0){qd&&(An.history.scrollRestoration="manual");var o=Ri&&Ri.isPressed;s=i.v=Math.round(s)||(Ri&&Ri.iOS?1:0),e(s),i.cacheID=qe.cache,o&&Sh("ss",s)}else(t||qe.cache!==i.cacheID||Sh("ref"))&&(i.cacheID=qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},$t={s:Fo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ko(function(r){return arguments.length?An.scrollTo(r,Ct.sc()):An.pageXOffset||Qi[Fo]||ji[Fo]||As[Fo]||0})},Ct={s:Bo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$t,sc:ko(function(r){return arguments.length?An.scrollTo($t.sc(),r):An.pageYOffset||Qi[Bo]||ji[Bo]||As[Bo]||0})},an=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ht.utils.toArray)(e)[0]||(typeof e=="string"&&Ht.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ci=function(e,t){var n=t.s,i=t.sc;pa(e)&&(e=Qi.scrollingElement||ji);var s=qe.indexOf(e),o=i===Ct.sc?1:2;!~s&&(s=qe.push(e)-1),qe[s+o]||sn(e,"scroll",bh);var a=qe[s+o],l=a||(qe[s+o]=ko(Pi(e,n),!0)||(pa(e)?i:ko(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Ht.getProperty(e,"scrollBehavior")==="smooth"),l},Vo=function(e,t,n){var i=e,s=e,o=da(),a=o,l=t||50,c=Math.max(500,l*3),h=function(_,m){var g=da();m||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(_){var m=a,g=s,p=da();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-m)*1e3};return{update:h,reset:f,getVelocity:u}},ua=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Vd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Yd=function(){fa=Ht.core.globals().ScrollTrigger,fa&&fa.core&&uM()},Zd=function(e){return Ht=e||Xd(),!zo&&Ht&&typeof document<"u"&&document.body&&(An=window,Qi=document,ji=Qi.documentElement,As=Qi.body,Gd=[An,Qi,ji,As],hM=Ht.utils.clamp,Wd=Ht.core.context||function(){},Pr="onpointerenter"in As?"pointer":"mouse",Hd=bt.isTouch=An.matchMedia&&An.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in An||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Kn=bt.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qd=0},500),Yd(),zo=1),zo};$t.op=Ct;qe.cache=0;var bt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){zo||Zd(Ht)||console.warn("Please gsap.registerPlugin(Observer)"),fa||Yd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,E=n.onRelease,M=n.onRight,w=n.onLeft,A=n.onUp,I=n.onDown,x=n.onChangeX,T=n.onChangeY,H=n.onChange,O=n.onToggleX,U=n.onToggleY,F=n.onHover,B=n.onHoverEnd,K=n.onMove,k=n.ignoreCheck,G=n.isNormalizer,Q=n.onGestureStart,R=n.onGestureEnd,le=n.onWheel,oe=n.onEnable,q=n.onDisable,$=n.onClick,ie=n.scrollSpeed,se=n.capture,L=n.allowClicks,we=n.lockAxis,be=n.onLockAxis;this.target=a=an(a)||ji,this.vars=n,d&&(d=Ht.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(An.getComputedStyle(As).lineHeight)||22);var ae,ye,ke,re,Ae,nt,rt,V=this,it=0,We=0,st=n.passive||!h,$e=Ci(a,$t),C=Ci(a,Ct),b=$e(),Y=C(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Kn[0]==="pointerdown",te=pa(a),ne=a.ownerDocument||Qi,Re=[0,0,0],de=[0,0,0],J=0,Te=function(){return J=da()},pe=function(Se,ze){return(V.event=Se)&&d&&~d.indexOf(Se.target)||ze&&j&&Se.pointerType!=="touch"||k&&k(Se,ze)},Pe=function(){V._vx.reset(),V._vy.reset(),ye.pause(),f&&f(V)},me=function(){var Se=V.deltaX=Vd(Re),ze=V.deltaY=Vd(de),ue=Math.abs(Se)>=i,Ne=Math.abs(ze)>=i;H&&(ue||Ne)&&H(V,Se,ze,Re,de),ue&&(M&&V.deltaX>0&&M(V),w&&V.deltaX<0&&w(V),x&&x(V),O&&V.deltaX<0!=it<0&&O(V),it=V.deltaX,Re[0]=Re[1]=Re[2]=0),Ne&&(I&&V.deltaY>0&&I(V),A&&V.deltaY<0&&A(V),T&&T(V),U&&V.deltaY<0!=We<0&&U(V),We=V.deltaY,de[0]=de[1]=de[2]=0),(re||ke)&&(K&&K(V),ke&&(y(V),ke=!1),re=!1),nt&&!(nt=!1)&&be&&be(V),Ae&&(le(V),Ae=!1),ae=0},Me=function(Se,ze,ue){Re[ue]+=Se,de[ue]+=ze,V._vx.update(Se),V._vy.update(ze),c?ae||(ae=requestAnimationFrame(me)):me()},Ve=function(Se,ze){we&&!rt&&(V.axis=rt=Math.abs(Se)>Math.abs(ze)?"x":"y",nt=!0),rt!=="y"&&(Re[2]+=Se,V._vx.update(Se,!0)),rt!=="x"&&(de[2]+=ze,V._vy.update(ze,!0)),c?ae||(ae=requestAnimationFrame(me)):me()},Ze=function(Se){if(!pe(Se,1)){Se=ua(Se,h);var ze=Se.clientX,ue=Se.clientY,Ne=ze-V.x,Ie=ue-V.y,Oe=V.isDragging;V.x=ze,V.y=ue,(Oe||Math.abs(V.startX-ze)>=s||Math.abs(V.startY-ue)>=s)&&(y&&(ke=!0),Oe||(V.isDragging=!0),Ve(Ne,Ie),Oe||g&&g(V))}},at=V.onPress=function(ve){pe(ve,1)||ve&&ve.button||(V.axis=rt=null,ye.pause(),V.isPressed=!0,ve=ua(ve),it=We=0,V.startX=V.x=ve.clientX,V.startY=V.y=ve.clientY,V._vx.reset(),V._vy.reset(),sn(G?a:ne,Kn[1],Ze,st,!0),V.deltaX=V.deltaY=0,v&&v(V))},P=V.onRelease=function(ve){if(!pe(ve,1)){rn(G?a:ne,Kn[1],Ze,!0);var Se=!isNaN(V.y-V.startY),ze=V.isDragging,ue=ze&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ne=ua(ve);!ue&&Se&&(V._vx.reset(),V._vy.reset(),h&&L&&Ht.delayedCall(.08,function(){if(da()-J>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(ne.createEvent){var Ie=ne.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,An,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ie)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&ze&&!G&&ye.restart(!0),p&&ze&&p(V),E&&E(V,ue)}},Z=function(Se){return Se.touches&&Se.touches.length>1&&(V.isGesturing=!0)&&Q(Se,V.isDragging)},ee=function(){return(V.isGesturing=!1)||R(V)},he=function(Se){if(!pe(Se)){var ze=$e(),ue=C();Me((ze-b)*ie,(ue-Y)*ie,1),b=ze,Y=ue,f&&ye.restart(!0)}},ge=function(Se){if(!pe(Se)){Se=ua(Se,h),le&&(Ae=!0);var ze=(Se.deltaMode===1?l:Se.deltaMode===2?An.innerHeight:1)*_;Me(Se.deltaX*ze,Se.deltaY*ze,0),f&&!G&&ye.restart(!0)}},Ke=function(Se){if(!pe(Se)){var ze=Se.clientX,ue=Se.clientY,Ne=ze-V.x,Ie=ue-V.y;V.x=ze,V.y=ue,re=!0,f&&ye.restart(!0),(Ne||Ie)&&Ve(Ne,Ie)}},tt=function(Se){V.event=Se,F(V)},ht=function(Se){V.event=Se,B(V)},un=function(Se){return pe(Se)||ua(Se,h)&&$(V)};ye=V._dc=Ht.delayedCall(u||.25,Pe).pause(),V.deltaX=V.deltaY=0,V._vx=Vo(0,50,!0),V._vy=Vo(0,50,!0),V.scrollX=$e,V.scrollY=C,V.isDragging=V.isGesturing=V.isPressed=!1,Wd(this),V.enable=function(ve){return V.isEnabled||(sn(te?ne:a,"scroll",bh),o.indexOf("scroll")>=0&&sn(te?ne:a,"scroll",he,st,se),o.indexOf("wheel")>=0&&sn(a,"wheel",ge,st,se),(o.indexOf("touch")>=0&&Hd||o.indexOf("pointer")>=0)&&(sn(a,Kn[0],at,st,se),sn(ne,Kn[2],P),sn(ne,Kn[3],P),L&&sn(a,"click",Te,!0,!0),$&&sn(a,"click",un),Q&&sn(ne,"gesturestart",Z),R&&sn(ne,"gestureend",ee),F&&sn(a,Pr+"enter",tt),B&&sn(a,Pr+"leave",ht),K&&sn(a,Pr+"move",Ke)),V.isEnabled=!0,ve&&ve.type&&at(ve),oe&&oe(V)),V},V.disable=function(){V.isEnabled&&(ws.filter(function(ve){return ve!==V&&pa(ve.target)}).length||rn(te?ne:a,"scroll",bh),V.isPressed&&(V._vx.reset(),V._vy.reset(),rn(G?a:ne,Kn[1],Ze,!0)),rn(te?ne:a,"scroll",he,se),rn(a,"wheel",ge,se),rn(a,Kn[0],at,se),rn(ne,Kn[2],P),rn(ne,Kn[3],P),rn(a,"click",Te,!0),rn(a,"click",un),rn(ne,"gesturestart",Z),rn(ne,"gestureend",ee),rn(a,Pr+"enter",tt),rn(a,Pr+"leave",ht),rn(a,Pr+"move",Ke),V.isEnabled=V.isPressed=V.isDragging=!1,q&&q(V))},V.kill=V.revert=function(){V.disable();var ve=ws.indexOf(V);ve>=0&&ws.splice(ve,1),Ri===V&&(Ri=0)},ws.push(V),G&&pa(a)&&(Ri=V),V.enable(m)},cM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();bt.version="3.12.5";bt.create=function(r){return new bt(r)};bt.register=Zd;bt.getAll=function(){return ws.slice()};bt.getById=function(r){return ws.filter(function(e){return e.vars.id===r})[0]};Xd()&&Ht.registerPlugin(bt);var xe,Ps,et,yt,jn,ft,fp,il,Aa,Ma,ga,Ho,Kt,ol,Lh,ln,Jd,$d,Ls,dp,Th,pp,on,Ih,mp,gp,er,Dh,Bh,Is,zh,rl,Uh,Eh,Go=1,Qt=Date.now,wh=Qt(),Hn=0,_a=0,Kd=function(e,t,n){var i=Cn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Qd=function(e,t){return t&&(!Cn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fM=function r(){return _a&&requestAnimationFrame(r)},jd=function(){return ol=1},ep=function(){return ol=0},li=function(e){return e},xa=function(e){return Math.round(e*1e5)/1e5||0},_p=function(){return typeof window<"u"},xp=function(){return xe||_p()&&(xe=window.gsap)&&xe.registerPlugin&&xe},Or=function(e){return!!~fp.indexOf(e)},vp=function(e){return(e==="Height"?zh:et["inner"+e])||jn["client"+e]||ft["client"+e]},yp=function(e){return Pi(e,"getBoundingClientRect")||(Or(e)?function(){return nl.width=et.innerWidth,nl.height=zh,nl}:function(){return Li(e)})},dM=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Pi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?vp(s):e["client"+s])||0}},pM=function(e,t){return!t||~Qn.indexOf(e)?yp(e):function(){return nl}},ci=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Pi(e,n))?o()-yp(e)()[s]:Or(e)?(jn[n]||ft[n])-vp(i):e[n]-e["offset"+i])},Wo=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},Cn=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},va=function(e){return typeof e=="number"},Lr=function(e){return typeof e=="object"},ma=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ah=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Rs=Math.abs,Mp="left",Sp="top",kh="right",Vh="bottom",Dr="width",Ur="height",Sa="Right",ba="Left",Ta="Top",Ea="Bottom",Pt="padding",kn="margin",Us="Width",Hh="Height",Nt="px",Vn=function(e){return et.getComputedStyle(e)},mM=function(e){var t=Vn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Li=function(e,t){var n=t&&Vn(e)[Lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},sl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},gM=function(e){return function(t){return xe.utils.snap(bp(e),t)}},Gh=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},_M=function(e){return function(t,n){return Gh(bp(e))(t,n.direction)}},Xo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},zt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Bt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},np={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yo={toggleActions:"play",anticipatePin:0},al={top:0,left:0,center:.5,bottom:1,right:1},Qo=function(e,t){if(Cn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in al?al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zo=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,_=yt.createElement("div"),m=Or(n)||Pi(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?ft:n,y=e.indexOf("start")!==-1,v=y?c:h,E="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(E+=(i===Ct?kh:Vh)+":"+(o+parseFloat(u))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=E,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],jo(_,0,i,y),_},jo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Us]=1,s["border"+a+Us]=0,s[n.p]=t+"px",xe.set(e,s)},Ye=[],Nh={},Ra,ip=function(){return Qt()-Hn>34&&(Ra||(Ra=requestAnimationFrame(Ii)))},Cs=function(){(!on||!on.isPressed||on.startX>ft.clientWidth)&&(qe.cache++,on?Ra||(Ra=requestAnimationFrame(Ii)):Ii(),Hn||Br("scrollStart"),Hn=Qt())},Rh=function(){gp=et.innerWidth,mp=et.innerHeight},ya=function(){qe.cache++,!Kt&&!pp&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Ih||gp!==et.innerWidth||Math.abs(et.innerHeight-mp)>et.innerHeight*.25)&&il.restart(!0)},Fr={},xM=[],Tp=function r(){return Bt(Je,"scrollEnd",r)||Ir(!0)},Br=function(e){return Fr[e]&&Fr[e].map(function(t){return t()})||xM},Rn=[],Ep=function(e){for(var t=0;t<Rn.length;t+=5)(!e||Rn[t+4]&&Rn[t+4].query===e)&&(Rn[t].style.cssText=Rn[t+1],Rn[t].getBBox&&Rn[t].setAttribute("transform",Rn[t+2]||""),Rn[t+3].uncache=1)},Wh=function(e,t){var n;for(ln=0;ln<Ye.length;ln++)n=Ye[ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));rl=!0,t&&Ep(t),t||Br("revert")},wp=function(e,t){qe.cache++,(t||!cn)&&qe.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Cn(e)&&(et.history.scrollRestoration=Bh=e)},cn,Nr=0,rp,vM=function(){if(rp!==Nr){var e=rp=Nr;requestAnimationFrame(function(){return e===Nr&&Ir(!0)})}},Ap=function(){ft.appendChild(Is),zh=!on&&Is.offsetHeight||et.innerHeight,ft.removeChild(Is)},sp=function(e){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ir=function(e,t){if(Hn&&!e&&!rl){zt(Je,"scrollEnd",Tp);return}Ap(),cn=Je.isRefreshing=!0,qe.forEach(function(i){return hn(i)&&++i.cacheID&&(i.rec=i())});var n=Br("refreshInit");dp&&Je.sort(),t||Wh(),qe.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),rl=!1,Ye.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Uh=1,sp(!0),Ye.forEach(function(i){var s=ci(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),sp(!1),Uh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),qe.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),wp(Bh,1),il.pause(),Nr++,cn=2,Ii(2),Ye.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),cn=Je.isRefreshing=!1,Br("refresh")},Oh=0,el=1,wa,Ii=function(e){if(e===2||!cn&&!rl){Je.isUpdating=!0,wa&&wa.update(0);var t=Ye.length,n=Qt(),i=n-wh>=50,s=t&&Ye[0].scroll();if(el=Oh>s?-1:1,cn||(Oh=s),i&&(Hn&&!ol&&n-Hn>200&&(Hn=0,Br("scrollEnd")),ga=wh,wh=n),el<0){for(ln=t;ln-- >0;)Ye[ln]&&Ye[ln].update(0,i);el=1}else for(ln=0;ln<t;ln++)Ye[ln]&&Ye[ln].update(0,i);Je.isUpdating=!1}Ra=0},Fh=[Mp,Sp,Vh,kh,kn+Ea,kn+Sa,kn+Ta,kn+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tl=Fh.concat([Dr,Ur,"boxSizing","max"+Us,"max"+Hh,"position",kn,Pt,Pt+Ta,Pt+Sa,Pt+Ea,Pt+ba]),yM=function(e,t,n){Ds(n);var i=e._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Fh.length,o=t.style,a=e.style,l;s--;)l=Fh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vh]=a[kh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Dr]=sl(e,$t)+Nt,o[Ur]=sl(e,Ct)+Nt,o[Pt]=a[kn]=a[Sp]=a[Mp]="0",Ds(i),a[Dr]=a["max"+Us]=n[Dr],a[Ur]=a["max"+Hh]=n[Ur],a[Pt]=n[Pt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MM=/([A-Z])/g,Ds=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(MM,"-$1").toLowerCase())}},Jo=function(e){for(var t=tl.length,n=e.style,i=[],s=0;s<t;s++)i.push(tl[s],n[tl[s]]);return i.t=e,i},SM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},nl={left:0,top:0},ap=function(e,t,n,i,s,o,a,l,c,h,f,u,d,_){hn(e)&&(e=e(l)),Cn(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Qo("0"+e.substr(3),n):0));var m=d?d.time():0,g,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),va(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,e)),a&&jo(a,n,i,!0);else{hn(t)&&(t=t(l));var v=(e||"0").split(" "),E,M,w,A;y=an(t,l)||ft,E=Li(y)||{},(!E||!E.left&&!E.top)&&Vn(y).display==="none"&&(A=y.style.display,y.style.display="block",E=Li(y),A?y.style.display=A:y.style.removeProperty("display")),M=Qo(v[0],E[i.d]),w=Qo(v[1]||"0",n),e=E[i.p]-c[i.p]-h+M+s-w,a&&jo(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var I=e+n,x=o._isStart;g="scroll"+i.d2,jo(o,I,i,x&&I>20||!x&&(f?Math.max(ft[g],jn[g]):o.parentNode[g])<=I+1),f&&(c=Li(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Nt))}return d&&y&&(g=Li(y),d.seek(u),p=Li(y),d._caScrollDist=g[i.p]-p[i.p],e=e/d._caScrollDist*u),d&&d.seek(m),d?e:Math.round(e)},bM=/(webkit|moz|length|cssText|inset)/i,op=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ft){e._stOrig=s.cssText,a=Vn(e);for(o in a)!+o&&!bM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},Rp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},$o=function(e,t,n){var i={};i[t.p]="+="+n,xe.set(e,i)},lp=function(e,t){var n=Ci(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,_={};c=c||n();var m=Rp(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return m(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){qe.cache++,o.tween&&Ii()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=xe.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},zt(e,"wheel",n.wheelHandler),Je.isTouch&&zt(e,"touchmove",n.wheelHandler),s},Je=(function(){function r(t,n){Ps||r.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=li;return}n=tp(Cn(n)||va(n)||n.nodeType?{trigger:n}:n,Yo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,E=s.snap,M=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,I=s.fastScrollEnd,x=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$t:Ct,H=!f&&f!==0,O=an(n.scroller||et),U=xe.core.getCache(O),F=Or(O),B=("pinType"in n?n.pinType:Pi(O,"pinType")||F&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=H&&n.toggleActions.split(" "),G="markers"in n?n.markers:Yo.markers,Q=F?0:parseFloat(Vn(O)["border"+T.p2+Us])||0,R=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(R)},oe=dM(O,F,T),q=pM(O,F),$=0,ie=0,se=0,L=Ci(O,T),we,be,ae,ye,ke,re,Ae,nt,rt,V,it,We,st,$e,C,b,Y,j,te,ne,Re,de,J,Te,pe,Pe,me,Me,Ve,Ze,at,P,Z,ee,he,ge,Ke,tt,ht;if(R._startClamp=R._endClamp=!1,R._dir=T,g*=45,R.scroller=O,R.scroll=A?A.time.bind(A):L,ye=L(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(dp=1,n.refreshPriority===-9999&&(wa=R)),U.tweenScroll=U.tweenScroll||{top:lp(O,Ct),left:lp(O,$t)},R.tweenTo=we=U.tweenScroll[T.p],R.scrubDuration=function(ue){Z=va(ue)&&ue,Z?P?P.duration(ue):P=xe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return p&&p(R)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Ze=0,l||(l=i.vars.id)),E&&((!Lr(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in ft.style&&xe.set(F?[ft,jn]:O,{scrollBehavior:"auto"}),qe.forEach(function(ue){return hn(ue)&&ue.target===(F?yt.scrollingElement||jn:O)&&(ue.smooth=!1)}),ae=hn(E.snapTo)?E.snapTo:E.snapTo==="labels"?gM(i):E.snapTo==="labelsDirectional"?_M(i):E.directional!==!1?function(ue,Ne){return Gh(E.snapTo)(ue,Qt()-ie<500?0:Ne.direction)}:xe.utils.snap(E.snapTo),ee=E.duration||{min:.1,max:2},ee=Lr(ee)?Ma(ee.min,ee.max):Ma(ee,ee),he=xe.delayedCall(E.delay||Z/2||.1,function(){var ue=L(),Ne=Qt()-ie<500,Ie=we.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ie&&!ol&&$!==ue){var Oe=(ue-re)/$e,At=i&&!H?i.totalProgress():Oe,S=Ne?0:(At-at)/(Qt()-ga)*1e3||0,N=xe.utils.clamp(-Oe,1-Oe,Rs(S/2)*S/.185),X=Oe+(E.inertia===!1?0:N),D,W,ce=E,Ee=ce.onStart,_e=ce.onInterrupt,De=ce.onComplete;if(D=ae(X,R),va(D)||(D=X),W=Math.round(re+D*$e),ue<=Ae&&ue>=re&&W!==ue){if(Ie&&!Ie._initted&&Ie.data<=Rs(W-ue))return;E.inertia===!1&&(N=D-Oe),we(W,{duration:ee(Rs(Math.max(Rs(X-At),Rs(D-At))*.185/S/.05||0)),ease:E.ease||"power3",data:Rs(W-ue),onInterrupt:function(){return he.restart(!0)&&_e&&_e(R)},onComplete:function(){R.update(),$=L(),i&&(P?P.resetTo("totalProgress",D,i._tTime/i._tDur):i.progress(D)),Ze=at=i&&!H?i.totalProgress():R.progress,y&&y(R),De&&De(R)}},ue,N*$e,W-ue-N*$e),Ee&&Ee(R,we.tween)}}else R.isActive&&$!==ue&&he.restart(!0)}).pause()),l&&(Nh[l]=R),u=R.trigger=an(u||d!==!0&&d),ht=u&&u._gsap&&u._gsap.stRevert,ht&&(ht=ht(R)),d=d===!0?u:an(d),Cn(a)&&(a={targets:u,className:a}),d&&(_===!1||_===kn||(_=!_&&d.parentNode&&d.parentNode.style&&Vn(d.parentNode).display==="flex"?!1:Pt),R.pin=d,be=xe.core.getCache(d),be.spacer?C=be.pinState:(w&&(w=an(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),be.spacerIsNative=!!w,w&&(be.spacerState=Jo(w))),be.spacer=j=w||yt.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),be.pinState=C=Jo(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),R.spacer=j=be.spacer,Ve=Vn(d),Te=Ve[_+T.os2],ne=xe.getProperty(d),Re=xe.quickSetter(d,T.a,Nt),Ch(d,j,Ve),Y=Jo(d)),G){We=Lr(G)?tp(G,np):np,V=Zo("scroller-start",l,O,T,We,0),it=Zo("scroller-end",l,O,T,We,0,V),te=V["offset"+T.op.d2];var un=an(Pi(O,"content")||O);nt=this.markerStart=Zo("start",l,un,T,We,te,0,A),rt=this.markerEnd=Zo("end",l,un,T,We,te,0,A),A&&(tt=xe.quickSetter([nt,rt],T.a,Nt)),!B&&!(Qn.length&&Pi(O,"fixedMarkers")===!0)&&(mM(F?ft:O),xe.set([V,it],{force3D:!0}),Pe=xe.quickSetter(V,T.a,Nt),Me=xe.quickSetter(it,T.a,Nt))}if(A){var ve=A.vars.onUpdate,Se=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),ve&&ve.apply(A,Se||[])})}if(R.previous=function(){return Ye[Ye.indexOf(R)-1]},R.next=function(){return Ye[Ye.indexOf(R)+1]},R.revert=function(ue,Ne){if(!Ne)return R.kill(!0);var Ie=ue!==!1||!R.enabled,Oe=Kt;Ie!==R.isReverted&&(Ie&&(ge=Math.max(L(),R.scroll.rec||0),se=R.progress,Ke=i&&i.progress()),nt&&[nt,rt,V,it].forEach(function(At){return At.style.display=Ie?"none":"block"}),Ie&&(Kt=R,R.update(Ie)),d&&(!M||!R.isActive)&&(Ie?yM(d,j,C):Ch(d,j,Vn(d),pe)),Ie||R.update(Ie),Kt=Oe,R.isReverted=Ie)},R.refresh=function(ue,Ne,Ie,Oe){if(!((Kt||!R.enabled)&&!Ne)){if(d&&ue&&Hn){zt(r,"scrollEnd",Tp);return}!cn&&le&&le(R),Kt=R,we.tween&&!Ie&&(we.tween.kill(),we.tween=0),P&&P.pause(),m&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var At=oe(),S=q(),N=A?A.duration():ci(O,T),X=$e<=.01,D=0,W=Oe||0,ce=Lr(Ie)?Ie.end:n.end,Ee=n.endTrigger||u,_e=Lr(Ie)?Ie.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),De=R.pinnedContainer=n.pinnedContainer&&an(n.pinnedContainer,R),Ue=u&&Math.max(0,Ye.indexOf(R))||0,Ce=Ue,Le,Fe,_t,Gt,dt,He,Be,tr,Tt,vn,yn,Gn,Di;for(G&&Lr(Ie)&&(Gn=xe.getProperty(V,T.p),Di=xe.getProperty(it,T.p));Ce--;)He=Ye[Ce],He.end||He.refresh(0,1)||(Kt=R),Be=He.pin,Be&&(Be===u||Be===d||Be===De)&&!He.isReverted&&(vn||(vn=[]),vn.unshift(He),He.revert(!0,!0)),He!==Ye[Ce]&&(Ue--,Ce--);for(hn(_e)&&(_e=_e(R)),_e=Kd(_e,"start",R),re=ap(_e,u,At,T,L(),nt,V,R,S,Q,B,N,A,R._startClamp&&"_startClamp")||(d?-.001:0),hn(ce)&&(ce=ce(R)),Cn(ce)&&!ce.indexOf("+=")&&(~ce.indexOf(" ")?ce=(Cn(_e)?_e.split(" ")[0]:"")+ce:(D=Qo(ce.substr(2),At),ce=Cn(_e)?_e:(A?xe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,re):re)+D,Ee=u)),ce=Kd(ce,"end",R),Ae=Math.max(re,ap(ce||(Ee?"100% 0":N),Ee,At,T,L()+D,rt,it,R,S,Q,B,N,A,R._endClamp&&"_endClamp"))||-.001,D=0,Ce=Ue;Ce--;)He=Ye[Ce],Be=He.pin,Be&&He.start-He._pinPush<=re&&!A&&He.end>0&&(Le=He.end-(R._startClamp?Math.max(0,He.start):He.start),(Be===u&&He.start-He._pinPush<re||Be===De)&&isNaN(_e)&&(D+=Le*(1-He.progress)),Be===d&&(W+=Le));if(re+=D,Ae+=D,R._startClamp&&(R._startClamp+=D),R._endClamp&&!cn&&(R._endClamp=Ae||-.001,Ae=Math.min(Ae,ci(O,T))),$e=Ae-re||(re-=.01)&&.001,X&&(se=xe.utils.clamp(0,1,xe.utils.normalize(re,Ae,ge))),R._pinPush=W,nt&&D&&(Le={},Le[T.a]="+="+D,De&&(Le[T.p]="-="+L()),xe.set([nt,rt],Le)),d&&!(Uh&&R.end>=ci(O,T)))Le=Vn(d),Gt=T===Ct,_t=L(),de=parseFloat(ne(T.a))+W,!N&&Ae>1&&(yn=(F?yt.scrollingElement||jn:O).style,yn={style:yn,value:yn["overflow"+T.a.toUpperCase()]},F&&Vn(ft)["overflow"+T.a.toUpperCase()]!=="scroll"&&(yn.style["overflow"+T.a.toUpperCase()]="scroll")),Ch(d,j,Le),Y=Jo(d),Fe=Li(d,!0),tr=B&&Ci(O,Gt?$t:Ct)(),_?(pe=[_+T.os2,$e+W+Nt],pe.t=j,Ce=_===Pt?sl(d,T)+$e+W:0,Ce&&(pe.push(T.d,Ce+Nt),j.style.flexBasis!=="auto"&&(j.style.flexBasis=Ce+Nt)),Ds(pe),De&&Ye.forEach(function(Et){Et.pin===De&&Et.vars.pinSpacing!==!1&&(Et._subPinOffset=!0)}),B&&L(ge)):(Ce=sl(d,T),Ce&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=Ce+Nt)),B&&(dt={top:Fe.top+(Gt?_t-re:tr)+Nt,left:Fe.left+(Gt?tr:_t-re)+Nt,boxSizing:"border-box",position:"fixed"},dt[Dr]=dt["max"+Us]=Math.ceil(Fe.width)+Nt,dt[Ur]=dt["max"+Hh]=Math.ceil(Fe.height)+Nt,dt[kn]=dt[kn+Ta]=dt[kn+Sa]=dt[kn+Ea]=dt[kn+ba]="0",dt[Pt]=Le[Pt],dt[Pt+Ta]=Le[Pt+Ta],dt[Pt+Sa]=Le[Pt+Sa],dt[Pt+Ea]=Le[Pt+Ea],dt[Pt+ba]=Le[Pt+ba],b=SM(C,dt,M),cn&&L(0)),i?(Tt=i._initted,Th(1),i.render(i.duration(),!0,!0),J=ne(T.a)-de+$e+W,me=Math.abs($e-J)>1,B&&me&&b.splice(b.length-2,2),i.render(0,!0,!0),Tt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Th(0)):J=$e,yn&&(yn.value?yn.style["overflow"+T.a.toUpperCase()]=yn.value:yn.style.removeProperty("overflow-"+T.a));else if(u&&L()&&!A)for(Fe=u.parentNode;Fe&&Fe!==ft;)Fe._pinOffset&&(re-=Fe._pinOffset,Ae-=Fe._pinOffset),Fe=Fe.parentNode;vn&&vn.forEach(function(Et){return Et.revert(!1,!0)}),R.start=re,R.end=Ae,ye=ke=cn?ge:L(),!A&&!cn&&(ye<ge&&L(ge),R.scroll.rec=0),R.revert(!1,!0),ie=Qt(),he&&($=-1,he.restart(!0)),Kt=0,i&&H&&(i._initted||Ke)&&i.progress()!==Ke&&i.progress(Ke||0,!0).render(i.time(),!0,!0),(X||se!==R.progress||A||m)&&(i&&!H&&i.totalProgress(A&&re<-.001&&!se?xe.utils.normalize(re,Ae,0):se,!0),R.progress=X||(ye-re)/$e===se?0:se),d&&_&&(j._pinOffset=Math.round(R.progress*J)),P&&P.invalidate(),isNaN(Gn)||(Gn-=xe.getProperty(V,T.p),Di-=xe.getProperty(it,T.p),$o(V,T,Gn),$o(nt,T,Gn-(Oe||0)),$o(it,T,Di),$o(rt,T,Di-(Oe||0))),X&&!cn&&R.update(),h&&!cn&&!st&&(st=!0,h(R),st=!1)}},R.getVelocity=function(){return(L()-ke)/(Qt()-ga)*1e3||0},R.endAnimation=function(){ma(R.callbackAnimation),i&&(P?P.progress(1):i.paused()?H||ma(i,R.direction<0,1):ma(i,i.reversed()))},R.labelToScroll=function(ue){return i&&i.labels&&(re||R.refresh()||re)+i.labels[ue]/i.duration()*$e||0},R.getTrailing=function(ue){var Ne=Ye.indexOf(R),Ie=R.direction>0?Ye.slice(0,Ne).reverse():Ye.slice(Ne+1);return(Cn(ue)?Ie.filter(function(Oe){return Oe.vars.preventOverlaps===ue}):Ie).filter(function(Oe){return R.direction>0?Oe.end<=re:Oe.start>=Ae})},R.update=function(ue,Ne,Ie){if(!(A&&!Ie&&!ue)){var Oe=cn===!0?ge:R.scroll(),At=ue?0:(Oe-re)/$e,S=At<0?0:At>1?1:At||0,N=R.progress,X,D,W,ce,Ee,_e,De,Ue;if(Ne&&(ke=ye,ye=A?L():Oe,E&&(at=Ze,Ze=i&&!H?i.totalProgress():S)),g&&d&&!Kt&&!Go&&Hn&&(!S&&re<Oe+(Oe-ke)/(Qt()-ga)*g?S=1e-4:S===1&&Ae>Oe+(Oe-ke)/(Qt()-ga)*g&&(S=.9999)),S!==N&&R.enabled){if(X=R.isActive=!!S&&S<1,D=!!N&&N<1,_e=X!==D,Ee=_e||!!S!=!!N,R.direction=S>N?1:-1,R.progress=S,Ee&&!Kt&&(W=S&&!N?0:S===1?1:N===1?2:3,H&&(ce=!_e&&k[W+1]!=="none"&&k[W+1]||k[W],Ue=i&&(ce==="complete"||ce==="reset"||ce in i))),x&&(_e||Ue)&&(Ue||f||!i)&&(hn(x)?x(R):R.getTrailing(x).forEach(function(_t){return _t.endAnimation()})),H||(P&&!Kt&&!Go?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",S,i._tTime/i._tDur):(P.vars.totalProgress=S,P.invalidate().restart())):i&&i.totalProgress(S,!!(Kt&&(ie||ue)))),d){if(ue&&_&&(j.style[_+T.os2]=Te),!B)Re(xa(de+J*S));else if(Ee){if(De=!ue&&S>N&&Ae+1>Oe&&Oe+1>=ci(O,T),M)if(!ue&&(X||De)){var Ce=Li(d,!0),Le=Oe-re;op(d,ft,Ce.top+(T===Ct?Le:0)+Nt,Ce.left+(T===Ct?0:Le)+Nt)}else op(d,j);Ds(X||De?b:Y),me&&S<1&&X||Re(de+(S===1&&!De?J:0))}}E&&!we.tween&&!Kt&&!Go&&he.restart(!0),a&&(_e||v&&S&&(S<1||!Eh))&&Aa(a.targets).forEach(function(_t){return _t.classList[X||v?"add":"remove"](a.className)}),o&&!H&&!ue&&o(R),Ee&&!Kt?(H&&(Ue&&(ce==="complete"?i.pause().totalProgress(1):ce==="reset"?i.restart(!0).pause():ce==="restart"?i.restart(!0):i[ce]()),o&&o(R)),(_e||!Eh)&&(c&&_e&&Ah(R,c),K[W]&&Ah(R,K[W]),v&&(S===1?R.kill(!1,1):K[W]=0),_e||(W=S===1?1:3,K[W]&&Ah(R,K[W]))),I&&!X&&Math.abs(R.getVelocity())>(va(I)?I:2500)&&(ma(R.callbackAnimation),P?P.progress(1):ma(i,ce==="reverse"?1:!S,1))):H&&o&&!Kt&&o(R)}if(Me){var Fe=A?Oe/A.duration()*(A._caScrollDist||0):Oe;Pe(Fe+(V._isFlipped?1:0)),Me(Fe)}tt&&tt(-Oe/A.duration()*(A._caScrollDist||0))}},R.enable=function(ue,Ne){R.enabled||(R.enabled=!0,zt(O,"resize",ya),F||zt(O,"scroll",Cs),le&&zt(r,"refreshInit",le),ue!==!1&&(R.progress=se=0,ye=ke=$=L()),Ne!==!1&&R.refresh())},R.getTween=function(ue){return ue&&we?we.tween:P},R.setPositions=function(ue,Ne,Ie,Oe){if(A){var At=A.scrollTrigger,S=A.duration(),N=At.end-At.start;ue=At.start+N*ue/S,Ne=At.start+N*Ne/S}R.refresh(!1,!1,{start:Qd(ue,Ie&&!!R._startClamp),end:Qd(Ne,Ie&&!!R._endClamp)},Oe),R.update()},R.adjustPinSpacing=function(ue){if(pe&&ue){var Ne=pe.indexOf(T.d)+1;pe[Ne]=parseFloat(pe[Ne])+ue+Nt,pe[1]=parseFloat(pe[1])+ue+Nt,Ds(pe)}},R.disable=function(ue,Ne){if(R.enabled&&(ue!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ne||P&&P.pause(),ge=0,be&&(be.uncache=1),le&&Bt(r,"refreshInit",le),he&&(he.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!F)){for(var Ie=Ye.length;Ie--;)if(Ye[Ie].scroller===O&&Ye[Ie]!==R)return;Bt(O,"resize",ya),F||Bt(O,"scroll",Cs)}},R.kill=function(ue,Ne){R.disable(ue,Ne),P&&!Ne&&P.kill(),l&&delete Nh[l];var Ie=Ye.indexOf(R);Ie>=0&&Ye.splice(Ie,1),Ie===ln&&el>0&&ln--,Ie=0,Ye.forEach(function(Oe){return Oe.scroller===R.scroller&&(Ie=1)}),Ie||cn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ue&&i.revert({kill:!1}),Ne||i.kill()),nt&&[nt,rt,V,it].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),wa===R&&(wa=0),d&&(be&&(be.uncache=1),Ie=0,Ye.forEach(function(Oe){return Oe.pin===d&&Ie++}),Ie||(be.spacer=0)),n.onKill&&n.onKill(R)},Ye.push(R),R.enable(!1,!1),ht&&ht(R),i&&i.add&&!$e){var ze=R.update;R.update=function(){R.update=ze,re||Ae||R.refresh()},xe.delayedCall(.01,R.update),$e=.01,re=Ae=0}else R.refresh();d&&vM()},r.register=function(n){return Ps||(xe=n||xp(),_p()&&window.document&&r.enable(),Ps=_a),Ps},r.defaults=function(n){if(n)for(var i in n)Yo[i]=n[i];return Yo},r.disable=function(n,i){_a=0,Ye.forEach(function(o){return o[i?"kill":"disable"](n)}),Bt(et,"wheel",Cs),Bt(yt,"scroll",Cs),clearInterval(Ho),Bt(yt,"touchcancel",li),Bt(ft,"touchstart",li),Xo(Bt,yt,"pointerdown,touchstart,mousedown",jd),Xo(Bt,yt,"pointerup,touchend,mouseup",ep),il.kill(),Wo(Bt);for(var s=0;s<qe.length;s+=3)qo(Bt,qe[s],qe[s+1]),qo(Bt,qe[s],qe[s+2])},r.enable=function(){if(et=window,yt=document,jn=yt.documentElement,ft=yt.body,xe&&(Aa=xe.utils.toArray,Ma=xe.utils.clamp,Dh=xe.core.context||li,Th=xe.core.suppressOverwrites||li,Bh=et.history.scrollRestoration||"auto",Oh=et.pageYOffset,xe.core.globals("ScrollTrigger",r),ft)){_a=1,Is=document.createElement("div"),Is.style.height="100vh",Is.style.position="absolute",Ap(),fM(),bt.register(xe),r.isTouch=bt.isTouch,er=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ih=bt.isTouch===1,zt(et,"wheel",Cs),fp=[et,yt,jn,ft],xe.matchMedia?(r.matchMedia=function(l){var c=xe.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},xe.addEventListener("matchMediaInit",function(){return Wh()}),xe.addEventListener("matchMediaRevert",function(){return Ep()}),xe.addEventListener("matchMedia",function(){Ir(0,1),Br("matchMedia")}),xe.matchMedia("(orientation: portrait)",function(){return Rh(),Rh})):console.warn("Requires GSAP 3.11.0 or later"),Rh(),zt(yt,"scroll",Cs);var n=ft.style,i=n.borderTopStyle,s=xe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Li(ft),Ct.m=Math.round(o.top+Ct.sc())||0,$t.m=Math.round(o.left+$t.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ho=setInterval(ip,250),xe.delayedCall(.5,function(){return Go=0}),zt(yt,"touchcancel",li),zt(ft,"touchstart",li),Xo(zt,yt,"pointerdown,touchstart,mousedown",jd),Xo(zt,yt,"pointerup,touchend,mouseup",ep),Lh=xe.utils.checkPrefix("transform"),tl.push(Lh),Ps=Qt(),il=xe.delayedCall(.2,Ir).pause(),Ls=[yt,"visibilitychange",function(){var l=et.innerWidth,c=et.innerHeight;yt.hidden?(Jd=l,$d=c):(Jd!==l||$d!==c)&&ya()},yt,"DOMContentLoaded",Ir,et,"load",Ir,et,"resize",ya],Wo(zt),Ye.forEach(function(l){return l.enable(0,1)}),a=0;a<qe.length;a+=3)qo(Bt,qe[a],qe[a+1]),qo(Bt,qe[a],qe[a+2])}},r.config=function(n){"limitCallbacks"in n&&(Eh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ho)||(Ho=i)&&setInterval(ip,i),"ignoreMobileResize"in n&&(Ih=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Wo(Bt)||Wo(zt,n.autoRefreshEvents||"none"),pp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=an(n),o=qe.indexOf(s),a=Or(s);~o&&qe.splice(o,a?6:2),i&&(a?Qn.unshift(et,i,ft,i,jn,i):Qn.unshift(s,i))},r.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Cn(n)?an(n):n).getBoundingClientRect(),a=o[s?Dr:Ur]*i||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},r.positionInViewport=function(n,i,s){Cn(n)&&(n=an(n));var o=n.getBoundingClientRect(),a=o[s?Dr:Ur],l=i==null?a/2:i in al?al[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},r.killAll=function(n){if(Ye.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fr.killAll||[];Fr={},i.forEach(function(s){return s()})}},r})();Je.version="3.12.5";Je.saveStyles=function(r){return r?Aa(r).forEach(function(e){if(e&&e.style){var t=Rn.indexOf(e);t>=0&&Rn.splice(t,5),Rn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Dh())}}):Rn};Je.revert=function(r,e){return Wh(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ya():(Ps||Je.register())&&Ir(!0)};Je.update=function(r){return++qe.cache&&Ii(r===!0?2:0)};Je.clearScrollMemory=wp;Je.maxScroll=function(r,e){return ci(r,e?$t:Ct)};Je.getScrollFunc=function(r,e){return Ci(an(r),e?$t:Ct)};Je.getById=function(r){return Nh[r]};Je.getAll=function(){return Ye.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Hn};Je.snapDirectional=Gh;Je.addEventListener=function(r,e){var t=Fr[r]||(Fr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=Fr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],u=[],d=xe.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),u.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&hn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return hn(s)&&(s=s(),zt(Je,"refresh",function(){return s=e.batchMax()})),Aa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var cp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ph=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===jn&&r(ft,t)},Ko={auto:1,scroll:1},TM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||xe.core.getCache(s),a=Qt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ko[(l=Vn(s)).overflowY]||Ko[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Or(s)&&(Ko[(l=Vn(s)).overflowY]||Ko[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Cp=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&TM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&zt(yt,bt.eventTypes[0],up,!1,!0)},onDisable:function(){return Bt(yt,bt.eventTypes[0],up,!0)}})},EM=/(input|label|select|textarea)/i,hp,up=function(e){var t=EM.test(e.target.tagName);(t||hp)&&(e._gsapAllow=!0,hp=t)},wM=function(e){Lr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=an(e.target)||jn,h=xe.core.globals().ScrollSmoother,f=h&&h.get(),u=er&&(e.content&&an(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Ci(c,Ct),_=Ci(c,$t),m=1,g=(bt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,y=hn(i)?function(){return i(a)}:function(){return i||2.8},v,E,M=Cp(c,e.type,!0,s),w=function(){return E=!1},A=li,I=li,x=function(){l=ci(c,Ct),I=Ma(er?1:0,l),n&&(A=Ma(0,ci(c,$t))),v=Nr},T=function(){u._gsap.y=xa(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},H=function(){if(E){requestAnimationFrame(w);var G=xa(a.deltaY/2),Q=I(d.v-G);if(u&&Q!==d.v+d.offset){d.offset=Q-d.v;var R=xa((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",d.cacheID=qe.cache,Ii()}return!0}d.offset&&T(),E=!0},O,U,F,B,K=function(){x(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return u&&xe.set(u,{y:"+=0"}),e.ignoreCheck=function(k){return er&&k.type==="touchmove"&&H(k)||m>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){E=!1;var k=m;m=xa((et.visualViewport&&et.visualViewport.scale||1)/g),O.pause(),k!==m&&Ph(c,m>1.01?!0:n?!1:"x"),U=_(),F=d(),x(),v=Nr},e.onRelease=e.onGestureStart=function(k,G){if(d.offset&&T(),!G)B.restart(!0);else{qe.cache++;var Q=y(),R,le;n&&(R=_(),le=R+Q*.05*-k.velocityX/.227,Q*=cp(_,R,le,ci(c,$t)),O.vars.scrollX=A(le)),R=d(),le=R+Q*.05*-k.velocityY/.227,Q*=cp(d,R,le,ci(c,Ct)),O.vars.scrollY=I(le),O.invalidate().duration(Q).play(.01),(er&&O.vars.scrollY>=l||R>=l-1)&&xe.to({},{onUpdate:K,duration:Q})}o&&o(k)},e.onWheel=function(){O._ts&&O.pause(),Qt()-p>1e3&&(v=0,p=Qt())},e.onChange=function(k,G,Q,R,le){if(Nr!==v&&x(),G&&n&&_(A(R[2]===G?U+(k.startX-k.x):_()+G-R[1])),Q){d.offset&&T();var oe=le[2]===Q,q=oe?F+k.startY-k.y:d()+Q-le[1],$=I(q);oe&&q!==$&&(F+=$-q),d($)}(Q||G)&&Ii()},e.onEnable=function(){Ph(c,n?!1:"x"),Je.addEventListener("refresh",K),zt(et,"resize",K),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){Ph(c,!0),Bt(et,"resize",K),Je.removeEventListener("refresh",K),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new bt(e),a.iOS=er,er&&!d()&&d(1),er&&xe.ticker.add(li),B=a._dc,O=xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rp(d,d(),function(){return O.pause()})},onUpdate:Ii,onComplete:B.vars.onComplete}),a};Je.sort=function(r){return Ye.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new bt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return on;if(r===!0&&on)return on.enable();if(r===!1){on&&on.kill(),on=r;return}var e=r instanceof bt?r:wM(r);return on&&on.target===e.target&&on.kill(),Or(e.target)&&(on=e),e};Je.core={_getVelocityProp:Vo,_inputObserver:Cp,_scrollers:qe,_proxies:Qn,bridge:{ss:function(){Hn||Br("scrollStart"),Hn=Qt()},ref:function(){return Kt}}};xp()&&xe.registerPlugin(Je);Oo.registerPlugin(Je);var qh=[{title:"E-Commerce Redesign",colors:["#6c5ce7","#a29bfe"]},{title:"Travel App UI",colors:["#00b894","#55efc4"]},{title:"Finance Dashboard",colors:["#0984e3","#74b9ff"]},{title:"Music Streaming",colors:["#e17055","#fab1a0"]},{title:"Social Platform",colors:["#fdcb6e","#ffeaa7"]},{title:"Fitness Tracker",colors:["#e84393","#fd79a8"]},{title:"Chat Application",colors:["#00cec9","#81ecec"]},{title:"Portfolio Site",colors:["#636e72","#b2bec3"]}],cl=qh.length,AM=3.2,RM=2,Pp=6,Xh=document.getElementById("ring-canvas"),ll=document.getElementById("project-label"),Yh=new Js({canvas:Xh,antialias:!0,alpha:!0});Yh.setPixelRatio(Math.min(window.devicePixelRatio,2));var ul=new uo,Ca=new qt(50,1,.1,100);Ca.position.set(0,1.5,12);Ca.lookAt(0,0,0);ul.add(new go(8952491,1.2));var Ip=new mo(6619098,15,30);Ip.position.set(0,4,10);ul.add(Ip);function CM(r,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d"),s=i.createLinearGradient(0,0,e,t);s.addColorStop(0,r.colors[0]),s.addColorStop(1,r.colors[1]),i.fillStyle=s,i.fillRect(0,0,e,t),i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(0,0,e,t*.07);let o=t*.035;return[.03,.06,.09].forEach(a=>{i.beginPath(),i.arc(e*a,o,t*.012,0,Math.PI*2),i.fillStyle="rgba(255,255,255,0.5)",i.fill()}),i.fillStyle="rgba(255,255,255,0.9)",i.font=`bold ${t*.08}px sans-serif`,i.textAlign="center",i.fillText(r.title,e/2,t*.5),i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(e*.1,t*.6,e*.35,t*.08),i.fillRect(e*.55,t*.6,e*.35,t*.08),i.fillRect(e*.1,t*.72,e*.8,t*.05),i.fillRect(e*.1,t*.8,e*.6,t*.05),new fo(n)}var hl=new zi;ul.add(hl);qh.forEach((r,e)=>{let t=e/cl*Math.PI*2,n=CM(r,640,400),i=new fs({map:n}),s=new Zs(AM,RM),o=new In(s,i);o.position.set(Math.sin(t)*Pp,0,Math.cos(t)*Pp),o.lookAt(0,0,0),o.rotation.x+=.08,hl.add(o)});var Lp={y:0};Oo.to(Lp,{y:Math.PI*2,ease:"none",scrollTrigger:{trigger:"#ring-section",start:"top top",end:"bottom bottom",scrub:1,onUpdate(r){hl.rotation.y=Lp.y;let e=-hl.rotation.y,t=Math.round(e/(Math.PI*2)*cl)%cl;t<0&&(t+=cl),ll.textContent=qh[t].title,ll.style.opacity=r.isActive?"1":"0"},onLeave(){ll.style.opacity="0"},onLeaveBack(){ll.style.opacity="0"}}});function Dp(){let r=Xh.clientWidth,e=Xh.clientHeight;Yh.setSize(r,e,!1),Ca.aspect=r/e,Ca.updateProjectionMatrix()}window.addEventListener("resize",Dp);Dp();(function r(){requestAnimationFrame(r),Yh.render(ul,Ca)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
