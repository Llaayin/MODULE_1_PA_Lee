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

  const wallThickness = 0.2;
  const wallHeight = 3;
  const wallLength = 10;
  const wallX = 5;

  const windowWidth = 6;
  const windowHeight = 1.6;
  const windowCenterY = 1.6;

  const sidePanelWidth = (wallLength - windowWidth) / 2;
  const topPanelHeight = wallHeight - windowCenterY - windowHeight / 2;
  const bottomPanelHeight = windowCenterY - windowHeight / 2;

  const frontPanel = new THREE.Mesh(
    new THREE.BoxGeometry(wallThickness, wallHeight, sidePanelWidth),
    wallMat
  );
  frontPanel.position.set(wallX, wallHeight / 2, wallLength / 2 - sidePanelWidth / 2);
  frontPanel.receiveShadow = true;
  room.add(frontPanel);

  const backPanel = new THREE.Mesh(
    new THREE.BoxGeometry(wallThickness, wallHeight, sidePanelWidth),
    wallMat
  );
  backPanel.position.set(wallX, wallHeight / 2, -wallLength / 2 + sidePanelWidth / 2);
  backPanel.receiveShadow = true;
  room.add(backPanel);

  const topPanel = new THREE.Mesh(
    new THREE.BoxGeometry(wallThickness, topPanelHeight, windowWidth),
    wallMat
  );
  topPanel.position.set(wallX, windowCenterY + windowHeight / 2 + topPanelHeight / 2, 0);
  topPanel.receiveShadow = true;
  room.add(topPanel);

  const bottomPanel = new THREE.Mesh(
    new THREE.BoxGeometry(wallThickness, bottomPanelHeight, windowWidth),
    wallMat
  );
  bottomPanel.position.set(wallX, bottomPanelHeight / 2, 0);
  bottomPanel.receiveShadow = true;
  room.add(bottomPanel);

  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, windowHeight, windowWidth),
    new THREE.MeshStandardMaterial({
      color: 0x88ccee,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1
    })
  );
  glass.position.set(wallX, windowCenterY, 0);
  room.add(glass);

  const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

  const frameV = new THREE.Mesh(new THREE.BoxGeometry(0.1, windowHeight + 0.1, 0.1), frameMat);
  frameV.position.set(wallX, windowCenterY, 0);
  room.add(frameV);

  const frameH = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, windowWidth + 0.1), frameMat);
  frameH.position.set(wallX, windowCenterY, 0);
  room.add(frameH);

  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, windowWidth + 0.1), frameMat);
  frameTop.position.set(wallX, windowCenterY + windowHeight / 2, 0);
  room.add(frameTop);

  const frameBottom = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, windowWidth + 0.1), frameMat);
  frameBottom.position.set(wallX, windowCenterY - windowHeight / 2, 0);
  room.add(frameBottom);

  return room;
}