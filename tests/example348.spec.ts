// tests/example348.spec.ts
import { expect } from 'chai'
import { example348 } from '../src/example348'


console.log(`Fundamental(ES6)-Part-II
208. Check Specified Type


Write a JavaScript program to check if the provided value is of the specified type.


 - Ensure the value is not undefined or null using Array.prototype.includes().
 - Compare the constructor property on the value with type to check if the provided value is of the specified type.


`)

describe('#example348', () => {
    it(`Input arguments are Array, [1] #1`, () => {
        expect(example348(Array, [1])).equal(true)
    })
    it(`Input arguments are ArrayBuffer, new ArrayBuffer() #2`, () => {
        expect(example348(ArrayBuffer, new ArrayBuffer())).equal(true)
    })
    it(`Input arguments are Map, new Map() #3`, () => {
        expect(example348(Map, new Map())).equal(true)
    })
    it(`Input arguments are RegExp, /./g #4`, () => {
        expect(example348(RegExp, /./g)).equal(true)
    })
    it(`Input arguments are Set, new Set() #5`, () => {
        expect(example348(Set, new Set())).equal(true)
    })
    it(`Input arguments are WeakMap, new WeakMap() #6`, () => {
        expect(example348(WeakMap, new WeakMap())).equal(true)
    })
    it(`Input arguments are WeakSet, new WeakSet() #7`, () => {
        expect(example348(WeakSet, new WeakSet())).equal(true)
    })
    it(`Input arguments are String, '' #8`, () => {
        expect(example348(String, '')).equal(true)
    })
    it(`Input arguments are String, new String('') #9`, () => {
        expect(example348(String, new String(''))).equal(true)
    })
    it(`Input arguments are Number, 1 #10`, () => {
        expect(example348(Number, 1)).equal(true)
    })
    it(`Input arguments are Number, new Number(1) #11`, () => {
        expect(example348(Number, new Number(1))).equal(true)
    })
    it(`Input arguments are Boolean, new Boolean(true) #12`, () => {
        expect(example348(Boolean, new Boolean(true))).equal(true)
    })
    it(`Input arguments are Boolean, null #13`, () => {
        expect(example348(Boolean, null)).equal(false)
    })
})
