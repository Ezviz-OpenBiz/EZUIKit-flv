export default class Debug {
    master: any;
    logger: any;
    constructor(master: any);
    info(name: string, ...args: any[]): void;
    log(name: string, ...args: any[]): void;
    warn(name: string, ...args: any[]): void;
    error(name: string, ...args: any[]): void;
    _setLogger(): number;
}
