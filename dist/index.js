"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var OrderBy;
(function (OrderBy) {
    OrderBy[OrderBy["desc"] = 0] = "desc";
    OrderBy[OrderBy["asc"] = 1] = "asc"; //升序
})(OrderBy || (OrderBy = {}));
/**
 * @description 分组排序函数
 * @param {Array} source 排序数据
 * @param {Number} desc 升序/降序,默认升序
 * @param {String} groupKey 分组字段名
 * @param {String} sortKey 排序字段名
 */
function sort(source, desc, groupKey, sortKey) {
    if (desc === void 0) { desc = 1; }
    var resultArr = []; // 用来存储结果
    var record = []; // 用来记录已经加进after的ID
    // 遍历原数据
    source.forEach(function (item) {
        var _a;
        var isNewGroup = true;
        // 看看是不是已经记过
        record.forEach(function (id) {
            if (id === item[groupKey])
                isNewGroup = false;
        });
        // 如果没记过就加进resultArr
        if (isNewGroup) {
            record.push(item[groupKey]);
            var obj_1 = (_a = {},
                _a[groupKey] = item[groupKey],
                _a[sortKey] = item[sortKey],
                _a.children = [],
                _a);
            source.forEach(function (i) {
                if (i[groupKey] === item[groupKey])
                    obj_1.children.push(i);
            });
            // 组内根据desc, controlSortId升序
            obj_1.children.sort(function (a, b) { return desc === 1 ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]; });
            resultArr.push(obj_1);
        }
    });
    // 结果根据desc, controlGroupId升序
    resultArr.sort(function (a, b) { return desc === 1 ? a.children[0][sortKey] - b.children[0][sortKey] : b.children[0][sortKey] - a.children[0][sortKey]; });
    return resultArr;
}
exports.sort = sort;
exports.default = {
    sort: sort
};
