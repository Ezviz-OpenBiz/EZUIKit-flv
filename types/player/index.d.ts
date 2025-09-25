export default class PlayerLoader {
    static getLoaderFactory(useMSE: any): typeof HardPlayer | typeof SoftPlayer;
    constructor(container: any, options: any);
    _opt: any;
}
import HardPlayer from './hard-player';
import SoftPlayer from './soft-player';
