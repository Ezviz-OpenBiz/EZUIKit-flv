export default class Debug {
    constructor(master: any);
    master: any;
    logger: any;
    info(name: any, ...args: any[]): void;
    log(name: any, ...args: any[]): void;
    warn(name: any, ...args: any[]): void;
    error(name: any, ...args: any[]): void;
    _setLoger(level: any): 1 | 2 | 3 | 4 | 5;
}
