export default EzuikitFlv;
/**
 * @classdesc EzuikitFlv.js 播放flv直播流， 支持播放h264/h265的直播视频流
 * @example
 * ```js
 * const flv = new EzuikitFlv({
 *  id: "EleId",
 *  url: "https://open.ys7.com/v3/openlive/E71992743_1_1.flv"
 * })
 * ```
 */
declare class EzuikitFlv extends EventEmitter<string | symbol, any> {
    /**
     * @description ERROR
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
    /** */
    static TIMEOUT: {
        loadingTimeout: string;
        delayTimeout: string;
    };
    /**
     * @private
     * @param {FlvOptions} options
     * @returns {FlvOptions}
     */
    private static _setOptions;
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
     * ```js
     * EzuikitFlv.supportType({url: "https://open.ys7.com/v3/openlive/E71992743_1_1.flv",  type:'flv'})
     * ```
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
    event: EventEmitter<string | symbol, any>;
    _opt: FlvOptions;
    $container: any;
    _loadingTimeoutReplayTimes: number;
    _heartTimeoutReplayTimes: number;
    events: Events;
    /**
     * @description 销毁
     * @example
     * flv.destroy()
     */
    destroy(): void;
    player: Player;
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
     * @example
     * flv.setDebug(false)
     */
    setDebug(value: boolean): void;
    /**
     * @description 设置日志
     * @param {object} options 日志设置 {level： 'INFO' | 'LOG' | 'WARN' | 'ERROR'}
     * @returns {void}
     */
    setLogger(opt?: {}): void;
    /**
     * @description 关闭声音
     * @returns {void}
     * @example
     * flv.closeSound()
     */
    closeSound(): void;
    /**
     * @description 开启声音 默认音量 0.5
     * @returns {void}
     * @example
     * flv.openSound() //
     */
    openSound(): void;
    /**
     * @description 设置音量
     * @param {number} value 音量 0～1
     * @returns {void}
     * @example
     * flv.setVolume(0.5)
     */
    setVolume(value: number): void;
    set volume(value: any);
    get volume(): any;
    /**
     * @description 获取音量， 音量 0～1
     * @returns {number}
     * @example
     * flv.getVolume()
     */
    getVolume(): number;
    /**
     * @description 音频恢复
     * @returns {void}
     * @example
     * flv.audioResume()
     */
    audioResume(): void;
    /**
     * @description 设置超时时长, 单位秒 在连接成功之前和播放中途,如果超过设定时长无数据返回,则回调timeout事件
     * @private
     * @param {number} time 设置超时时长, 单位秒
     * @returns {void}
     * @example
     * flv.setTimeout(3)
     */
    private setTimeout;
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
    /**
     * @description 关闭视频,不释放底层资源
     * @private
     * @returns {void}
     * @example
     * flv.close()
     */
    private close;
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
     * @description 播放
     * @private
     * @param {string} url
     * @param {object=} options
     * @returns {Promise<unknown>}
     */
    private _play;
    /**
     * @description 重新调整视图大小
     * @param {number=} width  宽
     * @param {number=} height  高
     * @example
     * flv.resize()
     */
    resize(width?: number | undefined, height?: number | undefined): void;
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
     * @returns {Promise}
     * @param {number} deg
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
     * @description 全屏(取消全屏)播放视频
     * @private
     * @param {Boolean} flag
     */
    private _setFullscreen;
    /**
     * @description 全屏播放视频(不支持移动端)
     * @returns {Promise}
     * @example
     * flv.fullScreen() // 全屏
     *
     */
    fullScreen(): Promise<any>;
    /**
     * @description 全屏播放视频(不支持移动端)
     * @returns {Promise}
     * @example
     * flv.fullscreen() // 全屏
     *
     */
    fullscreen(): Promise<any>;
    /**
     * @description 退出全屏播放视频
     * @returns {Promise}
     * @example
     * flv.cancelFullScreen() // 退出全屏
     */
    cancelFullScreen(): Promise<any>;
    /**
     * @description 取消全屏播放视频
     * @returns {Promise}
     * @example
     * flv.exitFullscreen() // 全屏
     */
    exitFullscreen(): Promise<any>;
    /**
     * @description 退出全屏播放视频
     * @private
     * @returns {Promise}
     */
    private _exitFullscreen;
    /**
     * @description 获取播放器的状态
     * @returns {PlayerState} 播放器的状态
     * @example
     * flv.getState()
     */
    getState(): PlayerState;
    /**
     * @description 获取设置
     * @returns {object}
     */
    getOptions(): object;
    /**
     * @description 获取版本
     * @returns {string}
     */
    getVersion(): string;
}
import EventEmitter from 'eventemitter3';
import Events from './utils/events';
import Player from './player';
