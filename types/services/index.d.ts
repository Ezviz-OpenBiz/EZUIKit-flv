/**
 * videoLevel 清晰度枚举
 */
export const QUALITY_ENUM: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
};
export const DEFAULT_QUALITY: {
    /**
     * 0: 流畅
     * 1: 标清
     * 2: 高清
     * 3: 超清
     * 4: 极清
     * 5: 3K
     * 6: 4K
     */
    videoLevel: number;
    name: string;
    streamTypeIn: number;
    /** 用来区分清晰度是否是默认值还是接口返回的 */
    type: string;
}[];
export default Services;
/**
 * @description http请求
 */
declare class Services {
    constructor(player: any, options: any);
    _player: any;
    baseURL: any;
    accessToken: any;
    deviceSerial: any;
    channelNo: any;
    appName: any;
    v: any;
    /**
     * @description 请求
     * @param {string} url  请求地址
     * @param object} opions  请求参数
     * @returns {Promise}
     */
    fetch(url: string, options?: {}): Promise<any>;
    /**
     * @description get请求
     * @param {string} url 请求地址
     */
    get(url: string, options?: {}): Promise<any>;
    /**
     * @description post请求
     * @param {string} url 请求地址
     */
    post(url: string, options?: {}): Promise<any>;
    /**
     * @description 获取设备视频质量查询接口 https://open.ys7.com/help/3922
     * @param {string | number} videoLevel 设备视频清晰度等级 0-流畅 1-均衡 2-高清 3-超清 4 5 6
     */
    setVideoLevelService(videoLevel: string | number): Promise<any>;
    /**
     * @description 获取查询设备本地录像 (开始结束时间必须在同一天, 有时区问题) https://open.ys7.com/help/3922
     * @param {Object} params
     * @param {string | number} params.startTime 开始时间 （毫秒）
     * @param {string | number} params.endTime 结束时间（毫秒）
     * @param {(string | number)=} params.pageSize 每页个数 默认200, 最大200, 超出自动遍历下一页
     *
     * @returns {Array<{"startTime": number,"endTime": number,"type": string, "size":number }>}
     */
    getLocalVideoUnifyQueryService(params: {
        startTime: string | number;
        endTime: string | number;
        pageSize?: (string | number) | undefined;
    }): Array<{
        "startTime": number;
        "endTime": number;
        "type": string;
        "size": number;
    }>;
    /**
     * @description 获取设备视频质量查询接口 https://open.ys7.com/help/3922
     *
     * @returns {Array<{"streamTypeIn": 1 | 2,"videoLevel":  0 | 1 | 2 | 3 | 4 | 5 |6, name: string }>}
     */
    getVideoQualityService(): Array<{
        "streamTypeIn": 1 | 2;
        "videoLevel": 0 | 1 | 2 | 3 | 4 | 5 | 6;
        name: string;
    }>;
    /**
     * @description 获取播放地址 https://open.ys7.com/help/1414
     * @param {Object} params 获取地址参数
     * @param {number=} params.expireTime 过期时长，单位秒；针对hls/rtmp/flv设置有效期，相对时间；30秒-720天
     * @param {number=} params.type  地址的类型，1-预览，2-本地录像回放，3-云存储录像回放，非必选，默认为1；回放仅支持rtmp、ezopen、flv协议
     * @param {number=} params.quality  视频清晰度，1-高清（主码流）、2-流畅（子码流）
     * @param {string=} params.startTime 本地录像/云存储录像回放开始时间,云存储开始结束时间必须在同一天，示例：2019-12-01 00:00:00
     * @param {string=} params.stopTime  本地录像/云存储录像回放结束时间,云存储开始结束时间必须在同一天，示例：2019-12-01 23:59:59
     * @param {number=} params.playbackSpeed  回放倍速。倍速为 -1（ 支持的最大倍速）、0.5、1、2、4、8、16； 仅支持protocol为4-flv 且 type为2-本地录像回放（ 部分设备可能不支持16倍速） 或者 3-云存储录像回放
     * @returns {Promise<string>}
     */
    getPlayAddressService(params?: {
        expireTime?: number | undefined;
        type?: number | undefined;
        quality?: number | undefined;
        startTime?: string | undefined;
        stopTime?: string | undefined;
        playbackSpeed?: number | undefined;
    }): Promise<string>;
    /**
     * @description 获取本地录像回放播放地址 https://open.ys7.com/help/1414
     * @param {Object} params 获取地址参数
     * @param {number=} params.expireTime 过期时长，单位秒；针对hls/rtmp/flv设置有效期，相对时间；30秒-720天
     * @param {number=} params.quality  视频清晰度，1-高清（主码流）、2-流畅（子码流）
     * @param {string=} params.startTime 本地录像/云存储录像回放开始时间,云存储开始结束时间必须在同一天，示例：2019-12-01 00:00:00
     * @param {string=} params.stopTime  本地录像/云存储录像回放结束时间,云存储开始结束时间必须在同一天，示例：2019-12-01 23:59:59
     * @param {number=} params.playbackSpeed  回放倍速。倍速为 -1（ 支持的最大倍速）、0.5、1、2、4、8、16； 仅支持protocol为4-flv 且 type为2-本地录像回放（ 部分设备可能不支持16倍速） 或者 3-云存储录像回放
     * @returns {Promise<string>}
     */
    getRecordAddressService(params?: {
        expireTime?: number | undefined;
        quality?: number | undefined;
        startTime?: string | undefined;
        stopTime?: string | undefined;
        playbackSpeed?: number | undefined;
    }): Promise<string>;
    /**
     * @description 获取直播地址 https://open.ys7.com/help/1414
     * @param {Object} params 获取地址参数
     * @param {number=} params.expireTime 过期时长，单位秒；针对hls/rtmp/flv设置有效期，相对时间；30秒-720天
     * @param {1 | 2} params.quality  视频清晰度，1-高清（主码流）、2-流畅（子码流）
     * @returns {Promise<string>}
     * @returns
     */
    getLiveAddressService(params?: {
        expireTime?: number | undefined;
        quality: 1 | 2;
    }): Promise<string>;
    /**
     * @description
     * @param {Object} params 获取地址参数
     * @param {number=} params.expireTime 过期时长，单位秒；针对hls/rtmp/flv设置有效期，相对时间；30秒-720天
     * @param {number=} params.quality  视频清晰度，1-高清（主码流）、2-流畅（子码流）
     * @param {number=} params.playbackSpeed  回放倍速。倍速为 -1（ 支持的最大倍速）、0.5、1、2、4、8、16； 仅支持protocol为4-flv 且 type为2-本地录像回放（ 部分设备可能不支持16倍速） 或者 3-云存储录像回放
     * @returns {Promise<string>}
     */
    getCDNPlayAddressService(url: any, body?: {}): Promise<string>;
    /**
     * @description 获取CDN直播地址 (有效期时间是当天 00:00:00 - 23:59:59)
     * @param {Object} body
     * @param {1 | 2} body.quality 视频清晰度，1-高清（默认）、2-流畅
     */
    getCDNLiveAddressService(body: {
        quality: 1 | 2;
    }): Promise<string>;
    /**
     * @description 获取CDN直播地址 (有效期时间是当天 00:00:00 - 23:59:59)
     * @param {Object} body
     * @param {1 | 2} body.quality 视频清晰度，1-高清（默认）、2-流畅
     * @param {1 | 2} body.type 1-本地录像回放，2-云存储录像回放 默认1
     * @param {string} body.startTime  录制片段开始时间，例如：2024-01-01 09:10:56，开始时间和结束时间跨度最多7天
     * @param {string} body.stopTime 录制片段结束时间，例如：2024-01-01 09:10:56，开始时间和结束时间跨度最多7天，结束时间不能小于等于当前时间，结束时间必须在30天内
     */
    getCDNRecordAddressService(body: {
        quality: 1 | 2;
        type: 1 | 2;
        startTime: string;
        stopTime: string;
    }): Promise<string>;
}
