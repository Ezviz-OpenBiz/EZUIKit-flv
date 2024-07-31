import './Player.css';
import { useCallback, useEffect, useRef } from 'react';
import EzuikitFlv from 'ezuikit-flv';

function Player() {
  const playerRef = useRef();
  const urlRef = useRef();
  const containerRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    createPlayer();
    volumeRef.current.addEventListener('blur', (e) => {
      if (playerRef.current) {
        let value = (e.target.value || '').trim();
        if (value === '') {
          console.error('音量为空');
          return;
        }
        value = Number(value);
        if (value > 1 || value < 0) {
          console.error('音量设置错误， 取值范围在[0,1]');
          return;
        }

        value = parseInt((value * 100 + '').split('.')[0]) / 100; // 不使用 toFixed 是为了避免四舍五入问题
        playerRef.current.setVolume(value);
      } else {
        console.log('player 未初始化');
      }
    });
  }, []);

  const createPlayer = () => {
    const url = urlRef.current.value;
    if (!playerRef.current) {
      playerRef.current = new EzuikitFlv({
        container: containerRef.current,
        debug: true,
        url,
        useMSE: true,
        decoder: 'decoder.js' // 软解解码资源 （wasm 要和js 在同一个文件夹中）
      });
      playerRef.current.play();
    }
  };

  const handlePlay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
      createPlayer();
    }
  }, []);
  const handlePause = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  }, []);

  const handleDestroy = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
    }
  }, []);

  const handleOpenSound = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.openSound();
    }
  }, []);

  const handleCloseSound = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.closeSound();
    }
  }, []);

  const handleFullScreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.fullScreen();
    }
  }, []);

  const handleCancelFullScreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.cancelFullScreen();
    }
  }, []);

  const handleGetVersion = useCallback(() => {
    if (playerRef.current) {
      console.log(playerRef.current.getVersion());
    }
  }, []);

  return (
    <div>
      <div id="player-container" ref={containerRef}></div>
      <div>
        <div>
          <input
            style={{ width: 600 }}
            placeholder="输入播放地址"
            ref={urlRef}
            defaultValue="https://test12flow.ys7.com:443/v3/openlive/C91672728_1_2.flv?expire=1724231462&id=615956453163966465&t=3edca10be26e834f298923d4114bf9467d9778a7e0d1fa02342846031545b909&ev=100"
          />
        </div>
        <div>
          <button onClick={handlePlay}>播放</button>
          <button onClick={handlePause}>暂停</button>
          <button onClick={handleOpenSound}>打开声音</button>
          <button onClick={handleCloseSound}>关闭声音</button>
          <button onClick={handleFullScreen}>开启全屏</button>
          <button onClick={handleCancelFullScreen}>取消全屏（ESC）</button>
          <button onClick={handleGetVersion}>获取版本</button>
          <button onClick={handleDestroy}>销毁</button>
        </div>
        <div>
          音量：
          <input ref={volumeRef} placeholder="0-1" />
        </div>
      </div>
    </div>
  );
}

export default Player;
