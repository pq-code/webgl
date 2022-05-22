<template>
    <div class="threeUlButton">
      <button @click="shadowswitch()">阴影开关</button>
      <button @click="lightoffswitch()">灯关开关</button>
    </div>
</template>

<script lang="ts" setup>
// 创建网格模型
let scene = new THREE.Scene();
var geometry = new THREE.BoxGeometry(50, 50, 50); //创建一个立方体几何对象Geometry
var material = new THREE.MeshPhongMaterial({
	color: 0x63B8FF
}); //材质对象Material
var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
mesh.rotation.x = 0;
mesh.rotation.y = 0;
mesh.rotation.z = 0;
mesh.position.x = 0;
mesh.position.y = 50;
mesh.position.z = 0;
mesh.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(mesh); //网格模型添加到场景中

var plane = new THREE.PlaneGeometry(400,200);
var planematerial = new THREE.MeshLambertMaterial({
	color: 0xEEEEEE,
	transparent: true,
	opacity: 0.3
});
var planemesh = new THREE.Mesh(plane, planematerial); //网格模型对象Mesh
planemesh.receiveShadow = true;
scene.add(planemesh); //网格模型添加到场景中

planemesh.rotation.x = -0.5 * Math.PI;
// planemesh.rotation.x = 0;
planemesh.rotation.y = 0;
planemesh.rotation.z = 0;
planemesh.position.x = 0;
planemesh.position.y = 0;
planemesh.position.z = 0;

// 光源设置
//聚光灯
var SpotLightpoint = new THREE.SpotLight(0x4876FF);
// point.position.set(400, 200, 300); //点光源位置
SpotLightpoint.rotation.y = 0;
SpotLightpoint.rotation.z = 0;
SpotLightpoint.position.x = 100;
SpotLightpoint.position.y = 300;
SpotLightpoint.position.z = 0;
SpotLightpoint.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(SpotLightpoint); //点光源添加到场景中

var SpotLightpoint1 = new THREE.SpotLight(0x4876FF);
// point.position.set(400, 200, 300); //点光源位置
SpotLightpoint1.rotation.y = 0;
SpotLightpoint1.rotation.z = 0;
SpotLightpoint1.position.x = 100;
SpotLightpoint1.position.y = 300;
SpotLightpoint1.position.z = 0;
SpotLightpoint1.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(SpotLightpoint1); //点光源添加到场景中

//点光源
var point = new THREE.PointLight(0xFF0000);
// point.position.set(400, 200, 300); //点光源位置
point.rotation.y = 0;
point.rotation.z = 0;
point.position.x = 100;
point.position.y = 100;
point.position.z = 100;
// point.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(point); //点光源添加到场景中

var point1 = new THREE.PointLight(0xFF0000);
// point.position.set(400, 200, 300); //点光源位置
point1.rotation.y = 0;
point1.rotation.z = 0;
point1.position.x = -100;
point1.position.y = -100;
point1.position.z = -100;
point1.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(point1); //点光源添加到场景中

var point2 = new THREE.PointLight(0x4876FF);
// point.position.set(400, 200, 300); //点光源位置
point2.rotation.y = 0;
point2.rotation.z = 0;
point2.position.x = -100;
point2.position.y = -300;
point2.position.z = -100;
point2.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(point2); //点光源添加到场景中

//环境光
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
console.log(scene);
console.log(scene.children);
var width = window.innerWidth; //窗口宽度
// 相机设置
var height = window.innerHeight; //窗口高度
var k = width / height; //窗口宽高比
var s = 150; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
// camera.position.set(0, 0, 200); //设置相机位置
camera.position.x = 100;
camera.position.y = 100;
camera.position.z = 200;
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
// 创建渲染器对象
var renderer = new THREE.WebGLRenderer({
	antialias: true, // true/false表示是否开启反锯齿
	alpha: true, // true/false 表示是否可以设置背景色透明
	precision: 'highp', // highp/mediump/lowp 表示着色精度选择
	premultipliedAlpha: true, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
	preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
	maxLights: 4, // 最大灯光数
	stencil: false, // false/true 表示是否使用模板字体或图案
});

renderer.shadowMapEnabled = true;// 设置阴影
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
//执行渲染操作   指定场景、相机作为参数
renderer.render(scene, camera);

// 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
var axisHelper = new THREE.AxisHelper(250);
scene.add(axisHelper);

// 旋转
let T0 = new Date();//上次时间
function render() {
	let T1 = new Date();//本次时间
	let t = T1 - T0;//时间差
	T0 = T1;//把本次时间赋值给上次时间
	requestAnimationFrame(render);
	renderer.render(scene,camera);//执行渲染操作
	mesh.rotateY(0.001 * t);//旋转角速度0.001弧度每毫秒
	// mesh.rotateZ(0.001*t);//旋转角速度0.001弧度每毫秒
	mesh.rotateZ(0.001 * t);//旋转角速度0.001弧度每毫秒
}
render();

// 鼠标控制
function render1() {
	renderer.render(scene,camera);//执行渲染操作
	// mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
	requestAnimationFrame(render1);//请求再次执行渲染函数render
}
render1();
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
// 已经通过requestAnimationFrame(render);周期性执行render函数，没必要再通过监听鼠标事件执行render函数
// controls.addEventListener('change', render)


const shadowswitch = function () {
	planemesh.receiveShadow = !planemesh.receiveShadow;s
};
var lampSwitch = true;
let lightoffswitch = function () {
	if (lampSwitch){
		scene.remove(SpotLightpoint);
		scene.remove(SpotLightpoint1);
		scene.remove(point);
		scene.remove(point2);
		lampSwitch = !lampSwitch;
	} else {
		scene.add(SpotLightpoint);
		scene.add(SpotLightpoint1);
		scene.add(point);
		scene.add(point2);
		lampSwitch = !lampSwitch;
	}
};
</script>

<style scoped>
.threeUlButton {
  /*z-index: 10;*/
}
</style>
