// tests/example195.spec.ts
import { expect } from 'chai'
import { example195 } from '../src/example195'

console.log(`Fundamental(ES6)-Part-I
45. Split Values into Two Groups by Filter


Write a JavaScript program to split values into two groups. If an element in the filter is true, 
the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
`)

describe('#example195', () => {
    it(`Input array is: [true, false, true, false, true, false, true] #1`, () => {
        expect(example195([true, false, true, false, true, false, true], (x: any) => Boolean(x))).deep.equal([[true, true, true, true], [false, false, false]])
    })
})
