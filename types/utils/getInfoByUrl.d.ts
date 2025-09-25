/**
 * 从播放地址中解析信息
 * @param {string} urlStr
 * @returns
 */
export function getInfoByUrl(urlStr: string, isEzviz?: boolean): {
    protocol: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    query: {};
    url: string;
};
