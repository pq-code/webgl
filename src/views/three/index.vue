<template>
  <div class="photo_action_page">
    <div id="threeContainer"></div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 创建场景对象Scene
 */
var scene = new THREE.Scene();
/**
 * 创建网格模型
 */
var OBJLoader = new THREE.OBJLoader();//obj加载器
var MTLLoader = new THREE.MTLLoader();//材质文件加载器
MTLLoader.load('models/street/street.mtl', function(materials) {
	// 返回一个包含材质的对象MaterialCreator
	console.log(materials);
	//obj的模型会和MaterialCreator包含的材质对应起来
	OBJLoader.setMaterials(materials);
	OBJLoader
		.setPath( 'models/street/' )
		.load( 'street.obj', function ( street ) {
			console.log('模型',street);
			street.position.set(220, -200, 480);
			street.scale.set(1.6,1.6,1.6);
			street.receiveShadow = true;
			scene.add( street );
		});
});
var OBJLoader1 = new THREE.OBJLoader();//obj加载器
var MTLLoader1 = new THREE.MTLLoader();//材质文件加载器
MTLLoader1.load('models/truck/file.mtl', function(materials1) {
	// 返回一个包含材质的对象MaterialCreator
	console.log(materials1);
	//obj的模型会和MaterialCreator包含的材质对应起来
	OBJLoader1.setMaterials(materials1);
	OBJLoader1
		.setPath( 'models/truck/' )
		.load( 'file.obj', function ( group1 ) {
			console.log('模型',group1);
			// debugger;
			group1.rotation.y = Math.PI ;
			group1.position.set(0, 22, 1000); //点光源位置
			group1.receiveShadow = true;
			scene.add( group1 );
			let T0 = new Date();//上次时间
			let a = 0;let b = 0;
			function render() {
				let T1 = new Date();//本次时间
				let t = T1 - T0;//时间差
				T0 = T1;//把本次时间赋值给上次时间
				requestAnimationFrame(render);
				renderer.render(scene,camera);//执行渲染操作
				a += 1;
				// group1.translateZ(0.3*t);//沿着x轴正方向平移距离100
				if (a >= 40 && a < 1100){
					console.log(group1.position.z);
					if (group1.position.z > -260 && group1.position.z < -160) {
						console.log('等红绿灯');
						b += 1;
						if (b > 100){
							group1.translateZ(0.3 * t);//沿着x轴正方向平移
						}
					} else {
						b = 0;
						group1.translateZ(0.3 * t);//沿着x轴正方向平移
					}
					console.log('开始前进了');
				} else if (a < 500) {
					group1.position.z = 1000;
				} else {
					a = 0;
				}
			}
			render();
		});
});
var OBJLoader = new THREE.OBJLoader();//obj加载器
var MTLLoader = new THREE.MTLLoader();//材质文件加载器
MTLLoader.load('models/truck/file.mtl', function(materials1) {
	// 返回一个包含材质的对象MaterialCreator
	console.log(materials1);
	//obj的模型会和MaterialCreator包含的材质对应起来
	OBJLoader.setMaterials(materials1);
	OBJLoader
		.setPath( 'models/truck/' )
		.load( 'file.obj', function ( group ) {
			console.log('模型',group);
			// debugger;
			group.rotation.y = Math.PI / 2 ;
			group.position.set(-220, 22, -400); //点光源位置
			group.receiveShadow = true;
			scene.add( group );
			let T0 = new Date();//上次时间
			let a = 0;
			function render() {
				let T1 = new Date();//本次时间
				let t = T1 - T0;//时间差
				T0 = T1;//把本次时间赋值给上次时间
				requestAnimationFrame(render);
				renderer.render(scene,camera);//执行渲染操作
				a += 1;
				// group1.translateZ(0.3*t);//沿着x轴正方向平移距离100
				if (a >= 140 && a < 1000){
					console.log('开始前进了');
					group.translateZ(0.3 * t);//沿着x轴正方向平移距离100
				} else if (a < 300) {
					group.position.x = -1000;
					// group.position.z = 2000;
				} else {
					a = 0;
				}
			}
			render();
		});
});

/**
 * 光源设置
 */

var point1 = new THREE.DirectionalLight(0xFF0000,0.2);
point1.position.set(400, 200, 300); //点光源位置
scene.add(point1); //点光源添加到场景中
point1.castShadow = true;
// 设置计算阴影的区域，最好刚好紧密包围在对象周围
// 计算阴影的区域过大：模糊  过小：看不到或显示不完整
point1.shadow.camera.near = 0.5;
point1.shadow.camera.far = 300;
point1.shadow.camera.left = -50;
point1.shadow.camera.right = 50;
point1.shadow.camera.top = 200;
point1.shadow.camera.bottom = -100;

var point2 = new THREE.DirectionalLight(0x4876FF,0.8);
point2.position.set(400, 800, 400); //点光源位置
scene.add(point2); //点光源添加到场景中
point2.castShadow = true;
// 设置计算阴影的区域，最好刚好紧密包围在对象周围
// 计算阴影的区域过大：模糊  过小：看不到或显示不完整
point2.shadow.camera.near = 0.5;
point2.shadow.camera.far = 300;
point2.shadow.camera.left = -50;
point2.shadow.camera.right = 50;
point2.shadow.camera.top = 200;
point2.shadow.camera.bottom = -100;

// 环境光
var ambient = new THREE.AmbientLight(0xb9d3ff,0.4);
ambient.castShadow = true;// 对象是否渲染到阴影贴图中
scene.add(ambient);
console.log(scene);
console.log(scene.children);
/**
 * 相机设置
 */
var width = window.innerWidth; //窗口宽度
var height = window.innerHeight; //窗口高度
var k = width / height; //窗口宽高比
var s = 160; //三维场景显示范围控制系数，系数越大，显示的范围越大
//创建相机对象
// var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 100000);
var camera = new THREE.PerspectiveCamera(80, width / height, 1, 2000);
// camera.position.set(0, 0, 200); //设置相机位置
camera.position.x = -180;
camera.position.y = 280;
camera.position.z = 260;
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

/**
 * 创建渲染器对象
 */

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
// let T0 = new Date();//上次时间
// function render() {
//     let T1 = new Date();//本次时间
//     let t = T1-T0;//时间差
//     T0 = T1;//把本次时间赋值给上次时间
//     requestAnimationFrame(render);
//     renderer.render(scene,camera);//执行渲染操作
//     // group.translateZ(100);//沿着x轴正方向平移距离100
//     // scene.group.translateX(0.001*t);//沿着x轴正方向平移距离100
//     // mesh.rotateY(0.001*t);//旋转角速度0.001弧度每毫秒
//     // mesh.rotateZ(0.001*t);//旋转角速度0.001弧度每毫秒
//     // planemesh.translateX(0.001*t);//旋转角速度0.001弧度每毫秒
// }
// render();

// 鼠标控制
function render1() {
	renderer.render(scene,camera);//执行渲染操作
	// mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
	requestAnimationFrame(render1);//请求再次执行渲染函数render
}
render1();
var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
// controls.enableDamping = true;
// 已经通过requestAnimationFrame(render);周期性执行render函数，没必要再通过监听鼠标事件执行render函数
// controls.addEventListener('change', render)


// 按钮控制
function shadowswitch() {
	console.log(planemesh,planemesh.receiveShadow);
	planemesh.receiveShadow = !planemesh.receiveShadow;
	debugger;
}

// 按钮控制
var lampSwitch = true;
function lightoffswitch() {
	if (lampSwitch){
		scene.remove(SpotLightpoint);
		scene.remove(SpotLightpoint1);
		scene.remove(point);
		scene.remove(point2);
		// scene.children.splice(2,6);
		lampSwitch = !lampSwitch;
	} else {
		scene.add(SpotLightpoint);
		scene.add(SpotLightpoint1);
		scene.add(point);
		scene.add(point2);
		lampSwitch = !lampSwitch;
	}
	console.log(scene.children);
	// planemesh.receiveShadow = !planemesh.receiveShadow;
}
</script>

<style scoped>
.threeUlButton {
  /*z-index: 10;*/
}
</style>
