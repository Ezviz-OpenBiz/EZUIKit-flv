import Audio from '../../audio';
import type FetchLoader from '../../stream/fetchLoader';
import DecoderWorker from '../../worker/index';
import Demux from '../../demux';
import NoSleep from '../../utils/noSleep';
import BasePlayer from '../base-player';
/**
 * @description 软解
 */
export default class SoftPlayer extends BasePlayer {
    _loadingTimeoutDelayTimer: null;
    audio: Audio;
    decoderWorker: DecoderWorker;
    stream: FetchLoader;
    demux: Demux;
    keepScreenOn: NoSleep;
    _checkLoadingTimeout: number | null;
    _checkHeartTimeout: number | null;
    constructor(container: Element, options: any);
    destroy(): void;
    set loaded(value: boolean);
    get loaded(): boolean;
    set playing(value: boolean);
    get playing(): boolean;
    get muted(): any;
    /**
     * 静音
     */
    set muted(muted: any);
    get volume(): any;
    set volume(value: any);
    set loading(value: boolean);
    get loading(): boolean;
    set audioTimestamp(value: number);
    get audioTimestamp(): number;
    set videoTimestamp(value: number);
    get videoTimestamp(): number;
    get isDebug(): boolean;
    /**
     *
     * @returns {Promise<unknown>}
     */
    _init(): Promise<void>;
    /**
     *
     * @param url
     * @returns {Promise<unknown>}
     */
    play(options: any): Promise<void>;
    /**
     *
     */
    close(): Promise<void>;
    _resumeAudioAfterPause(): void;
    _close(): Promise<void>;
    /**
     *
     * @param flag {boolean} 是否清除画面
     * @returns {Promise<unknown>}
     */
    pause(flag?: boolean): Promise<void>;
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
    /**
     * @description 清除加载超时
     */
    clearCheckLoadingTimeout(): void;
    clearStatsInterval(): void;
    handleRender(): void;
    updateStats(options?: any): void;
    resetStats(): void;
    enableWakeLock(): void;
    releaseWakeLock(): void;
    handlePlayToRenderTimes(): void;
    getOption(): any;
    emitError(errorType: string, message?: string): void;
    _enableSoundOnUserInteraction(): void;
}
