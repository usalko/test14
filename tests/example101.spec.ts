// tests/example101.spec.ts
import { expect } from 'chai'
import { example101 } from '../src/example101'

console.log(`
Write a JavaScript program to check whether a given string contains only Latin letters
and no two uppercase and no two lowercase letters are in adjacent positions.
`)
describe('#example101', () => {
    it(`Input string is "RaR" #1`, () => {
        expect(example101('RaR')).equal(true)
    })
    it(`Input string is "aPi" #2`, () => {
        expect(example101('aPi')).equal(true)
    })
    it(`Input string is "U" #3`, () => {
        expect(example101('U')).equal(false)
    })
    it(`Input string is "TWO" #4`, () => {
        expect(example101('TWO')).equal(false)
    })
    it(`Input string is "one" #5`, () => {
        expect(example101('one')).equal(false)
    })
    it(`Input string is "" #6`, () => {
        expect(example101('')).equal(false)
    })
    it(`Input string is "Не латынь" #7`, () => {
        expect(example101('Не латынь')).equal(false)
    })
    it(`Input string is "看一个男人" #8`, () => {
        expect(example101('看一个男人')).equal(false)
    })
})