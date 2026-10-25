// Earth moving window code:
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./getStarfield.js";

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
const earthGroup = new THREE.Group();
earthGroup.rotation.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const earthTexture = loader.load("Images/8k_earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
});

const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

// How many stars are added is the number.
const stars = getStarfield({numStars: 2000});
scene.add(stars);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.0);
scene.add(hemiLight);

let isSpinning = true;

// Make earth rotate at a constant speed.
function animate() {
  requestAnimationFrame(animate);

  if (isSpinning) {
    earthMesh.rotation.x += 0.002;
    earthMesh.rotation.y += 0.002;
  }
  renderer.render(scene, camera);
}

animate();

// To make the animation stop and start when the spacebar is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === ' ' || event.code === 'Space') {
    event.preventDefault();
    isSpinning = !isSpinning;
  }
});


