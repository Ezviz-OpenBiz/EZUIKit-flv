export default class Emitter {
    on(name: any, fn: any, ctx: any): this;
    e: {};
    once(name: any, fn: any, ctx: any): this;
    emit(name: any, ...data: any[]): this;
    off(name: any, callback: any): this;
}
