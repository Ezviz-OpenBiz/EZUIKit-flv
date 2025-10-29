export default class FetchLoader extends Emitter {
    constructor(player: any);
    player: any;
    playing: boolean;
    abortController: AbortController;
    streamRate: (size: any) => void;
    _streamSuccess: boolean;
    destroy(): void;
    /**
     *
     * @param url
     * @param options
     */
    fetchStream(url: any, options?: {}): void;
    abort(): void;
}
import Emitter from '../utils/emitter';
