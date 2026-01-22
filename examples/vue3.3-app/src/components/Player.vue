<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1769089970&id=934536106903339008&t=2bbdf238fb574aaf8430250f14e0c064024ccf4a41bcb93e60d3b3e69f8e5d12&ev=101&supportH265=1',
    // useMSE: false,
    autoPlay: true,
    // decoder: 'decoder.js' // 软解解码资源 （wasm 要和js 在同一个文件夹中）
    // themeData: null // 忽略主题 @since 2.0.0
  })
})
</script>

<template>
    <div id="container"></div>
</template>

<style>
#container {
  height: 400px;
  width: 100%;
}
</style>
