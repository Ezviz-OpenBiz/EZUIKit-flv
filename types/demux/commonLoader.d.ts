export default class CommonLoader extends Emitter {
    constructor(player: any);
    player: any;
    stopId: NodeJS.Timeout;
    firstTimestamp: any;
    startTimestamp: number;
    delay: number;
    bufferList: any[];
    dropping: boolean;
    destroy(): void;
    getDelay(timestamp: any): number;
    resetDelay(): void;
    initInterval(): void;
    _doDecode(payload: any, type: any, ts: any, isIFrame: any, cts: any): void;
    _doDecoderDecode(data: any): void;
    pushBuffer(payload: any, options: any): void;
    close(): void;
}
import Emitter from '../utils/emitter';
