## Ezuikit-flv

![Download](https://img.shields.io/npm/dm/ezuikit-flv.svg) ![Version](https://img.shields.io/npm/v/ezuikit-flv.svg)

ezuikit-flv 是一款开源的纯 H5 直播流播放器，通过 Emscripten 将音视频解码库编译成 js（wasm) 运行于浏览器之中。兼容几乎所有浏览器，可以运行在 PC、手机、微信中，无需额外安装插件。

## 功能

- 支持解码 H.264 视频
- 支持解码 H.265 视频（flv id == 12）
- 支持 2K 视频
- 支持解码 AAC 音频
- 可设置播放缓冲区时长，可设置 0 缓冲极限低延迟（网络抖动会造成卡顿现象）
- 可创建多个播放实例
- 手机浏览器内打开长时间不会息屏
- 支持填充，等比，等比缩放 3 种视频缩放模式
- 支持 0，90，180，270 度画面旋转
- 支持 MediaSourceExtensions 硬件解码
- 支持 MediaSourceExtensions 硬解码失败的情况下自动切换到 wasm 软解码

### npm 使用

```bash
npm install ezuikit-flv
```

```js
import "ezuikit-flv/style.css"; // @since 2.0.1
import EzuikitFlv from "ezuikit-flv";

const player = new EzuikitFlv({
  url: "play url", // https://play.com/9999.flv
  id: "id", // support element id
  decoder: "decoder.js", // 自定义解码库加载地址， 默认放置在服务器根目录下
  autoPlay: true,
  // themeData: null // 忽略主题
});

// player.play(); // 由于解码资源异步加载的问题 不推荐
```

### umd 使用

```html
<div id="container-id">
  <!-- ezuikit-flv css file  `node_modules/ezuikit-flv/style.css`-->
  <link rel="stylesheet" href="./style.css" />
  <!-- ezuikit-flv umd file  `node_modules/ezuikit-flv/index.js`-->
  <script src="./index.js"></script>
  <script>
    const player = new EzuikitFlv({
      url: "play url", // https://play.com/9999.flv
      id: "container-id", // support element id or element
      decoder: "decoder.js", // 自定义解码库加载地址， 默认放置在服务器根目录下
      autoPlay: true,
      // themeData: null // 忽略主题
    });

    // player.play(); // 由于解码资源异步加载的问题 不推荐
  </script>
</div>
```

注意： 暂不提供 CDN 地址， decoder 静态资源需要放置在自己的服务器下（`node_modules/ezuikit-flv`下 `decoder.wasm` 和 `decoder.js` 文件， 这两个文件需要在同一个文件夹下）

注意： 暂不提供 CDN 地址，decoder 静态资源需要放置在自己的服务器下（`node_modules/ezuikit-flv`下 `decoder.wasm` 和 `decoder.js` 文件， 这两个文件需要在同一个文件夹下）

注意： 暂不提供 CDN 地址，decoder 静态资源需要放置在自己的服务器下（`node_modules/ezuikit-flv`下 `decoder.wasm` 和 `decoder.js` 文件， 这两个文件需要在同一个文件夹下）

### 配置

[options](https://ezviz-openbiz.github.io/EZUIKit-flv/global.html#FlvOptions)

### api

[api](https://ezviz-openbiz.github.io/EZUIKit-flv/EzuikitFlv.html)

### examples

[base-app](https://github.com/Ezviz-OpenBiz/EZUIKit-flv/tree/master/examples/base-app)

[react-app](https://github.com/Ezviz-OpenBiz/EZUIKit-flv/tree/master/examples/react-app)

[vue-app](https://github.com/Ezviz-OpenBiz/EZUIKit-flv/tree/master/examples/vue-app)
