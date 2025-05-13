// tests/example301.spec.ts
import { expect } from 'chai'
import { example301 } from '../src/example301'
import { writeFileSync } from 'fs'


console.log(`Fundamental(ES6)-Part-I
161. Filter and Return Removed Elements


Write a JavaScript program to 'mutate the original array to filter out the values specified.
Returns the removed elements.'


 - Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
 - Set Array.prototype.length to mu tate the passed in an array by resetting its length to 0.
 - Use Array.prototype.push() to re-populate it with only the pulled values.
 - Use Array.prototype.push() to keep track of pulled values.

`)

describe('#example301', () => {
    it(`Input arguments are ['a', 'b', 'c', 'd'], ['b', 'd'] #1`, () => {
        expect(example301(['a', 'b', 'c', 'd'], ['b', 'd'])).deep.equal(['b', 'd'])
    })
})
