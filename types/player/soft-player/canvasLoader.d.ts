export default class CanvasVideoLoader extends CommonLoader {
    constructor(player: any);
    player: any;
    $videoElement: HTMLCanvasElement;
    context2D: CanvasRenderingContext2D;
    contextGl: any;
    contextGlRender: (w: any, h: any, y: any, u: any, v: any) => void;
    contextGlDestroy: () => void;
    bitmaprenderer: ImageBitmapRenderingContext;
    renderType: string;
    videoInfo: {
        width: string;
        height: string;
        encType: string;
    };
    _contextmenuEvent: (e: any) => void;
    _initContextGl(): void;
    _initContext2D(): void;
    _initCanvasRender(): void;
    _supportOffscreen(): any;
    _bindOffscreen(): void;
    initCanvasViewSize(): void;
    render(msg: any): void;
    screenshot(filename: any, format: any, quality: any, type: any): string | File;
    resize(): void;
}
import CommonLoader from '../commonLoader';
