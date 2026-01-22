export declare const PLAYER_PLAY_PROTOCOL: {
    websocket: number;
    fetch: number;
    webrtc: number;
};
export declare const DEMUX_TYPE: {
    flv: string;
    m7s: string;
};
export declare const FILE_SUFFIX: {
    mp4: string;
    webm: string;
};
export declare const MEDIA_SOURCE_UPDATE_END_TIMEOUT: number;
export declare const DEFAULT_PLAYER_OPTIONS: {
    videoBuffer: number;
    videoBufferDelay: number;
    scaleMode: number;
    debug: boolean;
    heartTimeout: number;
    heartTimeoutReplayTimes: number;
    timeout: number;
    loadingTimeout: number;
    loadingTimeoutDelay: number;
    loadingTimeoutReplayTimes: number;
    keepScreenOn: boolean;
    muted: boolean;
    hasAudio: boolean;
    volume: number;
    hasVideo: boolean;
    decoder: string;
    staticPath: string;
    url: string;
    rotate: number;
    isLive: boolean;
    forceNoOffscreen: boolean;
    protocol: number;
    demuxType: string;
    useMSE: boolean;
    autoWasm: boolean;
    wasmDecodeErrorReplay: boolean;
    openWebglAlignment: boolean;
    wasmDecodeAudioSyncVideo: boolean;
    autoPlay: boolean;
    loggerOptions: {
        level: string;
    };
    mutedShowAutoReload: boolean;
    /** 录制结果是否直接下载 */
    downloadRecord: boolean;
};
export declare const WORKER_CMD_TYPE: {
    init: string;
    initVideo: string;
    render: string;
    playAudio: string;
    initAudio: string;
    kBps: string;
    decode: string;
    audioCode: string;
    videoCode: string;
    wasmError: string;
};
export declare const WASM_ERROR: {
    invalidNalUnitSize: string;
};
export declare const MEDIA_TYPE: {
    audio: number;
    video: number;
};
export declare const FLV_MEDIA_TYPE: {
    audio: number;
    video: number;
};
export declare const WORKER_SEND_TYPE: {
    init: string;
    decode: string;
    audioDecode: string;
    videoDecode: string;
    close: string;
    updateConfig: string;
};
export declare const EVENTS: {
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
    recordInputData: string;
    startRecord: string;
    stopRecord: string;
    flvStream: string;
};
export declare const FLV_EVENTS: {
    load: string;
    timeUpdate: string;
    videoInfo: string;
    audioInfo: string;
    error: string;
    kBps: string;
    log: string;
    start: string;
    delayTimeout: string;
    fullscreen: string;
    play: string;
    pause: string;
    mute: string;
    stats: string;
    volumechange: string;
    performance: string;
    playToRenderTimes: string;
    flvStream: string;
};
export declare const EVENTS_ERROR: {
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
export declare const WEBSOCKET_STATUS: {
    notConnect: string;
    open: string;
    close: string;
    error: string;
};
export declare const BUFFER_STATUS: {
    empty: string;
    buffering: string;
    full: string;
};
export declare const SCREENSHOT_TYPE: {
    download: string;
    base64: string;
    blob: string;
};
export declare const VIDEO_ENC_TYPE: {
    7: string;
    12: string;
};
export declare const VIDEO_ENC_CODE: {
    h264: number;
    h265: number;
};
export declare const AUDIO_ENC_TYPE: {
    10: string;
    7: string;
    8: string;
};
export declare const H265_NAL_TYPE: {
    vps: number;
    sps: number;
    pps: number;
};
export declare const CONTROL_HEIGHT = 38;
export declare const CANVAS_RENDER_TYPE: {
    webcodecs: string;
    webgl: string;
    offscreen: string;
};
export declare const ENCODED_VIDEO_TYPE: {
    key: string;
    delta: string;
};
export declare const MP4_CODECS: {
    avc: string;
    hev: string;
};
export declare const MEDIA_SOURCE_STATE: {
    ended: string;
    open: string;
    closed: string;
};
export declare const FRAG_DURATION: number;
export declare const AUDIO_SYNC_VIDEO_DIFF = 1000;
export declare const HOT_KEY: {
    esc: number;
    arrowUp: number;
    arrowDown: number;
};
export declare const WCS_ERROR: {
    keyframeIsRequiredError: string;
    canNotDecodeClosedCodec: string;
};
export declare const FETCH_ERROR: {
    abortError1: string;
    abortError2: string;
    abort: string;
};
/**
 * 开放平台https接口
 */
export declare const HTTP_ENV_DOMAIN = "https://open.ys7.com/";
