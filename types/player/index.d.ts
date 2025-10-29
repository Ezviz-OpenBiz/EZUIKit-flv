export default class PlayerLoader {
    static getLoaderFactory(useMSE: any): typeof SoftPlayer | typeof HardPlayer;
    constructor(container: any, options: any);
    _opt: any;
}
import SoftPlayer from './soft-player';
import HardPlayer from './hard-player';
