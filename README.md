[![Build Status](https://travis-ci.org/shuwenkai/ts-group-sort.svg?branch=master)](https://travis-ci.org/shuwenkai/ts-group-sort)
# 数组分组排序

> 传入数组，升序或者降序，排序分组字段，将分组排序后输出 travis-ci 持续集成

>实例
```bash
    const testData=[{
        id:1,
        sort:1,
        label:'label1',
        group:1
    },{
        id:2,
        sort:2,
        label:'label2',
        group:1
    },{
        id:3,
        sort:3,
        label:'label3',
        group:2
    },{
        id:4,
        sort:4,
        label:'label4',
        group:2
    }]
    const result = sort(testData, 1,'group','sort');

```