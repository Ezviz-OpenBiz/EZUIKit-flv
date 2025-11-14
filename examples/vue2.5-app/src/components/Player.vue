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
      url: "https://rtmp05open.ys7.com:9188/v3/openlive/GG6358043_1_1.flv?expire=1763149791&id=909560789419950080&t=6ac3ea24ddb5997c6c91509d584f040d9e5184c44846ef814a88fdd9aac7667d&ev=101&supportH265=1", // https://play.com/9999.flv
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
