import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as lil from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

let loader = new THREE.TextureLoader();
let stars = loader.load('/stars.jpg');
scene.background = stars;

let ambient = new THREE.AmbientLight(0xffffff, 3)
scene.add(ambient)

// Add lil-gui controls for each planet
const gui = new lil.GUI();

// Animation controls
const animationFolder = gui.addFolder('Animation');
animationFolder.add({ start: startAnimation }, 'start').name('Start Animation');
animationFolder.add({ stop: stopAnimation }, 'stop').name('Stop Animation');

// Sun using SphereGeometry
let sunLoader = loader.load('/sun.jpg')
const sun_geometry = new THREE.SphereGeometry(1.3, 30, 27);
const sun_material = new THREE.MeshStandardMaterial({ map: sunLoader });
const sun = new THREE.Mesh(sun_geometry, sun_material);
scene.add(sun);

const sunSettings = {
  sunRotationSpeed: .001
};

// Sun controls
const sunFolder = gui.addFolder('Sun');
sunFolder.add(sunSettings, 'sunRotationSpeed', 0, 0.05).name('Rotation Speed');
sunFolder.add(sun.material, 'wireframe').name('Wireframe');
sunFolder.open();

// Mercury Elliptical Path using RingGeometry
const mercury_elliptical_path = new THREE.RingGeometry(2.595, 2.6, 200);
const mercury_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const mercury_ring = new THREE.Mesh(mercury_elliptical_path, mercury_elliptical_path_material);
mercury_ring.rotation.x = Math.PI / 2;
scene.add(mercury_ring);

// Mercury using SphereGeometry
let mercuryLoader = loader.load('/mercury.jpg')
const mercury_geometry = new THREE.SphereGeometry(.31, 25, 23);
const mercury_material = new THREE.MeshStandardMaterial({ map: mercuryLoader });
const mercury = new THREE.Mesh(mercury_geometry, mercury_material);
scene.add(mercury);

const mercurySettings = {
  mercuryRotationSpeed: .001
};

// Mercury controls
const mercuryFolder = gui.addFolder('Mercury');
mercuryFolder.add(mercurySettings, 'mercuryRotationSpeed', 0, 0.05).name('Rotation Speed');
mercuryFolder.add(mercury.material, 'wireframe').name('Wireframe');
mercuryFolder.open();

// Venus Elliptical Path using RingGeometry
const venus_elliptical_path = new THREE.RingGeometry(3.595, 3.6, 200);
const venus_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const venus_ring = new THREE.Mesh(venus_elliptical_path, venus_elliptical_path_material);
venus_ring.rotation.x = Math.PI / 2;
scene.add(venus_ring);

// Venus using SphereGeometry
let venusLoader = loader.load('/venus.jpg')
const venus_geometry = new THREE.SphereGeometry(.31, 25, 23);
const venus_material = new THREE.MeshStandardMaterial({ map: venusLoader });
const venus = new THREE.Mesh(venus_geometry, venus_material);
scene.add(venus);

const venusSettings = {
  venusRotationSpeed: .001
};

// Venus controls
const venusFolder = gui.addFolder('Venus');
venusFolder.add(venusSettings, 'venusRotationSpeed', 0, 0.05).name('Rotation Speed');
venusFolder.add(venus.material, 'wireframe').name('Wireframe');
venusFolder.open();

// Earth Elliptical Path using RingGeometry
const earth_elliptical_path = new THREE.RingGeometry(4.595, 4.6, 200);
const earth_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const earth_ring = new THREE.Mesh(earth_elliptical_path, earth_elliptical_path_material);
earth_ring.rotation.x = Math.PI / 2;
scene.add(earth_ring);

// Earth using SphereGeometry
let earthLoader = loader.load('/earth.jpg')
const earth_geometry = new THREE.SphereGeometry(.31, 25, 23);
const earth_material = new THREE.MeshStandardMaterial({ map: earthLoader });
const earth = new THREE.Mesh(earth_geometry, earth_material);
earth.position.x = 4.6; // Position Earth at a distance from the Sun
scene.add(earth);

const earthSettings = {
  earthRotationSpeed: .001
};

// Earth controls
const earthFolder = gui.addFolder('Earth');
earthFolder.add(earthSettings, 'earthRotationSpeed', 0, 0.05).name('Rotation Speed');
earthFolder.add(earth.material, 'wireframe').name('Wireframe');
earthFolder.open();

// Mars Elliptical Path using RingGeometry
const mars_elliptical_path = new THREE.RingGeometry(5.595, 5.6, 200);
const mars_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const mars_ring = new THREE.Mesh(mars_elliptical_path, mars_elliptical_path_material);
mars_ring.rotation.x = Math.PI / 2;
scene.add(mars_ring);

// Mars using SphereGeometry
let marsLoader = loader.load('/mars.jpg')
const mars_geometry = new THREE.SphereGeometry(.31, 25, 23);
const mars_material = new THREE.MeshStandardMaterial({ map: marsLoader });
const mars = new THREE.Mesh(mars_geometry, mars_material);
mars.position.x = 5.6; // Position Mars at a distance from the Sun
scene.add(mars);

const marsSettings = {
  marsRotationSpeed: .001
};

// Mars controls
const marsFolder = gui.addFolder('Mars');
marsFolder.add(marsSettings, 'marsRotationSpeed', 0, 0.05).name('Rotation Speed');
marsFolder.add(mars.material, 'wireframe').name('Wireframe');
marsFolder.open();

// Jupiter Elliptical Path using RingGeometry
const jupiter_elliptical_path = new THREE.RingGeometry(7.595, 7.6, 200);
const jupiter_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const jupiter_ring = new THREE.Mesh(jupiter_elliptical_path, jupiter_elliptical_path_material);
jupiter_ring.rotation.x = Math.PI / 2;
scene.add(jupiter_ring);

// Jupiter using SphereGeometry
let jupiterLoader = loader.load('/jupiter.jpg')
const jupiter_geometry = new THREE.SphereGeometry(.31, 25, 23);
const jupiter_material = new THREE.MeshStandardMaterial({ map: jupiterLoader });
const jupiter = new THREE.Mesh(jupiter_geometry, jupiter_material);
jupiter.position.x = 6.6; // Position Jupiter at a distance from the Sun
scene.add(jupiter);

const jupiterSettings = {
  jupiterRotationSpeed: .001
};

// Jupiter controls
const jupiterFolder = gui.addFolder('Jupiter');
jupiterFolder.add(jupiterSettings, 'jupiterRotationSpeed', 0, 0.05).name('Rotation Speed');
jupiterFolder.add(jupiter.material, 'wireframe').name('Wireframe');
jupiterFolder.open();

// Saturn Elliptical Path using RingGeometry
const saturn_elliptical_path = new THREE.RingGeometry(9.595, 9.6, 200);
const saturn_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const saturn_ring = new THREE.Mesh(saturn_elliptical_path, saturn_elliptical_path_material);
saturn_ring.rotation.x = Math.PI / 2;
scene.add(saturn_ring);

// Saturn using SphereGeometry
let saturnLoader = loader.load('/saturn.jpg')
const saturn_geometry = new THREE.SphereGeometry(.31, 25, 23);
const saturn_material = new THREE.MeshStandardMaterial({ map: saturnLoader });
const saturn = new THREE.Mesh(saturn_geometry, saturn_material);
saturn.position.x = 7.6; // Position Saturn at a distance from the Sun
scene.add(saturn);

// Saturn Rings using RingGeometry
const saturn_rings_texture = loader.load('./public/saturn_rings.png');
const saturn_rings_geometry = new THREE.RingGeometry(1.2, 1.5, 64);
const saturn_rings_material = new THREE.MeshStandardMaterial({ map: saturn_rings_texture, side: THREE.DoubleSide });
const saturn_rings = new THREE.Mesh(saturn_rings_geometry, saturn_rings_material);
saturn_rings.position.x = 7.6; // Position Saturn Rings at the same distance as Saturn
scene.add(saturn_rings);

const saturnSettings = {
  saturnRotationSpeed: .001
};

// Saturn controls
const saturnFolder = gui.addFolder('Saturn');
saturnFolder.add(saturnSettings, 'saturnRotationSpeed', 0, 0.05).name('Rotation Speed');
saturnFolder.add(saturn.material, 'wireframe').name('Wireframe');
saturnFolder.open();

// Uranus Elliptical Path using RingGeometry
const uranus_elliptical_path = new THREE.RingGeometry(10.595, 10.6, 200);
const uranus_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const uranus_ring = new THREE.Mesh(uranus_elliptical_path, uranus_elliptical_path_material);
uranus_ring.rotation.x = Math.PI / 2;
scene.add(uranus_ring);

// Uranus using SphereGeometry
let uranusLoader = loader.load('/uranus.jpg')
const uranus_geometry = new THREE.SphereGeometry(.31, 25, 23);
const uranus_material = new THREE.MeshStandardMaterial({ map: uranusLoader });
const uranus = new THREE.Mesh(uranus_geometry, uranus_material);
uranus.position.x = 8.6; // Position Uranus at a distance from the Sun
scene.add(uranus);

const uranusSettings = {
  uranusRotationSpeed: .001
};

// Uranus controls
const uranusFolder = gui.addFolder('Uranus');
uranusFolder.add(uranusSettings, 'uranusRotationSpeed', 0, 0.05).name('Rotation Speed');
uranusFolder.add(uranus.material, 'wireframe').name('Wireframe');
uranusFolder.open();

// Neptune Elliptical Path using RingGeometry
const neptune_elliptical_path = new THREE.RingGeometry(11.595, 11.6, 200);
const neptune_elliptical_path_material = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const neptune_ring = new THREE.Mesh(neptune_elliptical_path, neptune_elliptical_path_material);
neptune_ring.rotation.x = Math.PI / 2;
scene.add(neptune_ring);

// Neptune using SphereGeometry
let neptuneLoader = loader.load('/neptune.jpg')
const neptune_geometry = new THREE.SphereGeometry(.31, 25, 23);
const neptune_material = new THREE.MeshStandardMaterial({ map: neptuneLoader });
const neptune = new THREE.Mesh(neptune_geometry, neptune_material);
neptune.position.x = 9.6; // Position Neptune at a distance from the Sun
scene.add(neptune);

const neptuneSettings = {
  neptuneRotationSpeed: .001
};

// Neptune controls
const neptuneFolder = gui.addFolder('Neptune');
neptuneFolder.add(neptuneSettings, 'neptuneRotationSpeed', 0, 0.05).name('Rotation Speed');
neptuneFolder.add(neptune.material, 'wireframe').name('Wireframe');
neptuneFolder.open();



window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix();
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true

let clock = new THREE.Clock()

let animationId;

function animate() {
  animationId = window.requestAnimationFrame(animate)
  renderer.render(scene, camera);

  // Sun rotation animation
  sun.rotation.y += sunSettings.sunRotationSpeed; // Adjust rotation speed as needed

  // Mercury orbit and rotation animation
  const mercuryOrbitRadius = 2.6;
  const mercurySpeed = 0.09; // Adjust for orbit speed
  const elapsed = clock.getElapsedTime();
  mercury.position.x = Math.cos(elapsed * mercurySpeed) * mercuryOrbitRadius;
  mercury.position.z = Math.sin(elapsed * mercurySpeed) * mercuryOrbitRadius;
  mercury.rotation.y += mercurySettings.mercuryRotationSpeed; // Adjust rotation speed as needed

  // Venus orbit and rotation animation
  const venusOrbitRadius = 3.6;
  const venusSpeed = 0.08; // Adjust for orbit speed
  venus.position.x = Math.cos(elapsed * venusSpeed) * venusOrbitRadius;
  venus.position.z = Math.sin(elapsed * venusSpeed) * venusOrbitRadius;
  venus.rotation.y += venusSettings.venusRotationSpeed; // Adjust rotation speed as needed

  // Earth orbit and rotation animation
  const earthOrbitRadius = 4.6;
  const earthSpeed = 0.07; // Adjust for orbit speed
  earth.position.x = Math.cos(elapsed * earthSpeed) * earthOrbitRadius;
  earth.position.z = Math.sin(elapsed * earthSpeed) * earthOrbitRadius;
  earth.rotation.y += earthSettings.earthRotationSpeed; // Adjust rotation speed as needed

  // Mars orbit and rotation animation
  const marsOrbitRadius = 5.6;
  const marsSpeed = 0.06; // Adjust for orbit speed
  mars.position.x = Math.cos(elapsed * marsSpeed) * marsOrbitRadius;
  mars.position.z = Math.sin(elapsed * marsSpeed) * marsOrbitRadius;
  mars.rotation.y += marsSettings.marsRotationSpeed;

  // Jupiter orbit and rotation animation
  const jupiterOrbitRadius = 7.6;
  const jupiterSpeed = 0.05; // Adjust for orbit speed
  jupiter.position.x = Math.cos(elapsed * jupiterSpeed) * jupiterOrbitRadius;
  jupiter.position.z = Math.sin(elapsed * jupiterSpeed) * jupiterOrbitRadius;
  jupiter.rotation.y += jupiterSettings.jupiterRotationSpeed;

  // Saturn orbit and rotation animation
  const saturnOrbitRadius = 9.6;
  const saturnSpeed = 0.04; // Adjust for orbit speed
  saturn.position.x = Math.cos(elapsed * saturnSpeed) * saturnOrbitRadius;
  saturn.position.z = Math.sin(elapsed * saturnSpeed) * saturnOrbitRadius;
  saturn.rotation.z += saturnSettings.saturnRotationSpeed;

  // Saturn rings rotation animation
  saturn_rings.position.x = saturn.position.x; // Keep rings aligned with Saturn
  saturn_rings.position.z = saturn.position.z; // Keep rings aligned with Saturn
  saturn_rings.rotation.x = Math.PI / 2; // Ensure rings are horizontal
  saturn_rings.rotation.y = Math.PI / 3; // Ensure rings are horizontal
  saturn_rings.rotation.z += saturnSettings.saturnRotationSpeed; // Adjust rotation speed as needed

  // Uranus orbit and rotation animation
  const uranusOrbitRadius = 10.6;
  const uranusSpeed = 0.03; // Adjust for orbit speed
  uranus.position.x = Math.cos(elapsed * uranusSpeed) * uranusOrbitRadius;
  uranus.position.z = Math.sin(elapsed * uranusSpeed) * uranusOrbitRadius;
  uranus.rotation.y += uranusSettings.uranusRotationSpeed;

  // Neptune orbit and rotation animation
  const neptuneOrbitRadius = 11.6;
  const neptuneSpeed = 0.02; // Adjust for orbit speed
  neptune.position.x = Math.cos(elapsed * neptuneSpeed) * neptuneOrbitRadius;
  neptune.position.z = Math.sin(elapsed * neptuneSpeed) * neptuneOrbitRadius;
  neptune.rotation.y += neptuneSettings.neptuneRotationSpeed;

  // Update controls
  controls.update()
}

function startAnimation() {
  if (!animationId) {
    animate();
  }
}

function stopAnimation() {
  if (animationId) {
    window.cancelAnimationFrame(animationId);
    animationId = null;
  }
}

startAnimation();