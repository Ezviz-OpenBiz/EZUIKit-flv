import "./Player.css";
import { useCallback, useEffect, useRef } from "react";
import EzuikitFlv from "ezuikit-flv";

function Player() {
  const playerRef = useRef();
  const urlRef = useRef();
  const containerRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    // createPlayer();
    volumeRef.current.addEventListener("blur", (e) => {
      if (playerRef.current) {
        let value = (e.target.value || "").trim();
        if (value === "") {
          console.error("音量为空");
          return;
        }
        value = Number(value);
        if (value > 1 || value < 0) {
          console.error("音量设置错误， 取值范围在[0,1]");
          return;
        }

        value = parseInt((value * 100 + "").split(".")[0]) / 100; // 不使用 toFixed 是为了避免四舍五入问题
        playerRef.current.volume = value;
      } else {
        console.log("player 未初始化");
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
        useMSE: true, // 硬解
        autoPlay: true, // 默认自动播放
        // decoder: "decoder.js", // 软解解码资源 （wasm 要和js 在同一个文件夹中）
      });
      // 调试api 使用
      window.player = playerRef.current;
    }
  };

  const handleInIt = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    createPlayer();
  }, []);

  const handlePlay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  }, []);

  const handlePause = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  }, []);

  const handleScreenshot = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.screenshot();
    }
  }, []);

  const handleDestroy = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
  }, []);

  const handleOpenSound = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.muted = false;
      playerRef.current.volume = 0.8;
    }
  }, []);

  const handleCloseSound = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.muted = true;
    }
  }, []);

  const handleFullScreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.fullscreen();
    }
  }, []);

  const handleCancelFullScreen = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.exitFullscreen();
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
            defaultValue="https://rtmp11open.ys7.com:9188/v3/openlive/BC7900686_1_1.flv?expire=1760672512&id=898898538039717888&t=007458c067a2322d39b95b43ee7a1abd7132e50935bc3ea1fb5b101f5a01af2a&ev=101&supportH265=1"
          />
        </div>
        <div>
          <button onClick={handleInIt}>init</button>
          <button onClick={handlePlay}>播放</button>
          <button onClick={handlePause}>暂停</button>
          <button onClick={handleScreenshot}>截图</button>
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
