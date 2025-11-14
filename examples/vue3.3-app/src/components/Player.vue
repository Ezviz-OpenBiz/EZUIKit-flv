<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp05open.ys7.com:9188/v3/openlive/GG6358043_1_1.flv?expire=1763149791&id=909560789419950080&t=6ac3ea24ddb5997c6c91509d584f040d9e5184c44846ef814a88fdd9aac7667d&ev=101&supportH265=1',
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
