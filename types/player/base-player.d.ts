export default class BasePlayer extends Emitter {
    constructor(container: any, options: any, Video: any);
    $container: any;
    _opt: any;
    debug: Debug;
    _loading: boolean;
    _playing: boolean;
    _hasLoaded: boolean;
    _checkHeartTimeout: any;
    _checkLoadingTimeout: any;
    _checkStatsInterval: any;
    _startBpsTime: any;
    _isPlayingBeforePageHidden: boolean;
    _stats: {
        buf: number;
        fps: number;
        abps: number;
        vbps: number;
        ts: number;
    };
    _times: {
        playInitStart: string;
        playStart: string;
        streamStart: string;
        streamResponse: string;
        demuxStart: string;
        decodeStart: string;
        videoStart: string;
        playTimestamp: string;
        streamTimestamp: string;
        streamResponseTimestamp: string;
        demuxTimestamp: string;
        decodeTimestamp: string;
        videoTimestamp: string;
        allTimestamp: string;
    };
    _videoTimestamp: number;
    _audioTimestamp: number;
    events: Events;
    video: any;
    control: Control;
    /**
     *
     * @param options
     */
    updateOption(options: any): void;
}
import Emitter from '../utils/emitter';
import Debug from '../utils/debug';
import Events from '../utils/events';
import Control from '../control';
