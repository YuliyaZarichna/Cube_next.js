import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend } from "react-three-fiber";
import { withRouter } from "next/router";
import styled from "styled-components";

extend({ OrbitControls });

import AboutImg from "../assets/images/a1.jpg";
import Education from "../assets/images/e3.jpg";
import Skills from "../assets/images/s1.jpg";
import Project from "../assets/images/p1.jpg";
import Experience from "../assets/images/exp1.jpg";
import Hobbies from "../assets/images/h1.jpg";
import { text } from "@fortawesome/fontawesome-svg-core";
class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [
        "Experience",
        "Hydrogen",
        "1.00794",
        1,
        1,
        "Projects",
        "Helium",
        "4.002602",
        18,
        1,
        "Hobbies",
        "Lithium",
        "6.941",
        1,
        2,
        "About",
        "Beryllium",
        "9.012182",
        2,
        2,
        "Skills",
        "Boron",
        "10.811",
        13,
        2,
        "Education",
        "Boron",
        "10.811",
        13,
        2,
      ],
    };
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
    // this.scene.background = new THREE.Color("#1d1d1d");
    this.scene.background = new THREE.Color("#e5e3e2");

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.intersects = [];

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    this.controls = new OrbitControls(this.camera, this.el);
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.marginTop = this.el.getBoundingClientRect().top;
    this.marginLeft = this.el.getBoundingClientRect().left;

    /** New elements for cube transformation */
    /* ----- --- ----- --- */
    this.objects = [];
    this.targets = { table: [] };
    /* ----- --- ----- --- */

    // set some distance from a cube that is located at z = 0
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.canvas = this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  addCustomSceneObjects = () => {
    /** New elements for cube transformation */
    /* ----- --- ----- --- */
    console.log(this.state.table);
    this.canvas = {};
    for (var i = 0; i < this.state.table.length; i += 5) {
      this.canvas.textContent = this.state.table[i];
      console.log(" this.canvas.textContent", this.canvas.textContent);
    }
    console.log(
      "this.canvas.textContent",
      (this.canvas.textContent = "coffee"),
      this.el
    );
    console.log("props", this.props);
    /* ----- --- ----- --- */

    var color = new THREE.Color("rgba(0,127,127)");

    const geometry = new THREE.BoxGeometry(4, 4, 4);

    const cssTexture = styled.div`
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 12px;
      color: rgba(127, 255, 255, 0.75);
      background-color: chocolate;
    `;

    let loader = new THREE.TextureLoader();
    /*  texture.className = "number";
    texture.textContent = "coffee";
    console.log(texture); */

    let material = [
      new THREE.MeshBasicMaterial({
        map: loader.load(cssTexture),
      }),
    ];
    console.log("material", material);
    /*    let material = [  
      new THREE.MeshBasicMaterial({ map: loader.load(AboutImg) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Skills) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Project) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Experience) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Education) }),
      new THREE.MeshBasicMaterial({ map: loader.load(Hobbies) }),
    ]; */
    //geometry.faces[0] = this.canvas.textContent;
    /*  geometry.faces[1].color.setHex(0xff0000);
    geometry.faces[2].color.setHex(Math.random() * 0xffffff);
    geometry.faces[3].color.setHex(Math.random() * 0xffffff);
    geometry.faces[4].color.setHex(Math.random() * 0xffffff);
    geometry.faces[5].color.setHex(Math.random() * 0xffffff);

    const material = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors,
    }); */

    /*  const material = new THREE.MeshPhongMaterial({
      // color,
      opacity: 0.5,
      transparent: true,
      side: THREE.DoubleSide,
    }); */

    this.cube = new THREE.Mesh(geometry, material);

    this.edges = new THREE.EdgesGeometry(geometry);
    this.lines = new THREE.LineSegments(
      this.edges,
      new THREE.LineBasicMaterial({ color: 0x007f7f })
    );
    this.scene.add(this.lines);

    /* this.edges = new THREE.EdgesGeometry(this.cube, 0x007f7f);
    this.edges.matrixAutoUpdate = true;
    this.edges.material.linewidth = 2; */
    this.scene.add(this.cube);
    //this.scene.add(this.edges);

    /* const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]); */
    var light = new THREE.PointLight(0xffffff);
    light.position.set(10, 0, 25);
    this.scene.add(light);

    /* const colorLight = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(colorLight, intensity);
    light.position.set(0, 200, 0);
    this.scene.add(light); */
  };

  startAnimationLoop = () => {
    this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.005;
    this.lines.rotation.x += 0.005;
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
          // className={classes.Cube}
          className="Cube number"
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
