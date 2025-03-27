// tests/example257.spec.ts
import { expect } from 'chai'
import { example257 } from '../src/example257'

console.log(`Fundamental(ES6)-Part-I
107. Distinct Values (Right-Side) by Comparator

Write a JavaScript program to get all distinct values (from the right side of the array) of an array,
based on a provided comparator function.


 - Use Array.prototype.reduceRight() and Array.prototype.some() for an array containing only the last unique occurrence of each value, based on the comparator function, fn.
 - The comparator function takes two arguments: the values of the two elements being compared.

`)

describe('#example257', () => {
    it(`Input arguments are [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }, { id: 1, value: 'd' }, { id: 0, value: 'e' }, ], (a: any, b: any) => a.id == b.id ) #1`, () => {
        expect(example257([ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' }, { id: 1, value: 'd' }, { id: 0, value: 'e' }, ], (a: any, b: any) => a.id == b.id )).deep.equal([{"id":0,"value":"e"},{"id":1,"value":"d"},{"id":2,"value":"c"}])
    })
})
