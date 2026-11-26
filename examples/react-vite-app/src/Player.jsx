import './Player.css'
import 'ezuikit-flv/style.css' // 播放器样式
import EzuikitFlv from 'ezuikit-flv'
import { useCallback, useEffect, useRef } from 'react'

// flv 播放地址， https://open.ys7.com/console/device.html
const DEFAULT_URL =
  'https://rtmp05open.ys7.com:9188/v3/openlive/BC7799091_1_1.flv?expire=1769089970&id=934536106903339008&t=2bbdf238fb574aaf8430250f14e0c064024ccf4a41bcb93e60d3b3e69f8e5d12&ev=101&supportH265=1'

function Player() {
  const playerRef = useRef(null)
  const urlRef = useRef(null)
  const containerRef = useRef(null)
  const volumeRef = useRef(null)

  const destroyPlayer = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy()
      playerRef.current = null
    }
  }, [])

  // 组件卸载时销毁播放器
  useEffect(() => destroyPlayer, [destroyPlayer])

  const handleInit = useCallback(() => {
    destroyPlayer()
    playerRef.current = new EzuikitFlv({
      // 播放器挂载节点
      container: containerRef.current,
      // debug: true,
      url: urlRef.current.value,
      useMSE: true, // 硬解
      autoPlay: true, // 默认自动播放
      // decoder: 'decoder.js', // 软解解码资源 （wasm 要和 js 在同一个文件夹中）
      // themeData: null // 忽略主题 @since 2.0.0
    })
  }, [destroyPlayer])

  const handleVolumeBlur = useCallback((e) => {
    if (!playerRef.current) {
      console.log('player 未初始化')
      return
    }
    let value = (e.target.value || '').trim()
    if (value === '') {
      console.error('音量为空')
      return
    }
    value = Number(value)
    if (Number.isNaN(value) || value > 1 || value < 0) {
      console.error('音量设置错误， 取值范围在[0,1]')
      return
    }
    value = Math.floor(value * 100) / 100 // 不使用 toFixed 是为了避免四舍五入问题
    playerRef.current.muted = false
    playerRef.current.volume = value
  }, [])

  const handlePlay = () => playerRef.current?.play()
  const handlePause = () => playerRef.current?.pause()
  const handleScreenshot = () => playerRef.current?.screenshot()
  const handleFullScreen = () => playerRef.current?.fullscreen()
  const handleCancelFullScreen = () => playerRef.current?.exitFullscreen()
  const handleGetVersion = () => {
    if (playerRef.current) {
      console.log(playerRef.current.getVersion())
    }
  }
  const handleOpenSound = () => {
    if (playerRef.current) {
      playerRef.current.muted = false
      playerRef.current.volume = 0.8
    }
  }
  const handleCloseSound = () => {
    if (playerRef.current) {
      playerRef.current.muted = true
    }
  }

  return (
    <div>
      <div id="player-container" ref={containerRef}></div>
      <div>
        <div>
          <input
            style={{ width: 600 }}
            placeholder="输入播放地址"
            ref={urlRef}
            defaultValue={DEFAULT_URL}
          />
        </div>
        <div>
          <button onClick={handleInit}>init</button>
          <button onClick={handlePlay}>播放</button>
          <button onClick={handlePause}>暂停</button>
          <button onClick={handleScreenshot}>截图</button>
          <button onClick={handleOpenSound}>打开声音</button>
          <button onClick={handleCloseSound}>关闭声音</button>
          <button onClick={handleFullScreen}>开启全屏</button>
          <button onClick={handleCancelFullScreen}>取消全屏（ESC）</button>
          <button onClick={handleGetVersion}>获取版本</button>
          <button onClick={destroyPlayer}>销毁</button>
        </div>
        <div>
          音量：
          <input ref={volumeRef} placeholder="0-1" onBlur={handleVolumeBlur} />
        </div>
      </div>
    </div>
  )
}

export default Player
