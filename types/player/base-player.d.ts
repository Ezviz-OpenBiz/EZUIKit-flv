import Emitter from '../utils/emitter';
import VideoLoader from './hard-player/videoLoader';
import CanvasLoader from './soft-player/canvasLoader';
import Debug from '../utils/debug';
import Events from '../utils/events';
import Control from '../control';
export interface PlayTimes {
    playInitStart: number;
    playStart: number;
    streamStart: number;
    streamResponse: number;
    demuxStart: number;
    decodeStart: number;
    videoStart: number;
    playTimestamp: number;
    streamTimestamp: number;
    streamResponseTimestamp: number;
    demuxTimestamp: number;
    decodeTimestamp: number;
    videoTimestamp: number;
    allTimestamp: number;
}
export default class BasePlayer extends Emitter {
    $container: Element;
    _opt: any;
    debug: Debug;
    _muted: any;
    _volume: any;
    _loading: boolean;
    _playing: boolean;
    _hasLoaded: boolean;
    _checkHeartTimeout: number | null;
    _checkStatsInterval: number;
    _startBpsTime: number;
    _isPlayingBeforePageHidden: boolean;
    _stats: {
        buf: number;
        fps: number;
        abps: number;
        vbps: number;
        ts: number;
    };
    _times: PlayTimes;
    _videoTimestamp: number;
    _audioTimestamp: number;
    events: Events;
    video: VideoLoader | CanvasLoader;
    _fullscreen: boolean;
    control: Control;
    constructor(container: Element, options: any, Video: new (player: BasePlayer) => VideoLoader | CanvasLoader);
    get muted(): any;
    set muted(muted: any);
    protected _updateMuted(muted: boolean): void;
    get volume(): any;
    set volume(value: any);
    protected _updateVolume(value: number): void;
    destroy(): void;
    /**
     *
     * @param options
     */
    updateOption(options: any): void;
    /**
     * @description 重置尺寸
     */
    resize(): void;
}
