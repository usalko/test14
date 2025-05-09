// tests/example300.spec.ts
import { expect } from 'chai'
import { example300 } from '../src/example300'
import { writeFileSync } from 'fs';


console.log(`Fundamental(ES6)-Part-I
160. Mutate Array with Filter and Iterator


Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.


 - Check if the last argument provided is a function.
 - Use Array.prototype.map() to apply the iterator function fn to all array elements.
 - Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
 - Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
 - Use Array.prototype.push() to re-populate it with only the pulled values.

`)

describe('#example300', () => {
    it(`Input arguments are [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], (o: any) => o.x #1`, () => {
        expect(example300([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], (o: any) => o.x)).deep.equal([{ x: 2 }])
    })
})
