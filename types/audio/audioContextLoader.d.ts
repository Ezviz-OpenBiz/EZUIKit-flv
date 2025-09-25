import Emitter from '../utils/emitter';
export interface AudioInfo {
    encType?: string | number;
    encTypeCode?: string | number;
    channels?: string | number;
    sampleRate?: string | number;
}
export interface AudioBuffer {
    buffer: Float32Array;
    ts: number;
}
/**
 * The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page
 * https://developer.mozilla.org/zh-CN/docs/Web/Media/Guides/Autoplay
 */
export default class AudioContextLoader extends Emitter {
    bufferList: AudioBuffer[];
    player: any;
    scriptNode: ScriptProcessorNode | null;
    hasInitScriptNode: boolean;
    audioContextChannel: null;
    audioContext: AudioContext;
    gainNode: any;
    audioBufferSourceNode: any;
    mediaStreamAudioDestinationNode: any;
    playing: boolean;
    audioSyncVideoOption: {
        diff: number;
    };
    audioInfo: AudioInfo;
    init: boolean;
    hasAudio: boolean;
    _muted: any;
    _volume: any;
    constructor(player: any);
    resetInit(): void;
    destroy(): void;
    updateAudioInfo(data: AudioInfo): void;
    get isPlaying(): boolean;
    get muted(): any;
    set muted(muted: any);
    get volume(): any;
    set volume(volume: any);
    get bufferSize(): number;
    initScriptNode(): void;
    setVolume(volume: number | string): void;
    /**
     * AudioContext 本身不能直接调节音量，但你可以通过创建并使用 GainNode（增益节点）来实现对音量的控制。 通过设置 gainNode.gain.value 调节音量（0=静音，1=原始音量，>1=放大）
     * @param {number} volume
     * @returns
     */
    _setVolume(volume: number | string): void;
    closeAudio(): void;
    audioEnabled(flag: boolean): void;
    isStateRunning(): boolean;
    isStateSuspended(): boolean;
    clear(): void;
    play(buffer: Float32Array, ts: number): void;
    pause(): void;
    resume(): void;
}
