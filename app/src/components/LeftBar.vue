<script setup>
import { ref, onMounted } from "vue";

import coin from "@/assets/icons/coin.png";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  coins: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="left-bar">
    <div class="progress-box">
      <el-progress
        class="progress"
        :percentage="progress"
        :stroke-width="22"
        :text-inside="true"
        color="#4e8c40c7"
      >
        <div class="divider divider-25"></div>
        <div class="divider divider-50"></div>
        <div class="divider divider-75"></div>
      </el-progress>
    </div>

    <div class="data-box">
      <div class="data-item coin-item">
        <img class="coin" :src="coin" alt="" />
        <span class="coin-text">{{ coins }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 468px;
  padding: 20px 0 20px 30px;
  font-family: "Irish Grover", system-ui;
  font-size: 40px;
}

.progress-box {
  margin-bottom: 30px;
}

.el-progress-bar__inner {
  position: static !important;
}

.progress {
  border: 7px solid var(--border-color);
  border-radius: 100px;
}

.divider {
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: var(--color-black);
}

.divider-25 {
  left: 25%;
  /* left: 23.8889%; */
}

.divider-50 {
  left: 50%;
  /* left: 48.8889%; */
}

.divider-75 {
  left: 75%;
}

.data-box {
  color: var(--color-white);
}

.data-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.coin-item {
  margin-bottom: 18px;
}

.clock,
.coin {
  height: 80px;
  width: 80px;
}

.coin {
  border-radius: 50%;
  box-shadow: 1px 3px 5px #888888;
}

.coin-text {
  text-shadow: 1px 3px 5px #888888;
  font-size: 60px;
}

.badge-item {
  gap: 10px;
}

.badge {
  height: 65px;
  width: 60px;
}
</style>
