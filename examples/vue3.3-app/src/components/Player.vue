<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp05open.ys7.com:9188/v3/openlive/GG6358043_1_1.flv?expire=1763125058&id=909532552559247360&t=6dfd150f733f58117b29f99817ffb3a7aec648d1cf6fa611ca8c5fb87041656e&ev=101&supportH265=1',
    useMSE: false,
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
