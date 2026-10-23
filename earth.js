// Earth moving window code:
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

// Setting up the scene and camera.
const w = 560;
const h = 400;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera (75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.querySelector("#earthContent").appendChild(renderer.domElement);

// Creating the earth shape and texture.
new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const earthTexture = loader.load("Images/2k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
});

const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.0);
scene.add(hemiLight);

// Make earth rotate at a constant speed.
function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.002;
  earthMesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();