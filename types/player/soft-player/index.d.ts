export default class SoftPlayer extends BasePlayer {
    constructor(container: any, options: any);
    audio: Audio;
    decoderWorker: DecoderWorker;
    stream: Stream;
    demux: Demux;
    _lastVolume: number;
    keepScreenOn: NoSleep;
    set volume(value: number);
    get volume(): number;
    destroy(): void;
    set fullscreen(value: any);
    get fullscreen(): any;
    set webFullscreen(value: any);
    get webFullscreen(): any;
    set loaded(value: boolean);
    get loaded(): boolean;
    set playing(value: boolean);
    get playing(): boolean;
    set loading(value: boolean);
    get loading(): boolean;
    get lastVolume(): number;
    set audioTimestamp(value: number);
    get audioTimestamp(): number;
    set videoTimestamp(value: number);
    get videoTimestamp(): number;
    get isDebug(): boolean;
    /**
     *
     * @returns {Promise<unknown>}
     */
    init(): Promise<unknown>;
    /**
     *
     * @param url
     * @returns {Promise<unknown>}
     */
    play(options: any): Promise<unknown>;
    /**
     *
     */
    close(): Promise<any>;
    _resumeAudioAfterPause(): void;
    _close(): Promise<any>;
    /**
     *
     * @param flag {boolean} 是否清除画面
     * @returns {Promise<unknown>}
     */
    pause(flag?: boolean): Promise<unknown>;
    /**
     * @description 静音
     * @param {boolean} flag
     */
    mute(flag: boolean): void;
    /**
     * @description 重置尺寸
     */
    resize(): void;
    _onlyMseOrWcsVideo(): any;
    /**
     * 心跳检查
     */
    checkHeart(): void;
    /**
     * @description 心跳检查，如果渲染间隔暂停了多少时间之后，就会抛出异常
     */
    checkHeartTimeout(): void;
    checkStatsInterval(): void;
    clearCheckHeartTimeout(): void;
    /**
     * @description 检查等待时间 （loading 等待时间）
     */
    checkLoadingTimeout(): void;
    clearCheckLoadingTimeout(): void;
    clearStatsInterval(): void;
    handleRender(): void;
    updateStats(options: any): void;
    resetStats(): void;
    enableWakeLock(): void;
    releaseWakeLock(): void;
    handlePlayToRenderTimes(): void;
    getOption(): any;
    emitError(errorType: any, message?: string): void;
}
import BasePlayer from '../base-player';
import Audio from '../../audio';
import DecoderWorker from '../../worker/index';
import Stream from '../../stream';
import Demux from '../../demux';
import NoSleep from '../../utils/noSleep';
