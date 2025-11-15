## v2.0.3 （2025-11-14）

### Feat

- 非萤石平台的播放地址不再追加 `vc=3` 参数

### Fixed

- 修复文件中有 `??` 语法导致 `webpack@4` 不能编译的问题

## v2.0.2 （2025-10-16）

### Fixed

- 修复软解在浏览器窗口隐藏后内存泄漏问题

## v2.0.1（2025-09-25）

### Fixed

- 修复缺失的依赖项文件

## v2.0.0

### Feat

- 新增主题 UI
- 新的全屏 api `fullscreen` 和退出全屏 `exitFullscreen`
- `openSound` 和 `closeSound` 不再推荐， 使用`player.current.volume = 0.8` 和 `player.current.muted = true` 代替

## v1.0.3

### Fixed

- 修复全屏冲突
- 支持截图

## v1.0.2 （2024-07-15）

### Feat

- 支持被当成插件

### Fixed

- 修复播放地址被转义 [#1]https://github.com/Ezviz-OpenBiz/EZUIKit-flv/issues/1

- 修复`?.` 可选链

- 修复软解 `wasm` 加载时机, 解决绿屏问题

## v1.0.1 （2023-12-27）

### Feat

- 支持 flv h264/h265 编码的流播放

- 支持 音频 ACC 播放

- 支持 2k 分辨率
