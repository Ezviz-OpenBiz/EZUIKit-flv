/**
 * flv 解析器, 用于解析 flv 的 tag, (flv 只有一个流头， 后续的数据都是 tag 和 PreviousTagSize，片段的tag 是不完整的 需要后续数据拼接组合成完整的 tag )
 *
 * ------------------------------------------------------------------------------------------------------------------
 * FLV Header: Signature(3) "FLV", Version(1), Flags(1), DataOffset(4)
 * -------------------------------------------------------------------------------------------------------------------
 * PreviousTagSize0 (4)
 * -------------------------------------------------------------------------------------------------------------------
 *        |        |
 *        |        |
 *        |  Tag   | TagType(1)， DataSize(3), Timestamp(3), TimestampExtended(1), StreamID(3)
 *        | Header |
 *        |        |
 *        | ------ |-------------------------------------------------------------------------------------------------
 *        |        |
 *  Tag1  |  Tag   |  TagData(DataSize)
 *        |  Data  |
 *        |        |
 * -------------------------------------------------------------------------------------------------------------------
 * PreviousTagSize1 (4)
 * -------------------------------------------------------------------------------------------------------------------
 * Tag2
 * -------------------------------------------------------------------------------------------------------------------
 *  ......
 * -------------------------------------------------------------------------------------------------------------------
 */
declare class FlvParseChunk {
    firstHeadTagChunk: Uint8Array;
    firstChunk: Uint8Array;
    /** 收到的最新的一个 tag，可能不完整但是带有tag 头 */
    lastTagChunk: Uint8Array;
    /**
     * FlvParseChunk 构造函数
     */
    constructor();
    /**
     * 输入flv 码流片段
     * @param chunk flv 码流片段
     */
    inputData(chunk: any): void;
    /**
     *
     * @private
     * @param arrayBuffer
     * @param tagCount
     * @returns
     */
    _parseFLVTagEndOffset(arrayBuffer: any, tagCount?: number): number;
    _concatTwoUint8Arrays(a: any, b: any): Uint8Array;
    /**
     * 读取 uint24
     * @private
     * @param view
     * @param offset
     * @returns
     */
    _readUint24(view: any, offset: any): number;
}
export default FlvParseChunk;
