import * as THREE from 'three';

export function createShelf() {
  const shelf = new THREE.Group();

  const wood = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 });

  const panelWidth = 0.1;
  const panelHeight = 1.6;
  const panelDepth = 1.2;
  const boardWidth = 1.2;
  const shelfThickness = 0.06;

  const leftPanel = new THREE.Mesh(
    new THREE.BoxGeometry(panelWidth, panelHeight, panelDepth),
    wood
  );
  leftPanel.position.set(-boardWidth / 2, panelHeight / 2, 0);
  leftPanel.castShadow = true;
  leftPanel.receiveShadow = true;
  shelf.add(leftPanel);

  const rightPanel = new THREE.Mesh(
    new THREE.BoxGeometry(panelWidth, panelHeight, panelDepth),
    wood
  );
  rightPanel.position.set(boardWidth / 2, panelHeight / 2, 0);
  rightPanel.castShadow = true;
  rightPanel.receiveShadow = true;
  shelf.add(rightPanel);

  const shelfYs = [0.05, 0.55, 1.05, 1.55];
  shelfYs.forEach((y) => {
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(boardWidth, shelfThickness, panelDepth),
      wood
    );
    board.position.set(0, y, 0);
    board.castShadow = true;
    board.receiveShadow = true;
    shelf.add(board);
  });

  const backPanel = new THREE.Mesh(
    new THREE.BoxGeometry(boardWidth, panelHeight, 0.04),
    wood
  );
  backPanel.position.set(0, panelHeight / 2, -panelDepth / 2);
  backPanel.castShadow = true;
  shelf.add(backPanel);

  const bookColors = [0xc0392b, 0x2980b9, 0x27ae60, 0xf39c12, 0x8e44ad];
  for (let i = 0; i < 5; i++) {
    const bookMat = new THREE.MeshStandardMaterial({ color: bookColors[i] });
    const book = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.35, 0.25), bookMat);
    book.position.set(-0.35 + i * 0.11, 0.75, 0);
    book.castShadow = true;
    shelf.add(book);
  }

  return shelf;
}