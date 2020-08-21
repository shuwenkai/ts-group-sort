enum OrderBy {
    desc = 0,//降序
    asc //升序
}
/**
 * @description 分组排序函数
 * @param {Array} source 排序数据
 * @param {Number} desc 升序/降序,默认升序
 * @param {String} groupKey 分组字段名
 * @param {String} sortKey 排序字段名
 */
export function sort(source: Array<any>, desc: OrderBy = 1, groupKey: string, sortKey: string): Array<any> {
    let resultArr: Array<any> = [] // 用来存储结果
    let record: Array<number> = [] // 用来记录已经加进after的ID
    // 遍历原数据
    source.forEach((item) => {
        let isNewGroup: boolean = true
        // 看看是不是已经记过
        record.forEach((id) => {
            if (id === item[groupKey]) isNewGroup = false
        })
        // 如果没记过就加进resultArr
        if (isNewGroup) {
            record.push(item[groupKey])
            let obj = {
                [groupKey]: item[groupKey],
                [sortKey]:item[sortKey],
                children: <Array<any>>[]
            }
            source.forEach((i) => {
                if (i[groupKey] === item[groupKey]) obj.children.push(i)
            })
            // 组内根据desc, controlSortId升序
            obj.children.sort((a:any, b:any) => { return desc === 1 ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey] })
            resultArr.push(obj)
        }
    })
    // 结果根据desc, controlGroupId升序
    resultArr.sort((a, b) => { return desc === 1 ? a.children[0][sortKey] - b.children[0][sortKey] : b.children[0][sortKey] - a.children[0][sortKey] })
    return resultArr
}
export default {
    sort
}