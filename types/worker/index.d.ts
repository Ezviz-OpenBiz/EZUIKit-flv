export default class DecoderWorker {
    constructor(player: any);
    player: any;
    decoderWorker: Worker;
    destroy(): void;
    _initDecoderWorker(): void;
    _initWork(): void;
    decodeVideo(arrayBuffer: any, ts: any, isIFrame: any): void;
    decodeAudio(arrayBuffer: any, ts: any): void;
    _decodeAudio(arrayBuffer: any, ts: any): void;
    _decodeAudioNoDelay(arrayBuffer: any, ts: any): void;
    updateWorkConfig(config: any): void;
}
