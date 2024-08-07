import { RequiredFlvOptions } from '../interface';
import Events from '../../utils/events';
import Video from './videoLoader';
import Control from '../../control';
import BasePlayer from '../base-player';
/**
 * @class
 *
 * @interface {PlayerInterface}
 */
export default class HardPlayer extends BasePlayer {
    player: any;
    video: Video;
    events: Events;
    _playing: boolean;
    _lastVolume: number;
    _loading: any;
    _audioTimestamp: number;
    _videoTimestamp: number;
    _times: any;
    $container: HTMLElement;
    _opt: RequiredFlvOptions;
    _hasLoaded: boolean;
    _checkHeartTimeout: number;
    _stats: any;
    _checkLoadingTimeout: number;
    control: Control;
    width: number;
    height: number;
    _pause: boolean;
    _decodedFrames: number;
    constructor(container: HTMLElement, options: RequiredFlvOptions);
    close(): Promise<unknown>;
    _createPlayer(options: RequiredFlvOptions): void;
    _flvEvents(): void;
    getOption(): RequiredFlvOptions;
    emitError(errorType: string, message?: string): void;
    /**
     * @description 销毁实例
     */
    destroy(): void;
    resetStats(): void;
    set fullscreen(value: any);
    get fullscreen(): any;
    set webFullscreen(value: boolean);
    get webFullscreen(): boolean;
    set loaded(value: boolean);
    get loaded(): boolean;
    set playing(value: boolean);
    get playing(): boolean;
    get volume(): number;
    set volume(value: number);
    get lastVolume(): number;
    set loading(value: any);
    get loading(): any;
    set audioTimestamp(value: number);
    get audioTimestamp(): number;
    set videoTimestamp(value: number);
    get videoTimestamp(): number;
    get isDebug(): boolean;
    /**
     * 心跳检查
     */
    checkHeart(): void;
    clearCheckHeartTimeout(): void;
    /**
     * @description 心跳检查，如果渲染间隔暂停了多少时间之后，就会抛出异常
     */
    checkHeartTimeout(): void;
    /**
     * @description 检查等待时间 （loading 等待时间）
     */
    checkLoadingTimeout(): void;
    handleRender(): void;
    clearCheckLoadingTimeout(): void;
    /**
     *
     * @param options
     */
    updateOption(options: Partial<RequiredFlvOptions>): void;
    /**
     * @description 播放
     * @param url
     * @param options
     * @returns {Promise}
     */
    play(): Promise<unknown>;
    _play(): Promise<void>;
    _close(): Promise<unknown>;
    pause(): Promise<unknown>;
    resumeAudioAfterPause(): void;
    mute(flag: boolean): void;
    resize(): void;
}
