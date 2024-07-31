export default Monitor;
/**
 * /pages/viewpage.action?pageId=663566571
 */
declare class Monitor {
    static initMonitor(ignoreMonitor: any): void;
    /**
     *
     * @param {1 | 2 | 3 | 50 | 51 |  100} type 1： 初始化  2： 播放成功  3： 播放异常  50: api 调用  51：错误回调  100： 接口上报
     * @param {ReportData} logInfo
     */
    static report(action: any, logInfo?: ReportData): void;
}
