import * as THREE from 'three';

export function createChair() {
  const chair = new THREE.Group();

  const cushion = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.9 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.4 });

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.6), cushion);
  seat.position.y = 0.5;
  seat.castShadow = true;
  chair.add(seat);

  const back = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.7, 0.1), cushion);
  back.position.set(0, 0.9, -0.25);
  back.castShadow = true;
  chair.add(back);

  const legGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8);
  const positions = [
    [-0.25, 0.25, -0.25],
    [0.25, 0.25, -0.25],
    [-0.25, 0.25, 0.25],
    [0.25, 0.25, 0.25]
  ];

  positions.forEach(([x, y, z]) => {
    const leg = new THREE.Mesh(legGeo, metal);
    leg.position.set(x, y, z);
    leg.castShadow = true;
    chair.add(leg);
  });

  return chair;
}