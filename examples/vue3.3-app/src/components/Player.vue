<script setup>
import 'ezuikit-flv/style.css'
import { onMounted, ref } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

const playUrl = ref('https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1772572917&id=949084246620778496&t=afd5135df954c17f5b9ac5a6b2b8998bc8706b081bf925fa6f2ceee3b7ce9593&ev=101&supportH265=1')
const debugEnabled = ref(true)
const volume = ref(0.5)
const rotate = ref('0')
const scaleMode = ref('1')

const create = () => {
  const container = document.getElementById('container')
  if (!container) return

  player = new EzuikitFlv({
    container: container,
    url: playUrl.value,
    debug: debugEnabled.value,
    downloadRecord: false,
  })

  player.on('error', (msg) => {
    console.error(msg)
  })
}

const handleInit = () => {
  if (playUrl.value) {
    if (player) {
      player.destroy()
      player = null
    }
    create()
  }
}

const handlePlay = () => {
  if (player) {
    player.play()
  }
}

const handlePause = () => {
  if (player) {
    player.pause()
  }
}

const handleScreenshot = () => {
  if (player) {
    player.screenshot()
  }
}

const handleStartRecord = () => {
  if (player) {
    player.startRecord(new Date().getTime() + '', (url, file) => {
      console.log('record result: ', url, file)
    })
  }
}

const handleStopRecord = () => {
  if (player) {
    player.stopRecord()
  }
}

const handleDestroy = () => {
  if (player) {
    player.destroy()
    player = null
  }
}

const handleGetVersion = () => {
  if (player) {
    console.log(player.getVersion())
  }
}

const handleDebugChange = (e) => {
  if (player) {
    debugEnabled.value = e.target.value !== '0'
    player.setDebug(debugEnabled.value)
  }
}

const handleScaleModeChange = (e) => {
  scaleMode.value = e.target.value
  if (player) {
    player.setScaleMode(e.target.value)
  }
}

const handleVolumeChange = (e) => {
  volume.value = +e.target.value
  if (player) {
    player.muted = volume.value <= 0
    player.volume = volume.value
  }
}

onMounted(() => {
  create()
})
</script>

<template>
  <div class="player-wrapper">
    <div id="container"></div>
    <div class="input-group">
      <input v-model="playUrl" autocomplete="on" placeholder="输入播放地址" />
      <button @click="handleInit">初始化</button>
    </div>
    <div class="controls">
      <button @click="handlePlay">播放</button>
      <button @click="handleScreenshot">截图</button>
      <button @click="handleStartRecord">开始录制</button>
      <button @click="handleStopRecord">停止录制</button>
      <button @click="handlePause">停止</button>
      <button @click="handleDestroy">销毁</button>
      <select @change="handleDebugChange">
        <option value="1">打印日志</option>
        <option value="0">不打印日志</option>
      </select>
      <div class="control-item">
        <label>音量：</label>
        <input
          v-model.number="volume"
          placeholder="0~1"
          type="number"
          step="0.01"
          @blur="handleVolumeChange"
          style="width: 60px"
        />
      </div>
      <div class="control-item">
        <label>填充模式</label>
        <select v-model="scaleMode" @change="handleScaleModeChange" title="填充模式">
          <option value="0">完全填充区域（拉伸）</option>
          <option value="1" selected>等比缩放,最大边填充</option>
          <option value="2">等比缩放,最小边填充</option>
        </select>
      </div>
      <button @click="handleGetVersion">获取版本</button>
    </div>
  </div>
</template>

<style scoped>
.player-wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

#container {
  height: 400px;
  width: 100%;
  background: #000;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
}

.input-group input {
  flex: 1;
  padding: 8px;
}

.input-group button {
  padding: 8px 15px;
}

.controls {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  color: #333;
}

.controls button,
.controls select {
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.controls button:hover {
  background-color: #e0e0e0;
}

.control-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.control-item input,
.control-item select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
