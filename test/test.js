'use strict';
const expect = require('chai').expect;
const sort = require('../dist/index').sort;

describe('ts-group-sort function test', () => {
    it('should return array', () => {
        const testData = [{
            id: 1,
            sort: 1,
            label: 'label1',
            group: 1
        }, {
            id: 2,
            sort: 2,
            label: 'label2',
            group: 1
        }, {
            id: 3,
            sort: 3,
            label: 'label3',
            group: 2
        }, {
            id: 4,
            sort: 4,
            label: 'label4',
            group: 2
        }]
        const resultData = [
            {
                group: 1,
                sort: 1,
                children: [{
                    id: 1,
                    sort: 1,
                    label: 'label1',
                    group: 1
                }, {
                    id: 2,
                    sort: 2,
                    label: 'label2',
                    group: 1
                }],
            },
            {
                group: 2,
                sort: 3,
                children: [{
                    id: 3,
                    sort: 3,
                    label: 'label3',
                    group: 2
                }, {
                    id: 4,
                    sort: 4,
                    label: 'label4',
                    group: 2
                }],
            },
        ]
        const result = sort(testData, 1, 'group', 'sort');
        expect(result).to.not.equal(resultData);
    });
});