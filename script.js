// scene var
const scene = new THREE.Scene();

// gemoetry
const gemoetry = new THREE.BoxGeometry(1, 1, 1);

// material
const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(gemoetry, material);

scene.add(mesh);

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(65, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
