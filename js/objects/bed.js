import * as THREE from 'three';

export function createBed() {
  const bed = new THREE.Group();

  const wood = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 });
  const sheet = new THREE.MeshStandardMaterial({ color: 0x8F3F3F, roughness: 0.9 });
  const blanket = new THREE.MeshStandardMaterial({ color: 0xA54A4A, roughness: 0.9 });
  const pillowMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });

  const frame = new THREE.Mesh(new THREE.BoxGeometry(2, 0.4, 3), wood);
  frame.position.y = 0.2;
  frame.castShadow = true;
  frame.receiveShadow = true;
  bed.add(frame);

  const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.3, 2.9), sheet);
  mattress.position.y = 0.55;
  mattress.castShadow = true;
  bed.add(mattress);

  const cover = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.08, 1.6), blanket);
  cover.position.set(0, 0.74, 0.65);
  cover.castShadow = true;
  bed.add(cover);

  const pillow = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.5), pillowMat);
  pillow.position.set(0, 0.78, -1.15);
  pillow.castShadow = true;
  bed.add(pillow);

  const headboard = new THREE.Mesh(new THREE.BoxGeometry(2, 1.2, 0.15), wood);
  headboard.position.set(0, 0.8, -1.5);
  headboard.castShadow = true;
  bed.add(headboard);

  return bed;
}