import Debug from '../utils/debug';
export type TFlvOptions = {
    container: string | HTMLElement;
    videoBuffer: number;
    decoder?: string;
    forceNoOffscreen?: boolean;
    hasAudio?: boolean;
    scaleMode: 0 | 1 | 2;
    debug: boolean;
    timeout: number;
    heartTimeout: number;
    heartTimeoutReplayTimes: number;
    loadingTimeout: number;
    loadingTimeoutReplay: boolean;
    keepScreenOn: boolean;
    isNotMute: boolean;
    useMSE: boolean;
    autoWasm: boolean;
    wasmDecodeErrorReplay: boolean;
    useWebFullScreen: boolean;
    width: number;
    height: number;
};
export type RequiredFlvOptions = Required<TFlvOptions> & {
    url: string;
    rotate?: 0 | 90 | 180 | 270;
    hasControl: any;
    openWebglAlignment?: boolean;
};
export type TPlayerTimes = {
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
};
export type TPlayerStats = {
    buf: number;
    fps: number;
    abps: number;
    vbps: number;
    ts: number;
};
export interface VideoInterface {
    player: any;
    destroy(): void;
    initCanvasViewSize(): void;
    render(msg: any): void;
    screenshot(filename?: string, format?: string, quality?: number, type?: string): void;
    clearView(): void;
    resize(): void;
}
export interface PlayerInterface {
    $container: any;
    debug: Debug;
    _opt: RequiredFlvOptions;
    /**
     * @description 播放
     * @param url
     * @param options
     */
    play(options?: TFlvOptions): Promise<unknown>;
    /**
     * @description 暂停
     */
    pause(flag?: boolean): Promise<unknown>;
    /**
     * @description 静音
     * @param flag
     */
    mute(flag?: boolean): void;
    /**
     * @description resize
     */
    resize(): void;
    /**
     * @description 关闭
     */
    close(): Promise<unknown>;
    /**
     * @description 销毁实例
     */
    destroy(): void;
}
export type VideoInfo = {
    width: string;
    height: string;
    encType: string;
    encTypeCode?: 7 | 12 | '';
};
export type ScreenshotFormat = Record<'png' | 'jpeg' | 'webp', string>;
