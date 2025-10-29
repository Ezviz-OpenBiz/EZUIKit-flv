/**
 *
 * @description Flv 配置项
 * @typedef FlvOptions
 *
 * @property {string | HTMLElement} container 渲染容器
 * @property {string } id 渲染容器id 优先级比 container 高
 * @property {number=} videoBuffer 设置最大缓冲时长，单位秒，播放器会自动消除延迟。
 * @property {string=} decoder 解码库worker地址 默认 `decoder.js`, wasm 文件要和decoder在同一个文件夹中
 * @property {string=} staticPath 静态资源的了路径
 * @property {boolean=} autoPlay 自动播放 默认false
 * @property {boolean=} hasAudio 是否有音频，如果设置false，则不对音频数据解码，提升性能。
 * @property {number=} volume 音量大小, 默认 0.5。
 * @property {(0 | 1 | 2)=} scaleMode 设置渲染模式， 默认 1 等比缩放,最大边填充, 取值 0 | 1 | 2。
 * @property {boolean=} debug 是否开启控制台调试打印。默认 false
 * @property {number=} timeout 设置超时时长, 单位秒, 在连接成功之前(loading)和播放中途(heart),如果超过设定时长无数据返回,则回调timeout事件。默认 10
 * @property {number=} loadingTimeoutDelay 请求失败， 延时重试时长，单位秒。默认 3
 * @property {number=} loadingTimeoutReplayTimes  重试次数。默认 5,  -1 不限次数
 * @property {boolean=} keepScreenOn 开启屏幕常亮，在手机浏览器上, canvas标签渲染视频并不会像video标签那样保持屏幕常。默认 false
 * @property {boolean=} isMute 是否静音，默认是关闭声音播放的。默认 true
 * @property {boolean=} useMSE 是否开启MediaSource硬解码。视频编码只支持H.264视频（Safari on iOS不支持）。默认 false
 * @property {boolean=} autoWasm 在使用MSE或者Webcodecs 播放H265的时候，是否自动降级到wasm模式。默认 true
 * @property {boolean=} isLive 是否是直播。默认 true  @1.0.3
 * @property {boolean=} isEzviz 是否是萤石开放平台设备，  @1.0.3
 * @property {string=} accessToken 开放平台 accessToken， @1.0.3
 * @property {Object=} env  环境变量， @1.0.3
 * @property {string=} env.domain 开放平台 api domain, @1.0.3
 * @property {string=} timeZone  时区 默认 0， @1.0.3
 */
/**
 *
 * @description 播放器的状态 (getState() api)
 * @typedef PlayerState
 *
 * @property {boolean} playing 是否正在播放
 * @property {boolean} mute 是否静音
 * @property {boolean} fullscreen 是否全屏
 * @property {boolean} webFullscreen 是否web全屏
 * @property {boolean} loaded 是否加载完成
 * @property {string} volume 音量
 * @property {boolean} isDebug 是否打印日志
 */
/**
 *
 * @description 视频流清晰度
 * @typedef VideoLevel
 *
 * @property {number} videoLevel 清晰度 （0 | 1 | 2 | 3 | 4 | 5 | 6）
 * @property {number} streamTypeIn 1: 主码流，2：子码流
 * @property {string} name 清晰度名称
 * @property {string} url 播放地址
 * @property {stirng=} type 用来判断是否是默认主子码流清晰度 (compatible)
 */
export const Types: {};
export type FlvOptions = {
    /**
     * 渲染容器
     */
    container: string | HTMLElement;
    /**
     * 渲染容器id 优先级比 container 高
     */
    id: string;
    /**
     * 设置最大缓冲时长，单位秒，播放器会自动消除延迟。
     */
    videoBuffer?: number | undefined;
    /**
     * 解码库worker地址 默认 `decoder.js`, wasm 文件要和decoder在同一个文件夹中
     */
    decoder?: string | undefined;
    /**
     * 静态资源的了路径
     */
    staticPath?: string | undefined;
    /**
     * 自动播放 默认false
     */
    autoPlay?: boolean | undefined;
    /**
     * 是否有音频，如果设置false，则不对音频数据解码，提升性能。
     */
    hasAudio?: boolean | undefined;
    /**
     * 音量大小, 默认 0.5。
     */
    volume?: number | undefined;
    /**
     * 设置渲染模式， 默认 1 等比缩放,最大边填充, 取值 0 | 1 | 2。
     */
    scaleMode?: (0 | 1 | 2) | undefined;
    /**
     * 是否开启控制台调试打印。默认 false
     */
    debug?: boolean | undefined;
    /**
     * 设置超时时长, 单位秒, 在连接成功之前(loading)和播放中途(heart),如果超过设定时长无数据返回,则回调timeout事件。默认 10
     */
    timeout?: number | undefined;
    /**
     * 请求失败， 延时重试时长，单位秒。默认 3
     */
    loadingTimeoutDelay?: number | undefined;
    /**
     * 重试次数。默认 5,  -1 不限次数
     */
    loadingTimeoutReplayTimes?: number | undefined;
    /**
     * 开启屏幕常亮，在手机浏览器上, canvas标签渲染视频并不会像video标签那样保持屏幕常。默认 false
     */
    keepScreenOn?: boolean | undefined;
    /**
     * 是否静音，默认是关闭声音播放的。默认 true
     */
    isMute?: boolean | undefined;
    /**
     * 是否开启MediaSource硬解码。视频编码只支持H.264视频（Safari on iOS不支持）。默认 false
     */
    useMSE?: boolean | undefined;
    /**
     * 在使用MSE或者Webcodecs 播放H265的时候，是否自动降级到wasm模式。默认 true
     */
    autoWasm?: boolean | undefined;
    /**
     * 是否是直播。默认 true
     */
    isLive?: boolean | undefined;
};
export type PlayerState = {
    /**
     * 是否正在播放
     */
    playing: boolean;
    /**
     * 是否静音
     */
    mute: boolean;
    /**
     * 是否全屏
     */
    fullscreen: boolean;
    /**
     * 是否web全屏
     */
    webFullscreen: boolean;
    /**
     * 是否加载完成
     */
    loaded: boolean;
    /**
     * 音量
     */
    volume: string;
    /**
     * 是否打印日志
     */
    isDebug: boolean;
};
export type VideoLevel = {
    /**
     * 清晰度 （0 | 1 | 2 | 3 | 4 | 5 | 6）
     */
    videoLevel: number;
    /**
     * 1: 主码流，2：子码流
     */
    streamTypeIn: number;
    /**
     * 清晰度名称
     */
    name: string;
    /**
     * 播放地址
     */
    url: string;
    /**
     * 用来判断是否是默认主子码流清晰度 (compatible)
     */
    type?: stirng;
};
