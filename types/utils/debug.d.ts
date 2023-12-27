export default class Debug {
    constructor(master: any);
    master: any;
    log(name: any, ...args: any[]): void;
    warn(name: any, ...args: any[]): void;
    error(name: any, ...args: any[]): void;
}
