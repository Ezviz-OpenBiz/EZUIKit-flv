<script setup>
import 'ezuikit-flv/style.css'
import { onMounted } from 'vue'
import EzuikitFlv from 'ezuikit-flv'

let player = null

onMounted(() => {
  player = new EzuikitFlv({
    container: document.getElementById('container'),
    debug: true,
    url: 'https://rtmp11open.ys7.com:9188/v3/openlive/BC7900686_1_1.flv?expire=1760672512&id=898898538039717888&t=007458c067a2322d39b95b43ee7a1abd7132e50935bc3ea1fb5b101f5a01af2a&ev=101&supportH265=1',
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
