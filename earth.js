// Earth moving window code:
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

// Setting up the scene and camera.
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera (75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Creating the earth shape and texture.
new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("./textures/00_earthmap4k.jpg"),
});

const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.0);
scene.add(hemiLight);

// Make earth rotate at a constant speed.
function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.0
  earthMesh.rotation.y += 0.0
  renderer.render(scene, camera);
}

animate();