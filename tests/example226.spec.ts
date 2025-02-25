// tests/example226.spec.ts
import { expect } from 'chai'
import { example226 } from '../src/example226'

console.log(`Fundamental(ES6)-Part-I
76. Execute Function for Array in Reverse Order

Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.
 - Use Array.prototype.slice() to clone the given array and Array.prototype.reverse() to reverse it.
 - Use Array.prototype.forEach() to iterate over the reversed array.
`)

describe('#example226', () => {
    it(`Input arguments are [1, 2, 3, 4], (val: any) => val #1`, () => {
        expect(example226([1, 2, 3, 4], (val: any) => val)).deep.equal([4, 3, 2, 1])
    })
})
