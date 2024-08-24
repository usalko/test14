// tests/example042.spec.ts
import { expect } from 'chai'
import { example042, SequenceMode } from '../src/example042'

console.log(`
Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
`)
describe('#example042', () => {
    it(`Input numbers are 2, 3, 4 #1`, () => {
        expect(example042(2, 3, 4)).equal(SequenceMode.Strict)
    })
    it(`Input numbers are 7, 7, 4 #2`, () => {
        expect(example042(7, 7, 4)).equal(SequenceMode.Decrease)
    })
    it(`Input numbers are 13, 1, 17 #1`, () => {
        expect(example042(13, 1, 17)).equal(SequenceMode.Soft)
    })
})