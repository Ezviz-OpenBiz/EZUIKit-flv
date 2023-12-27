export default class FlvLoader extends CommonLoader {
    input: Generator<number, void, unknown>;
    flvDemux: (value: any) => void;
    /**
     * @param {Uint8Array} data
     */
    dispatch(data: Uint8Array): void;
    _inputFlv(): Generator<number, void, unknown>;
    /**
     * @param {Generator<number, void, unknown>} input 数据片段
     * @returns
     */
    dispatchFlvData(input: Generator<number, void, unknown>): (value: any) => void;
}
import CommonLoader from './commonLoader';
