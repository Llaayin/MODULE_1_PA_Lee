import * as THREE from 'three';

export function createRoom() {
  const room = new THREE.Group();

  const floorMat = new THREE.MeshStandardMaterial({ color: 0x8b6f47 });
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe8dcc0 });
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5 });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 10), floorMat);
  floor.position.y = -0.1;
  floor.receiveShadow = true;
  room.add(floor);

  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(10, 0.2, 10), ceilMat);
  ceiling.position.y = 3.1;
  room.add(ceiling);

  const backWall = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 0.2), wallMat);
  backWall.position.set(0, 1.5, -5);
  backWall.receiveShadow = true;
  room.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3, 10), wallMat);
  leftWall.position.set(-5, 1.5, 0);
  leftWall.receiveShadow = true;
  room.add(leftWall);

  const rwTop = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 10), wallMat);
  rwTop.position.set(5, 2.7, 0);
  room.add(rwTop);

  const rwBottom = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 10), wallMat);
  rwBottom.position.set(5, 0.4, 0);
  room.add(rwBottom);

  const rwFront = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 1.5), wallMat);
  rwFront.position.set(5, 1.6, 4.25);
  room.add(rwFront);

  const rwBack = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.6, 1.5), wallMat);
  rwBack.position.set(5, 1.6, -4.25);
  room.add(rwBack);

  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 1.6, 6.5),
    new THREE.MeshStandardMaterial({
      color: 0x88ccee,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1
    })
  );
  glass.position.set(5, 1.6, 0);
  room.add(glass);

  const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

  const frameV = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.7, 0.1), frameMat);
  frameV.position.set(5, 1.6, 0);
  room.add(frameV);

  const frameH = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 6.6), frameMat);
  frameH.position.set(5, 1.6, 0);
  room.add(frameH);

  return room;
}