# react-vite-app

EZUIKit-flv 在 React 18 + Vite 中的使用示例。

## 安装依赖

```sh
pnpm install
```

## 开发

```sh
pnpm dev
```

## 构建

```sh
pnpm build
```

## 说明

- 播放器样式需单独引入：`import 'ezuikit-flv/style.css'`
- 软解需要 `decoder.js` 和 `decoder.wasm`（须在同一目录），本示例放在 `public/` 下，可通过 `decoder: 'decoder.js'` 启用。
