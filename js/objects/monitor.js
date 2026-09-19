import * as THREE from 'three';

export function createMonitor() {
  const monitor = new THREE.Group();

  const black = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
  const screen = new THREE.MeshStandardMaterial({
    color: 0x2a6fdb,
    emissive: 0x1a4a99,
    emissiveIntensity: 0.6,
    roughness: 0.3
  });

  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.3, 0.15), black);
  stand.position.y = 0.15;
  monitor.add(stand);

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.3), black);
  base.position.y = 0.015;
  monitor.add(base);

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.7, 0.05), black);
  bezel.position.y = 0.65;
  bezel.castShadow = true;
  monitor.add(bezel);

  const screenFace = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.6, 0.01), screen);
  screenFace.position.set(0, 0.65, 0.031);
  monitor.add(screenFace);

  return monitor;
}