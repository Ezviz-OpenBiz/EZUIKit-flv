import type SoftPlayer from '.';
import CommonLoader from '../commonLoader';
export default class CanvasVideoLoader extends CommonLoader<HTMLCanvasElement> {
    context2D: CanvasRenderingContext2D | null;
    contextGl: any;
    contextGlRender: (w: any, h: any, y: any, u: any, v: any) => void;
    contextGlDestroy: () => void;
    bitmaprenderer: ImageBitmapRenderingContext | null;
    renderType: string;
    _currentTime: number;
    _pageHide: boolean;
    _contextmenuEvent: (e: any) => void;
    constructor(player: SoftPlayer);
    destroy(): void;
    _visibilitychange(): void;
    _initContextGl(): void;
    _initContext2D(): void;
    _initCanvasRender(): void;
    _supportOffscreen(): any;
    _bindOffscreen(): void;
    initCanvasViewSize(): void;
    render(msg: any): void;
    screenshot(filename: string, format: string, quality: number, type: string): string | File;
    clearView(): void;
    resize(): void;
    /**
     * 当前播放pts （单位秒）
     */
    get currentTime(): number;
}
