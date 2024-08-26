// tests/example044.spec.ts
import { expect } from 'chai'
import { example044 } from '../src/example044'

console.log(`
Write a JavaScript program that evaluates three given integers to determine
if any one of them is greater than or equal to 20 and less than at least one of the other two.
`)
describe('#example044', () => {
    it(`Input numbers are 28, 15, 44 #1`, () => {
        expect(example044(28, 15, 44)).equal(true)
    })
    it(`Input numbers are 17, 29, 30 #2`, () => {
        expect(example044(17, 29, 30)).equal(true)
    })
    it(`Input numbers are 7, 19, 30 #3`, () => {
        expect(example044(7, 19, 30)).equal(false)
    })
    it(`Input numbers are 9, 21, 18 #4`, () => {
        expect(example044(9, 21, 18)).equal(false)
    })
    it(`Input numbers are 20, 20, 20 #5`, () => {
        expect(example044(20, 20, 20)).equal(false)
    })
    it(`Input numbers are 18, 20, 19 #6`, () => {
        expect(example044(18, 20, 19)).equal(false)
    })
    it(`Input numbers are 60, 17, 17 #7`, () => {
        expect(example044(60, 17, 17)).equal(false)
    })
})