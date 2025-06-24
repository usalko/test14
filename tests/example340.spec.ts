// tests/example340.spec.ts
import { expect } from 'chai'
import { example340 } from '../src/example340'


console.log(`Fundamental(ES6)-Part-II
200. Check If Empty Object or Collection


Write a JavaScript program that returns true if a value is an empty object, collection, map or set.
It has no enumerable properties or is of any type not considered a collection.


 - Check if the provided value is null or if its length is equal to 0.


`)

describe('#example340', () => {
    it(`Input argument is new Map() #1`, () => {
        expect(example340(new Map())).equal(true)
    })
    it(`Input argument is new Set() #2`, () => {
        expect(example340(new Set())).equal(true)
    })
    it(`Input argument is [] #3`, () => {
        expect(example340([])).equal(true)
    })
    it(`Input argument is {} #4`, () => {
        expect(example340({})).equal(true)
    })
    it(`Input argument is '' #5`, () => {
        expect(example340('')).equal(true)
    })
    it(`Input argument is [1, 2] #6`, () => {
        expect(example340([1, 2])).equal(false)
    })
    it(`Input argument is { a: 1, b: 2 } #7`, () => {
        expect(example340({ a: 1, b: 2 })).equal(false)
    })
    it(`Input argument is 'text' #8`, () => {
        expect(example340('text')).equal(false)
    })
    it(`Input argument is 123 #9`, () => {
        expect(example340(123)).equal(false)
    })
    it(`Input argument is true #10`, () => {
        expect(example340(true)).equal(false)
    })
})
