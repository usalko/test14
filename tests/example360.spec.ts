// tests/example360.spec.ts
import { expect } from 'chai'
import { example360, } from '../src/example360'


console.log(`Fundamental(ES6)-Part-II
220. Get Native Type of Value


Write a JavaScript program to get the native type of a value. 
Returns the lowercased constructor name of value, 
"undefined" or "null" if value is undefined or null.



`)

describe('#example360', () => {
    it(`Input arguments is: 2 #1`, () => {
        expect(example360(2)).equal('number')
    })
    it(`Input arguments is: 's' #2`, () => {
        expect(example360('s')).equal('string')
    })
    it(`Input arguments is: null #3`, () => {
        expect(example360(null)).equal('null')
    })
    it(`Input arguments is: undefined #4`, () => {
        expect(example360(undefined)).equal('undefined')
    })
    it(`Input arguments is: Set() #5`, () => {
        expect(example360(new Set())).equal('set')
    })
    it(`Input arguments is: Map() #5`, () => {
        expect(example360(new Map())).equal('map')
    })
})
