// tests/example367.spec.ts
import { expect } from 'chai'
import { example367, } from '../src/example367'


console.log(`Fundamental(ES6)-Part-II
227. Remove Elements by Function


Write a JavaScript program to remove elements from an array for which the given function returns false.

 
 - Use Array.prototype.filter() to find array elements that return truthy values.
 - Use Array.prototype.reduce() to remove elements using Array.prototype.splice().
 - The callback function is invoked with three arguments (value, index, array).


`)

describe('#example367', () => {
    it(`Input argument are: [1, 2, 3, 4], (n: number) => n % 2 === 0 #1`, () => {
        expect(example367([1, 2, 3, 4], (n: number) => n % 2 === 0)).deep.equal([2,4])
    })
})
