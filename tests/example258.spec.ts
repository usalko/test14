// tests/example258.spec.ts
import { expect } from 'chai'
import { example258 } from '../src/example258'

console.log(`Fundamental(ES6)-Part-I
108. Unique Values by Comparator

Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

 - Use Array.prototype.reduce() and Array.prototype.some() for an array containing only the first unique occurrence of each value, based on the comparator function, fn.
 - The comparator function takes two arguments: the values of the two elements being compared.

`)

describe('#example258', () => {
    it(`Input arguments are [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }, { id: 1, value: 'd' }, { id: 0, value: 'e' }, ], (a: any, b: any) => a.id == b.id ) #1`, () => {
        expect(example258([ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }, { id: 1, value: 'd' }, { id: 0, value: 'e' }, ], (a: any, b: any) => a.id == b.id )).deep.equal([{"id":0,"value":"a"},{"id":1,"value":"b"},{"id":2,"value":"c"}]        )
    })
})
