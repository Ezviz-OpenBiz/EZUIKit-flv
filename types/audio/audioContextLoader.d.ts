export default class AudioContextLoader extends Emitter {
    constructor(player: any);
    bufferList: any[];
    player: any;
    scriptNode: any;
    hasInitScriptNode: boolean;
    audioContextChannel: any;
    audioContext: any;
    gainNode: any;
    audioBufferSourceNode: any;
    mediaStreamAudioDestinationNode: any;
    playing: boolean;
    audioSyncVideoOption: {
        diff: any;
    };
    audioInfo: {
        encType: string;
        channels: string;
        sampleRate: string;
    };
    init: boolean;
    hasAudio: boolean;
    resetInit(): void;
    destroy(): void;
    updateAudioInfo(data: any): void;
    get isPlaying(): boolean;
    get isMute(): boolean;
    get volume(): any;
    get bufferSize(): number;
    initScriptNode(): void;
    mute(flag: any): void;
    setVolume(volume: any): void;
    closeAudio(): void;
    audioEnabled(flag: any): void;
    isStateRunning(): boolean;
    isStateSuspended(): boolean;
    clear(): void;
    play(buffer: any, ts: any): void;
    pause(): void;
    resume(): void;
}
import Emitter from '../utils/emitter';
