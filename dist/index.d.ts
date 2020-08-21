declare enum OrderBy {
    desc = 0,
    asc = 1
}
/**
 * @description 分组排序函数
 * @param {Array} source 排序数据
 * @param {Number} desc 升序/降序,默认升序
 * @param {String} groupKey 分组字段名
 * @param {String} sortKey 排序字段名
 */
export declare function sort(source: Array<any>, desc: OrderBy | undefined, groupKey: string, sortKey: string): Array<any>;
declare const _default: {
    sort: typeof sort;
};
export default _default;
