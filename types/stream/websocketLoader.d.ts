export default class WebsocketLoader extends Emitter {
    constructor(player: any);
    player: any;
    socket: WebSocket;
    socketStatus: string;
    wsUrl: any;
    streamRate: (size: any) => void;
    destroy(): void;
    _createWebSocket(): void;
    _handleMessage(message: any): void;
    /**
     *
     * @param url
     * @param options
     */
    fetchStream(url: any, options: any): void;
}
import Emitter from '../utils/emitter';
