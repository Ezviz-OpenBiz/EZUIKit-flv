export default class NoSleep {
    constructor(player: any);
    player: any;
    enabled: boolean;
    _wakeLock: WakeLockSentinel;
    noSleepTimer: number;
    noSleepVideo: HTMLVideoElement;
    _addSourceToVideo(element: any, type: any, dataURI: any): void;
    get isEnabled(): boolean;
    enable(): Promise<void>;
    disable(): void;
}
