// tests/example051.spec.ts
import { expect } from 'chai'
import { example051 } from '../src/example051'

console.log(`
Write a JavaScript application that transforms a provided numerical value into hours and minutes.
`)
describe('#example051', () => {
    it(`Input number is 1355 #1`, () => {
        expect(example051(1355)).deep.equal([13, 55])
    })
    it(`Input number is 1418 #1`, () => {
        expect(example051(1418)).deep.equal([14, 18])
    })
})