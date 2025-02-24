import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useGameStore } from "@/stores/game";
import ObstacleSystem from "./obstacles";

import ground from "@/assets/game/models/ground.glb";

import coinSound from "@/assets/game/sounds/coin.wav";

export default class Environment {
  constructor(scene) {
    this.store = new useGameStore();
    this.scene = scene;

    this.ground = new THREE.Object3D();
    this.groundClone = new THREE.Object3D();
    this.groundSize = 0;
    this.currentSpeed = 20;

    this.load();
  }

  async load() {
    const groundModel = await new GLTFLoader().loadAsync(ground);
    this.ground = groundModel.scene;
    this.ground.position.set(0, 0, 0);
    this.ground.scale.set(1, 1, 1);
    this.scene.add(this.ground);

    this.groundClone = this.ground.clone();
    const groundBox = new THREE.Box3().setFromObject(this.ground);
    this.groundSize = groundBox.max.z - groundBox.min.z;
    this.groundClone.position.z = -(this.ground.position.z + this.groundSize);
    this.scene.add(this.groundClone);

    const listener = new THREE.AudioListener();
    this.scene.getObjectByName("camera").add(listener);
    this.sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    const buffer = await audioLoader.loadAsync(coinSound);
    this.sound.setBuffer(buffer);
    this.sound.setLoop(false);
    this.sound.setVolume(0.5);
  }

  loadObstacles() {
    this.obstacles = new ObstacleSystem(this.scene);
    this.obstacles.init();
  }

  active(speed, delta, player) {
    // Update ground positions
    this.ground.position.z += speed * delta;
    this.groundClone.position.z += speed * delta;

    // Ground loop logic
    if (this.ground.position.z > 250) {
      this.ground.position.z = this.groundClone.position.z - this.groundSize;
    }
    if (this.groundClone.position.z > 250) {
      this.groundClone.position.z = this.ground.position.z - this.groundSize;
    }

    // Update obstacles if environment is fully loaded
    if (this.obstacles) {
      this.obstacles.update(delta, speed, player);
      this.detectObstacleCollision(player);
    }
  }

  slowDown(speed, delta) {
    this.ground.position.z += (speed - 10) * delta;
    this.groundClone.position.z += (speed - 10) * delta;

    // Ground loop logic
    if (this.ground.position.z > 250) {
      this.ground.position.z = this.groundClone.position.z - this.groundSize;
    }
    if (this.groundClone.position.z > 250) {
      this.groundClone.position.z = this.ground.position.z - this.groundSize;
    }
  }

  freeze() {}

  detectObstacleCollision(player) {
    if (player.player) {
      for (let i = this.obstacles.activeObstacles.length - 1; i >= 0; i--) {
        const obstacle = this.obstacles.activeObstacles[i];

        if (player.player.userData.obb.intersectsOBB(obstacle.model.userData.obb)) {
          obstacle.collision = 1;
          console.log("colliding here");
          player.stumble();
        }
      }
    }
    
  }

  detectCoinCollision() {
    // this.store.addCoin();
    // this.playCoinSound();
  }

  playCoinSound() {
    this.sound.play();
  }

  reset() {
    // Reset ground positions
    this.ground.position.set(0, 0, 0);
    this.groundClone.position.z = -(this.ground.position.z + this.groundSize);

    // Reset speed
    this.currentSpeed = 20;
  }

  cleanup() {
    if (this.obstacles) {
      this.obstacles.cleanup();
    }
  }
}
