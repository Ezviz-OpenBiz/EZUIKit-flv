<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1758815004&id=891462424098512896&t=09d091ee55513927407935cd1ce038e44e7e05029ebd5d57f8ec0e1be959aadf&ev=100&supportH265=1',
    useMSE: true,
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
