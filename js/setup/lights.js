import * as THREE from 'three';

export function setupLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xfff2cc, 1.2);
  sun.position.set(10, 12, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -8;
  sun.shadow.camera.right = 8;
  sun.shadow.camera.top = 8;
  sun.shadow.camera.bottom = -8;
  scene.add(sun);

  const fill = new THREE.PointLight(0x88aaff, 0.3, 20);
  fill.position.set(-3, 1.6, 3);
  scene.add(fill);
}