// import gsap from 'gsap';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { COLORS } from './typography';

// const scene = new THREE.Scene();
// const geometry = new THREE.SphereGeometry(3, 64, 64);
// const material = new THREE.MeshStandardMaterial({
//   color: COLORS.darkBlack
// })
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);
// const size = {
//   width: window.innerWidth,
//   height: window.innerHeight
// }
// //light
// // const light = new THREE.PointLight( 0xff0000, 1, 100 );
// // light.position.set( 50, 50, 50 );
// // scene.add(light)

// scene.add( new THREE.HemisphereLight( 0x8d7c7c, 0x494966, 3 ) );

// 				const spotLight = new THREE.SpotLight( 0xffffde, 200 );
// 				spotLight.position.set( 3.5, 0, 7 );
// 				scene.add( spotLight );

// 				spotLight.castShadow = true;

// 				spotLight.shadow.mapSize.width = 248;
// 				spotLight.shadow.mapSize.height = 248;

// 				spotLight.shadow.camera.near = 20;
// 				spotLight.shadow.camera.far = 15;

// 				spotLight.shadow.camera.fov = 40;

// 				spotLight.shadow.bias = - 0.05;


// //camera
// const camera = new THREE.PerspectiveCamera(40, size.width / size.height, 0.1, 100)
// camera.position.z = 25;
// scene.add(camera);
// //sizes



// //Renderer
// const canvas = document.querySelector(".webgl");
// const renderer = new THREE.WebGL1Renderer({ canvas });
// renderer.setPixelRatio(1)
// renderer.setSize(size.width, size.height)
// renderer.render(scene, camera)

// //controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true
// controls.enableZoom = false
// controls.enablePan = false
// controls.autoRotate = true
// controls.autoRotate = 1


// window.addEventListener("resize", () => {
//   size.height = window.innerHeight
//   size.width = window.innerWidth
//   camera.updateProjectionMatrix()
//   camera.aspect = size.width / size.height
//   renderer.setSize(size.width, size.height)
// });

// const loop = () => {
//   // light.position.x += 0.03
//   controls.update()
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(loop)
// }
// loop()


// const timeline = gsap.timeline({
//   defaults: {
//     duration: 10
//   },

// });


// window.addEventListener("DOMContentLoaded", () => {
//   timeline.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
//   timeline.fromTo(`.resume-animation`, { opacity: 0 }, { opacity: 1 }, '+=05');
// })

