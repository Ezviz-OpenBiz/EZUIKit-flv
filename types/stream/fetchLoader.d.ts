import Emitter from '../utils/emitter';
export default class FetchLoader extends Emitter {
    player: any;
    playing: boolean;
    abortController: AbortController;
    streamRate: (size: any) => void;
    _streamSuccess: boolean;
    constructor(player: any);
    destroy(): void;
    /**
     *
     * @param url
     * @param options
     */
    fetchStream(url: string, options?: any): void;
    abort(): void;
}
