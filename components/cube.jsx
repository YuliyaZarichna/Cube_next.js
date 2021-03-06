import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend } from "react-three-fiber";
import { withRouter } from "next/router";

extend({ OrbitControls });

/* import AboutImg from "../assets/images/a1.jpg";
import Education from "../assets/images/e3.jpg";
import Skills from "../assets/images/s1.jpg";
import Project from "../assets/images/p1.jpg";
import Experience from "../assets/images/exp1.jpg";
import Hobbies from "../assets/images/h1.jpg"; */

/* import Skills from "../assets/images/skills-yellow.jpg";
import AboutImg from "../assets/images/about-yellow.jpg";
import Education from "../assets/images/education-yellow.jpg";
import Project from "../assets/images/projects-yellow.jpg";
import Experience from "../assets/images/workexp-yellow.jpg";
import Hobbies from "../assets/images/hobbies-yellow.jpg"; */

import Skills from "../assets/images/s.jpg";
import AboutImg from "../assets/images/a.jpg";
import Education from "../assets/images/e.jpg";
import Project from "../assets/images/p.jpg";
import Experience from "../assets/images/we.jpg";
import Hobbies from "../assets/images/h.jpg";

class Cube extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    // get container dimensions and use them for scene sizing
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    //this.scene.background = new THREE.Color("#2a2e34");
    this.scene.background = new THREE.Color("#1d1d1d");

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.intersects = [];

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableZoom = true;
    this.controls.enablePan = false;

    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 5.0;
    this.marginTop = this.el.getBoundingClientRect().top;
    this.marginLeft = this.el.getBoundingClientRect().left;

    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  addCustomSceneObjects = () => {
    var color = new THREE.Color("rgba(0,127,127)");

    const geometry = new THREE.BoxGeometry(4, 4, 4);
    let loadManager = new THREE.LoadingManager();
    let loader = new THREE.TextureLoader(loadManager);

    let material = [
      new THREE.MeshBasicMaterial({ map: loader.load(AboutImg) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Skills) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Project) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Experience) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Education) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Hobbies) }),
    ];

    loadManager.load = () => {};
    this.cube = new THREE.Mesh(geometry, material);
    this.edges = new THREE.EdgesGeometry(geometry);
    this.lines = new THREE.LineSegments(
      this.edges,
      //new THREE.LineBasicMaterial({ color: 0xfbbd0d })
      new THREE.LineBasicMaterial({ color: 0x1c1e1e })
    );
    this.lines.material.linewidth = 4;
    this.lines.material.depthTest = false;
    this.lines.material.opacity = 0.5;
    this.lines.material.transparent = true;

    this.scene.add(this.cube);
    //this.scene.add(this.lines);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);
  };

  startAnimationLoop = () => {
    // this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.005;
    //this.lines.rotation.x += 0.005;
    this.lines.rotation.y += 0.005;

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  onMouseDownHanler = () => {
    console.log("down");
    this.start = new Date();
  };

  onMouseUpHanler = () => {
    console.log("up");

    var end = new Date();
    var delta;
    var clickDuration = 0.3;
    delta = (end - this.start) / 1000.0;
    console.log("delta", delta);
    if (delta < clickDuration) {
      this.onClick();
    } else {
      console.log("press");
    }
  };

  onMouseMoveHanler = (event) => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.intersects = this.raycaster.intersectObjects([this.cube]);
    if (this.intersects.length > 0) {
      this.el.style.cursor = "pointer";
    } else {
      this.el.style.cursor = "default";
    }

    if (
      event.clientX >= this.marginLeft &&
      event.clientX <= width + this.marginLeft &&
      event.clientY >= this.marginTop &&
      event.clientY <= height + this.marginTop
    ) {
      this.mouse.x = ((event.clientX - this.marginLeft) / width) * 2 - 1;
      this.mouse.y = -((event.clientY - this.marginTop) / height) * 2 + 1;
    } else {
      this.mouse.x = 1;
      this.mouse.y = 1;
    }
  };

  onClick = () => {
    console.log("onClick function");
    var faceIdx1 = -1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.intersects = this.raycaster.intersectObjects([this.cube]);

    if (this.intersects.length === 0) return;
    faceIdx1 = this.intersects[0].faceIndex;

    if (faceIdx1 <= 1) {
      console.log("About");
      this.props.router.push("/about");
    } else if (faceIdx1 > 1 && faceIdx1 <= 3) {
      console.log("Skills");
      this.props.router.push("/skills");
    } else if (faceIdx1 > 3 && faceIdx1 <= 5) {
      console.log("projects");
      this.props.router.push("/projects");
    } else if (faceIdx1 > 5 && faceIdx1 <= 7) {
      console.log("work exp");
      this.props.router.push("/experience");
    } else if (faceIdx1 > 7 && faceIdx1 <= 9) {
      console.log("education");
      this.props.router.push("/education");
    } else if (faceIdx1 > 9 && faceIdx1 <= 11) {
      console.log("hobbie");
      this.props.router.push("/hobbies");
    }
  };

  onTouchStartHanler = () => {
    this.start = new Date();
  };

  onTouchEndHanler = (event) => {
    console.log("onDocumentTouchEnd");
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    var end = new Date();
    var delta;
    var clickDuration = 0.2;
    delta = (end - this.start) / 1000.0;

    if (
      event.changedTouches[0].clientX >= this.marginLeft &&
      event.changedTouches[0].clientX <= width + this.marginLeft &&
      event.changedTouches[0].clientY >= this.marginTop &&
      event.changedTouches[0].clientY <= height + this.marginTop
    ) {
      console.log("onTouchEndHanler if");
      this.mouse.x =
        ((event.changedTouches[0].clientX - this.marginLeft) / width) * 2 - 1;
      this.mouse.y =
        -((event.changedTouches[0].clientY - this.marginTop) / height) * 2 + 1;

      if (delta < clickDuration) {
        this.onClick();
      }
    } else {
      console.log("onTouchEndHanler else");
      this.mouse.x = 1;
      this.mouse.y = 1;
    }
  };

  render() {
    return (
      <>
        <div
          className="Cube"
          ref={(ref) => (this.el = ref)}
          onMouseDown={this.onMouseDownHanler}
          onMouseUp={this.onMouseUpHanler}
          onMouseMove={this.onMouseMoveHanler}
          onTouchStart={this.onTouchStartHanler}
          onTouchEnd={this.onTouchEndHanler}
        />
      </>
    );
  }
}

export default withRouter(Cube);
