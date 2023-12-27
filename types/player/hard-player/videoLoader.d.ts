import CommonLoader from '../commonLoader';
import { ScreenshotFormat } from '../interface';
import HardPlayer from '.';
export default class VideoLoader extends CommonLoader {
    _delayPlay: boolean;
    $canvasElement: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D | null;
    trackGenerator: any;
    vwriter: any;
    $videoElement: HTMLVideoElement;
    player: HardPlayer;
    $posterElement: HTMLImageElement;
    constructor(player: HardPlayer);
    destroy(): void;
    fixChromeVideoFlashBug(): void;
    play(): void;
    _getVideoReadyState(): number;
    _play(): void;
    pause(isNow?: boolean): void;
    clearView(): void;
    screenshot(filename: string, format?: keyof ScreenshotFormat, quality?: number, type?: string): string | File;
    initCanvasViewSize(): void;
    _poster(): void;
    render(msg: any): void;
    resize(): void;
    _resizeElement($Element: HTMLVideoElement | HTMLImageElement): void;
    isPlaying(): boolean;
}
