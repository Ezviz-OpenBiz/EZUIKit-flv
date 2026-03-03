<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1772572917&id=949084246620778496&t=afd5135df954c17f5b9ac5a6b2b8998bc8706b081bf925fa6f2ceee3b7ce9593&ev=101&supportH265=1',
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
