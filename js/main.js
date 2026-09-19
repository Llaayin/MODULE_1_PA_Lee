import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createRoom } from './setup/room.js';
import { setupLights } from './setup/lights.js';
import { createBed } from './objects/bed.js';
import { createDesk } from './objects/desk.js';
import { createChair } from './objects/chair.js';
import { createMonitor } from './objects/monitor.js';
import { createLamp } from './objects/lamp.js';
import { createShelf } from './objects/shelf.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(4, 3.2, 6.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2.05;
controls.minDistance = 2;
controls.maxDistance = 15;

scene.add(createRoom());
setupLights(scene);

const bed = createBed();
bed.position.set(-3.4, 0, -3.4);
scene.add(bed);

const desk = createDesk();
desk.position.set(2.4, 0, -2);
scene.add(desk);

const chair = createChair();
chair.position.set(2.4, 0, -0.6);
chair.rotation.y = Math.PI;
scene.add(chair);

const monitor = createMonitor();
monitor.position.set(2.4, 0.78, -2);
scene.add(monitor);

const lamp = createLamp();
lamp.position.set(1.5, 0.78, -2.6);
scene.add(lamp);

const shelf = createShelf();
shelf.position.set(1, 0, -4.3);
shelf.rotation.y = 0;
scene.add(shelf);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});