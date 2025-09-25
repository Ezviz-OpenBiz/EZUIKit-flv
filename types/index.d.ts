export default EzuikitFlv;
/**
 * @classdesc EzuikitFlv.js 播放flv直播流， 支持播放h264/h265的直播视频流
 * @example
 *
 * import "ezuikit-flv/style.css"
 * import EzuikitFlv from 'ezuikit-flv'
 *
 * const flv = new EzuikitFlv({
 *  id: "EleId",
 *  url: "https://open.ys7.com/v3/openlive/E71992743_1_1.flv"
 * })
 */
declare class EzuikitFlv extends Theme {
    /**
     * @description EzuikitFlv error events
     * @static
     * @member
     * @example
     * EzuikitFlv.ERROR.playError
     */
    static ERROR: {
        playError: string;
        fetchError: string;
        websocketError: string;
        webcodecsH265NotSupport: string;
        webcodecsDecodeError: string;
        webcodecsWidthOrHeightChange: string;
        mediaSourceH265NotSupport: string;
        mediaSourceFull: string;
        mseSourceBufferError: string;
        mediaSourceAppendBufferError: string;
        mediaSourceBufferListLarge: string;
        mediaSourceAppendBufferEndTimeout: string;
        wasmDecodeError: string;
        webglAlignmentError: string;
    };
    static EVENTS: {
        fullscreenChange: string;
        orientationChange: string;
        decoderWorkerInit: string;
        play: string;
        playing: string;
        pause: string;
        mute: string;
        load: string;
        loading: string;
        loaded: string;
        videoInfo: string;
        timeUpdate: string;
        timeUpdateOSD: string;
        audioInfo: string;
        log: string;
        error: string;
        kBps: string;
        timeout: string;
        heartTimeout: string;
        heartRetryTimes: string;
        delayTimeout: string;
        loadingTimeout: string;
        loadingRetryTimes: string;
        stats: string;
        performance: string;
        buffer: string;
        videoFrame: string;
        start: string;
        metadata: string;
        resize: string;
        streamEnd: string;
        streamSuccess: string;
        streamMessage: string;
        streamError: string;
        volumechange: string;
        audioCodecUnsupported: string;
        unrecoverableEarlyEof: string;
        destroy: string;
        mseSourceOpen: string;
        mseSourceClose: string;
        mseSourceBufferError: string;
        mseSourceBufferBusy: string;
        mseSourceBufferFull: string;
        videoWaiting: string;
        videoTimeUpdate: string;
        videoSyncAudio: string;
        playToRenderTimes: string;
        localVideoRecords: string;
        getDefinitionListResult: string;
        definitionChange: string;
        definitionListChange: string;
        playbackRateListChange: string;
        playbackRateChange: string;
        decoderLoaded: string;
        end: string;
    } & {
        loading: string;
        play: string;
        capturePicture: string;
        volumechange: string;
        audioInfo: string;
        videoInfo: string;
        fullscreen: string;
        exitFullscreen: string;
        fullscreenChange: string;
        resize: string;
        orientationChange: string;
        audioCodecUnsupported: string;
        changeTheme: string;
        changeRecType: string;
        changeDefinition: string;
        changeSpeed: string;
        control: {
            play: string; /**
             * @description 初始化播放
             * @private
             * @param {string | HTMLElement} $container
             * @param {FlvOptions} options
             * @return {void}
             */
            capturePicture: string;
            volumechange: string;
            volumePanelOpenChange: string;
            controlsBarOpenChange: string;
            headerMoreShow: string;
            footerMoreShow: string;
            beforeMountControls: string;
            mountedControls: string;
            beforeUnmountControls: string;
            unmountedControls: string;
            changeRecType: string;
            changeDefinition: string;
            definitionPanelOpenChange: string;
            changeSpeed: string;
            speedPanelOpenChange: string;
        };
        theme: {
            beforeDestroy: string;
            destroyed: string;
        };
        message: string;
    };
    static QUALITY_ENUM: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    /** 旋转角度 */
    static ROTATE: number[];
    /** */
    static TIMEOUT: {
        delayTimeout: string;
    };
    /**
     * @private
     * @param {FlvOptions} options
     * @returns {FlvOptions}
     */
    private static _setOptions;
    /**
     * 版本号 EzuikitFlv.version
     * @example
     * EzuikitFlv.version
     */
    static version: string;
    /**
     * @description 静态方法 判断是否支持播放地址
     * @param {Object} options
     * @param {string=} options.url
     * @param {string=} options.type
     * @returns {boolean}
     * @static
     *
     * @example
     * EzuikitFlv.supportType({url: "https://open.ys7.com/v3/openlive/E71992743_1_1.flv",  type:'flv'})
     */
    static supportType(options: {
        url?: string | undefined;
        type?: string | undefined;
    }): boolean;
    /**
     * @constructor
     * @param {FlvOptions} options
     */
    constructor(options: FlvOptions);
    urlInfo: {};
    /** @type {Services} */
    services: Services;
    /** @private */
    private _loadingTimeoutDelayTimer;
    _heartTimeoutDelayTimer: any;
    _opt: any;
    $container: any;
    _heartTimeoutDelayTimes: number;
    _loadingTimeoutReplayTimes: number;
    events: Events;
    _videoInfo: {};
    _currentPlayDate: string;
    definitionList: any[];
    definition: {};
    /**
     * @private
     */
    private _playbackRate;
    playbackRateList: number[];
    playbackRecords: any[];
    _onvisibilitychange(): void;
    /**
     * https 接口调用 仅针对萤石设备
     * @since @1.0.3
     * @private
     */
    private _httpServices;
    /**
     * @description 自定义设置清晰度列表， 仅对萤石设备预览生效, 需要第一次 definitionListChange 事件监听后调用, 不然会被接口覆盖
     * @param {VideoLevel} list
     * @since 1.0.3
     * @returns {void}
     */
    setDefinitionList(list: VideoLevel): void;
    /**
     * @description 切换清晰度，仅对萤石设备预览生效
     * @param {VideoLevel} definition 清晰
     * @since 1.0.3
     * @returns {Promise<number>}  0 成功（不代表取流成功）， 1 失败
     */
    switchDefinition(definition: VideoLevel): Promise<number>;
    /**
     * @description 自定义设置倍速列表, 仅对萤石设备回放生效
     * @param {Array<number>} list 倍速列表
     * @since 1.0.3
     * @returns {void}
     */
    setPlaybackRateList(list: Array<number>): void;
    /**
     * @description 设置倍速，仅对萤石设备回放生效
     * @since 1.0.3
     */
    set playbackRate(rate: number);
    /**
     * @description 获取倍速
     * @since 1.0.3
     */
    get playbackRate(): number;
    /**
     * @description 切换倍速，仅对萤石设备回放生效
     * @param {number} rate
     * @since 1.0.3
     * @returns {Promise<number>} 0 成功（不代表取流成功）， 1 失败
     */
    switchPlaybackRate(rate: number): Promise<number>;
    /**
     * @description 获取回放地址
     * @private
     * @returns {Promise<string>} // 空字符表示失败
     */
    private _getNewRecordPlayUrl;
    /**
     * @description 是否是萤石开放平台回放
     * @param {string} url
     * @private
     * @since @1.0.3
     * @returns {boolean}
     */
    private _isEzvizPlayback;
    player: Player;
    /**
     * @private
     * @param {obejct} videoInfo
     */
    private _handlevideoInfo;
    /**
     * @description 初始化播放
     * @private
     * @param {string | HTMLElement} $container
     * @param {FlvOptions} options
     * @return {void}
     */
    private _initPlayer;
    /**
     * @description 重置播放器
     * @private
     * @param {FlvOptions} options
     */
    private _resetPlayer;
    /**
     * @description 绑定事件
     * @private
     */
    private _bindEvents;
    /**
     * @description 是否开启控制台调试打印
     * @param {boolean} value true: 开启， false: 关闭
     * @returns {void}
     * @deprecated 推荐 player.setLogger({level: "WARN"})， 后面版本会移除
     * @example
     * player.setDebug(false)
     */
    setDebug(value: boolean): void;
    /**
     * @description 设置日志
     * @param {object} options 日志设置 {level： 'INFO' | 'LOG' | 'WARN' | 'ERROR'}
     * @returns {void}
     */
    setLogger(opt?: {}): void;
    /**
     * @description 关闭声音（非静音）
     * @returns {void}
     * @deprecated 推荐 player.volume = 0， 后面版本会移除
     * @example
     * player.closeSound()
     */
    closeSound(): void;
    /**
     * @description 开启声音 默认音量 0.8,
     * @returns {void}
     * @deprecated 推荐 player.volume = 0.8， 后面版本会移除
     * @example
     * player.openSound() //
     */
    openSound(): void;
    /**
     * @description 设置音量
     * @param {number} value 音量 0～1
     * @returns {void}
     * @deprecated 后面版本会移除, 推荐 player.volume = 0.8,
     * @example
     * player.setVolume(0.8)
     */
    setVolume(value: number): void;
    /**
     * @description 获取音量， 音量 0～1
     * @returns {number}
     * @deprecated 后面版本会移除, 推荐 player.volume
     * @example
     * player.getVolume()
     */
    getVolume(): number;
    /**
     * @description 音频恢复
     * @returns {void}
     * @example
     * player.audioResume()
     */
    audioResume(): void;
    /**
     * @description 设置渲染的模式 (video 不支持)
     * @private
     * @param {0 | 1 | 2} type 0: 完全填充canvas区域; 1: 等比缩放, 最大边填充 ; 2: 等比缩放后,最小边填充，完全填充canvas区域,画面不被拉伸,没有黑边,但画面显示不全
     * @returns {Promise}
     * @example
     * flv.setScaleMode(1)
     */
    private setScaleMode;
    /**
     * @description 暂停
     * @returns {Promise<unknown>}
     * @example
     * flv.pause()
     */
    pause(): Promise<unknown>;
    _delayTimeoutTimer: any;
    /**
     * @description 清理画布为黑色背景
     * @private
     * @returns {void}
     * @example
     * flv.clearView()
     */
    private clearView;
    /**
     * @description 播放
     * @param {(string | FlvOptions)=} options
     * @returns {Promise}
     * @example
     * flv.play()
     */
    play(options?: (string | FlvOptions) | undefined): Promise<any>;
    /**
     * @private
     */
    private __play;
    /**
     * @description 播放
     * @private
     * @param {string} url
     * @param {object=} options
     * @returns {Promise<unknown>}
     */
    private _play;
    /**
     * @private
     */
    private _onDelayTimeout;
    /**
     * @private
     */
    private _onHeartTimeout;
    /**
     * @private
     */
    private _onLoadingTimeout;
    /**
     * @private
     */
    private _onStreamSuccess;
    /**
     * @private
     */
    private _onStreamError;
    /**
     * 获取萤石直播间播放失败的原因
     * @private
     */
    private _getDeviceStreamErrorInfo;
    /**
     * @description 设置最大缓冲时长，单位秒，播放器会自动消除延迟。软解
     * @private
     * @param {number} time  大缓冲时长 s
     * @example
     * flv.setBufferTime(3)
     */
    private setBufferTime;
    /**
     * @description 设置旋转角度，支持，0(默认), 90, 180, 270 四个值。
     * @param {number} deg 旋转角度取值 EzuikitFlv.ROTATE
     * @returns {Promise}
     * @deprecated 不在使用
     * @example
     * flv.setRotate(90) // 旋转90度
     */
    setRotate(deg: number): Promise<any>;
    /**
     * @description 返回是否加载完毕
     * @private
     * @returns {boolean}
     */
    private hasLoaded;
    /**
     * @description 开启屏幕常亮，在手机浏览器上
     * @returns {void}
     * @example
     * flv.setKeepScreenOn()
     */
    setKeepScreenOn(): void;
    /**
     * 当前视频的信息, 推荐使用监听 videoInfo 事件
     * @returns {Object}
     */
    get videoInfo(): any;
    /**
     * 当前播放时间（从0 开始 单位秒）
     * @returns {number}
     */
    get currentTime(): number;
    /**
     * @description 截图，调用后弹出下载框保存截图, (硬解下 Mac Safari 部分截图结果是黑色的)
     * @param {string=} filename 保存的文件名, 默认 时间戳
     * @param {string=} format 截图的格式，可选png或jpeg或者webp ,默认 png
     * @param {number=} quality 当格式是jpeg或者webp时，压缩质量，取值0 ~ 1 ,默认 0.92
     * @param {("download" | "base64" | "blob")} type  download,base64,blob, 默认download
     *
     * @returns {string | Blob | undefined}   undefined 代表截图失败
     * @since 1.0.3
     * @example
     * player.screenshot()
     * player.screenshot("filename", "jpeg", 0.7, "download")
     */
    screenshot(filename?: string | undefined, format?: string | undefined, quality?: number | undefined, type?: ("download" | "base64" | "blob")): string | Blob | undefined;
    /**
     * @description 获取播放器的状态
     * @returns {PlayerState} 播放器的状态
     * @example
     * player.getState()
     */
    getState(): PlayerState;
    /**
     * @description 获取设置
     * @returns {object}
     *
     * @example
     * player.getOptions()
     */
    getOptions(): object;
    /**
     * @description 获取版本
     * @returns {string}
     *
     * @example
     * player.getVersion()
     */
    getVersion(): string;
}
import Theme from '@ezviz/player-theme';
import Services from './services';
import Events from './utils/events';
import Player from './player';
