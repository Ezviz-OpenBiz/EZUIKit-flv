<template>
    <div id="container"></div>
</template>
<script>
// 
import "ezuikit-flv/style.css";
import EzuikitFlv from "ezuikit-flv";

export default {
  name: 'FlvPlayer',
  mounted: () => {
    const player = new EzuikitFlv({
      url: "https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1769089970&id=934536106903339008&t=2bbdf238fb574aaf8430250f14e0c064024ccf4a41bcb93e60d3b3e69f8e5d12&ev=101&supportH265=1", // https://play.com/9999.flv
      id: "container", // support element id
      decoder: "decoder.js", // 自定义解码库加载地址， 默认放置在服务器根目录下
      autoPlay: true,
      // useMSE: true,
      // themeData: null // 忽略主题
    });
  },
  methods: {},
};
</script>

<style>
#container {
  height: 400px;
  width: 100%;
}
</style>
