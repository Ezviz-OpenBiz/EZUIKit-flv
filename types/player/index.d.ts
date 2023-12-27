export default class PlayerLoader {
    static getLoaderFactory(useMSE: any): typeof SoftPlayer | typeof HardPalyer;
    constructor(container: any, options: any);
    _opt: any;
}
import SoftPlayer from './soft-player';
import HardPalyer from './hard-player';
