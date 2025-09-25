import Emitter from '../utils/emitter';
import type BasePlayer from './base-player';
interface VideoInfo {
    width?: number;
    height?: number;
    encType?: string;
    encTypeCode?: number;
}
export default class CommonLoader<T extends HTMLCanvasElement | HTMLVideoElement> extends Emitter {
    init: boolean;
    protected _isFullScreen: boolean;
    _orientation: any;
    videoInfo: VideoInfo;
    player: any;
    $videoElement: T;
    constructor(player: BasePlayer);
    resetInit(): void;
    destroy(): void;
    updateVideoInfo(data: VideoInfo): void;
    _flvToMp4Codec(audioCodec: string | number): string;
    play(): void;
    pause(): void;
    clearView(): void;
}
export {};
