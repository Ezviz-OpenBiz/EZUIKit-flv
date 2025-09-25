import AudioContextLoader from './audioContextLoader';
export default class Audio {
    constructor(player: any);
    static getLoaderFactory(): typeof AudioContextLoader;
}
