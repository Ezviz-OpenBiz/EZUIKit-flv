export default class Events {
    constructor(master: any);
    destroys: any[];
    proxy(target: any, name: any, callback: any, option?: {}): any;
    master: any;
    destroy(): void;
}
