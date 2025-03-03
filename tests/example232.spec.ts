// tests/example232.spec.ts
import { expect } from 'chai'
import { example232 } from '../src/example232'

console.log(`Fundamental(ES6)-Part-I
82. Map Array Values to Object

Write a JavaScript program to map array values to an object using a function.
The key-value pairs consist of the original value as the key and the mapped value.

 - Use Array.prototype.reduce() to apply fn to each element in arr and combine the results into an object.
 - Use el as the key for each property and the result of fn as the value.

`)

describe('#example232', () => {
    it(`Input arguments are [1, 2, 3] a => a * a #1`, () => {
        expect(example232([1, 2, 3], (a: any) => a * a)).deep.equal({ '1': 1, '2': 4, '3': 9 })
    })
})
