// tests/example295.spec.ts
import { expect } from 'chai'
import { example295 } from '../src/example295'

console.log(`Fundamental(ES6)-Part-I
155. Filter Where Predicate is False


Write a JavaScript program that takes a predicate and an array, like Array.filter(),
but only keeps x if pred(x) returns false.

 - Use the spread operator (...) and Array.prototype.reverse() to reverse the order of the characters in the string.
 - Combine characters to get a string using String.prototype.join('').

`)

describe('#example295', () => {
    it(`Input arguments are x => x % 2 === 0, [1, 2, 3, 4, 5] #1`, () => {
        expect(example295((x: any) => x % 2 === 0, [1, 2, 3, 4, 5])).deep.equal([1, 3, 5])
    })
    it(`Input argument is 'foobar' #2`, () => {
        expect(example295((x: any) => x.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana'])).deep.equal(['Pear', 'Kiwi'])
    })
})
