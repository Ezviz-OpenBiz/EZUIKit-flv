export default class Stream {
    static getLoaderFactory(protocol: any): typeof FetchLoader | typeof WebsocketLoader;
    constructor(player: any);
}
import FetchLoader from './fetchLoader';
import WebsocketLoader from './websocketLoader';
