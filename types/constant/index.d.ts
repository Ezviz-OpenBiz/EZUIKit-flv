export namespace PLAYER_PLAY_PROTOCOL {
    let websocket: number;
    let fetch: number;
    let webrtc: number;
}
export namespace DEMUX_TYPE {
    let flv: string;
    let m7s: string;
}
export namespace FILE_SUFFIX {
    let mp4: string;
    let webm: string;
}
export const MEDIA_SOURCE_UPDATE_END_TIMEOUT: number;
export namespace DEFAULT_PLAYER_OPTIONS {
    export let videoBuffer: number;
    export let videoBufferDelay: number;
    export let scaleMode: number;
    export let debug: boolean;
    export let loadingTimeout: number;
    export let heartTimeout: number;
    export let timeout: number;
    export let loadingTimeoutReplay: boolean;
    export let heartTimeoutReplay: boolean;
    export let loadingTimeoutReplayTimes: number;
    export let heartTimeoutReplayTimes: number;
    export let keepScreenOn: boolean;
    export let isNotMute: boolean;
    export let hasAudio: boolean;
    export let hasVideo: boolean;
    export let decoder: string;
    export let url: string;
    export let rotate: number;
    export let forceNoOffscreen: boolean;
    import protocol = PLAYER_PLAY_PROTOCOL.fetch;
    export { protocol };
    import demuxType = DEMUX_TYPE.flv;
    export { demuxType };
    export let useMSE: boolean;
    export let autoWasm: boolean;
    export let wasmDecodeErrorReplay: boolean;
    export let openWebglAlignment: boolean;
    export let wasmDecodeAudioSyncVideo: boolean;
    export let useWebFullScreen: boolean;
}
export namespace WORKER_CMD_TYPE {
    let init: string;
    let initVideo: string;
    let render: string;
    let playAudio: string;
    let initAudio: string;
    let kBps: string;
    let decode: string;
    let audioCode: string;
    let videoCode: string;
    let wasmError: string;
}
export namespace WASM_ERROR {
    let invalidNalUnitSize: string;
}
export namespace MEDIA_TYPE {
    let audio: number;
    let video: number;
}
export namespace FLV_MEDIA_TYPE {
    let audio_1: number;
    export { audio_1 as audio };
    let video_1: number;
    export { video_1 as video };
}
export namespace WORKER_SEND_TYPE {
    let init_1: string;
    export { init_1 as init };
    let decode_1: string;
    export { decode_1 as decode };
    export let audioDecode: string;
    export let videoDecode: string;
    export let close: string;
    export let updateConfig: string;
}
export namespace EVENTS {
    export let fullscreen: string;
    export let webFullscreen: string;
    export let decoderWorkerInit: string;
    export let play: string;
    export let playing: string;
    export let pause: string;
    export let mute: string;
    export let load: string;
    export let loading: string;
    export let videoInfo: string;
    export let timeUpdate: string;
    export let audioInfo: string;
    export let log: string;
    export let error: string;
    let kBps_1: string;
    export { kBps_1 as kBps };
    let timeout_1: string;
    export { timeout_1 as timeout };
    export let delayTimeout: string;
    let loadingTimeout_1: string;
    export { loadingTimeout_1 as loadingTimeout };
    export let stats: string;
    export let performance: string;
    export let buffer: string;
    export let videoFrame: string;
    export let start: string;
    export let metadata: string;
    export let resize: string;
    export let streamEnd: string;
    export let streamSuccess: string;
    export let streamMessage: string;
    export let streamError: string;
    export let volumechange: string;
    export let destroy: string;
    export let mseSourceOpen: string;
    export let mseSourceClose: string;
    export let mseSourceBufferError: string;
    export let mseSourceBufferBusy: string;
    export let mseSourceBufferFull: string;
    export let videoWaiting: string;
    export let videoTimeUpdate: string;
    export let videoSyncAudio: string;
    export let playToRenderTimes: string;
}
export namespace FLV_EVENTS {
    import load_1 = EVENTS.load;
    export { load_1 as load };
    import timeUpdate_1 = EVENTS.timeUpdate;
    export { timeUpdate_1 as timeUpdate };
    import videoInfo_1 = EVENTS.videoInfo;
    export { videoInfo_1 as videoInfo };
    import audioInfo_1 = EVENTS.audioInfo;
    export { audioInfo_1 as audioInfo };
    import error_1 = EVENTS.error;
    export { error_1 as error };
    import kBps_2 = EVENTS.kBps;
    export { kBps_2 as kBps };
    import log_1 = EVENTS.log;
    export { log_1 as log };
    import start_1 = EVENTS.start;
    export { start_1 as start };
    import timeout_2 = EVENTS.timeout;
    export { timeout_2 as timeout };
    import loadingTimeout_2 = EVENTS.loadingTimeout;
    export { loadingTimeout_2 as loadingTimeout };
    import delayTimeout_1 = EVENTS.delayTimeout;
    export { delayTimeout_1 as delayTimeout };
    let fullscreen_1: string;
    export { fullscreen_1 as fullscreen };
    import webFullscreen_1 = EVENTS.webFullscreen;
    export { webFullscreen_1 as webFullscreen };
    import play_1 = EVENTS.play;
    export { play_1 as play };
    import pause_1 = EVENTS.pause;
    export { pause_1 as pause };
    import mute_1 = EVENTS.mute;
    export { mute_1 as mute };
    import stats_1 = EVENTS.stats;
    export { stats_1 as stats };
    import volumechange_1 = EVENTS.volumechange;
    export { volumechange_1 as volumechange };
    import performance_1 = EVENTS.performance;
    export { performance_1 as performance };
    import playToRenderTimes_1 = EVENTS.playToRenderTimes;
    export { playToRenderTimes_1 as playToRenderTimes };
}
export namespace EVENTS_ERROR {
    export let playError: string;
    export let fetchError: string;
    export let websocketError: string;
    export let webcodecsH265NotSupport: string;
    export let webcodecsDecodeError: string;
    export let webcodecsWidthOrHeightChange: string;
    export let mediaSourceH265NotSupport: string;
    import mediaSourceFull = EVENTS.mseSourceBufferFull;
    export { mediaSourceFull };
    import mseSourceBufferError_1 = EVENTS.mseSourceBufferError;
    export { mseSourceBufferError_1 as mseSourceBufferError };
    export let mediaSourceAppendBufferError: string;
    export let mediaSourceBufferListLarge: string;
    export let mediaSourceAppendBufferEndTimeout: string;
    export let wasmDecodeError: string;
    export let webglAlignmentError: string;
}
export namespace WEBSOCKET_STATUS {
    export let notConnect: string;
    export let open: string;
    let close_1: string;
    export { close_1 as close };
    let error_2: string;
    export { error_2 as error };
}
export namespace BUFFER_STATUS {
    let empty: string;
    let buffering: string;
    let full: string;
}
export namespace SCREENSHOT_TYPE {
    let download: string;
    let base64: string;
    let blob: string;
}
export const VIDEO_ENC_TYPE: {
    7: string;
    12: string;
};
export namespace VIDEO_ENC_CODE {
    let h264: number;
    let h265: number;
}
export const AUDIO_ENC_TYPE: {
    10: string;
    7: string;
    8: string;
};
export namespace H265_NAL_TYPE {
    let vps: number;
    let sps: number;
    let pps: number;
}
export const CONTROL_HEIGHT: 38;
export namespace SCALE_MODE_TYPE {
    let full_1: number;
    export { full_1 as full };
    export let auto: number;
    export let fullAuto: number;
}
export namespace CANVAS_RENDER_TYPE {
    let webcodecs: string;
    let webgl: string;
    let offscreen: string;
}
export namespace ENCODED_VIDEO_TYPE {
    let key: string;
    let delta: string;
}
export namespace MP4_CODECS {
    let avc: string;
    let hev: string;
}
export namespace MEDIA_SOURCE_STATE {
    export let ended: string;
    let open_1: string;
    export { open_1 as open };
    export let closed: string;
}
export const FRAG_DURATION: number;
export const AUDIO_SYNC_VIDEO_DIFF: 1000;
export namespace HOT_KEY {
    let esc: number;
    let arrowUp: number;
    let arrowDown: number;
}
export namespace WCS_ERROR {
    let keyframeIsRequiredError: string;
    let canNotDecodeClosedCodec: string;
}
export namespace FETCH_ERROR {
    let abortError1: string;
    let abortError2: string;
    let abort: string;
}
