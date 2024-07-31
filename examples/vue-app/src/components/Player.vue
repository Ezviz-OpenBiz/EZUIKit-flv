<script setup>
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://test12flow.ys7.com:443/v3/openlive/C91672728_1_2.flv?expire=1724231462&id=615956453163966465&t=3edca10be26e834f298923d4114bf9467d9778a7e0d1fa02342846031545b909&ev=100',
    useMSE: true,
    decoder: 'decoder.js' // 软解解码资源 （wasm 要和js 在同一个文件夹中）
  })
  player.play()
})
</script>

<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<style>
#container {
  width: 600px;
  height: 400px;
  background: #000;
}
</style>
