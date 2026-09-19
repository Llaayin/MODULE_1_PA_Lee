import * as THREE from 'three';

export function createLamp() {
  const lamp = new THREE.Group();

  const baseMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.4 });
  const shadeMat = new THREE.MeshStandardMaterial({
    color: 0xffd166,
    emissive: 0xffb703,
    emissiveIntensity: 0.4,
    roughness: 0.6
  });

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.05, 16), baseMat);
  base.position.y = 0.026;
  lamp.add(base);

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8), baseMat);
  pole.position.y = 0.3;
  lamp.add(pole);

  const shade = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.22, 16, 1, true), shadeMat);
  shade.position.y = 0.62;
  shade.castShadow = true;
  lamp.add(shade);

  const bulb = new THREE.PointLight(0xffd166, 0.8, 4);
  bulb.position.y = 0.58;
  lamp.add(bulb);

  return lamp;
}