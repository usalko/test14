// tests/example229.spec.ts
import { expect } from 'chai'
import { example229 } from '../src/example229'

console.log(`Fundamental(ES6)-Part-I
79. Find Longest Iterable Object

Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.

 - Use Array.prototype.reduce(), comparing the length of objects to find the longest one.
 - If multiple objects have the same length, the first one will be returned.
 - Returns undefined if no arguments are provided.

`)

describe('#example229', () => {
    it(`Input arguments are 'this', 'is', 'a', 'testcase' #1`, () => {
        expect(example229('this', 'is', 'a', 'testcase')).deep.equal('testcase')
    })
    it(`Input arguments are ...['a', 'ab', 'abc'] #2`, () => {
        expect(example229(...['a', 'ab', 'abc'])).deep.equal('abc')
    })
    it(`Input arguments are ...['a', 'ab', 'abc'], 'abcd' #3`, () => {
        expect(example229(...['a', 'ab', 'abc'], 'abcd')).deep.equal('abcd')
    })
    it(`Input arguments are [1, 2, 3], [1, 2], [1, 2, 3, 4, 5] #4`, () => {
        expect(example229([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])).deep.equal([1, 2, 3, 4, 5])
    })
    it(`Input arguments are [1, 2, 3], 'foobar' #5`, () => {
        expect(example229([1, 2, 3], 'foobar')).deep.equal('foobar')
    })
})
