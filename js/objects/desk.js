import * as THREE from 'three';

export function createDesk() {
  const desk = new THREE.Group();

  const wood = new THREE.MeshStandardMaterial({ color: 0xa06a3a, roughness: 0.7 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4, metalness: 0.6 });

  const top = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 1.4), wood);
  top.position.y = 0.78;
  top.castShadow = true;
  top.receiveShadow = true;
  desk.add(top);

  const legGeo = new THREE.BoxGeometry(0.08, 0.78, 0.08);
  const offsets = [
    [-1.4, 0.39, -0.6],
    [1.4, 0.39, -0.6],
    [-1.4, 0.39, 0.6],
    [1.4, 0.39, 0.6]
  ];

  offsets.forEach(([x, y, z]) => {
    const leg = new THREE.Mesh(legGeo, metal);
    leg.position.set(x, y, z);
    leg.castShadow = true;
    desk.add(leg);
  });

  return desk;
}