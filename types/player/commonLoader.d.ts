export default class CommonLoader extends Emitter {
    init: boolean;
    resetInit(): void;
    videoInfo: any;
    destroy(): void;
    updateVideoInfo(data: any): void;
    play(): void;
    pause(): void;
    clearView(): void;
}
import Emitter from '../utils/emitter';
