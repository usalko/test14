// tests/example079.spec.ts
import { expect } from 'chai'
import { example079 } from '../src/example079'

console.log(`
Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
`)
describe('#example079', () => {
    it(`Input array is "[]"  #1`, () => {
        expect(example079([])).equal(false)
    })
    it(`Input array is "[1]"  #2`, () => {
        expect(example079([1])).equal(false)
    })
    it(`Input array is "[34, 18]"  #3`, () => {
        expect(example079([34, 18])).equal(false)
    })
    it(`Input array is "[128, 256, 512]"  #4`, () => {
        expect(() => example079([128, 256, 512])).to.throw('The array length should be 0, 1, or 2')
    })
    it(`Input array is "[385, 386, 387, 388]"  #5`, () => {
        expect(() => example079([385, 386, 387, 388])).to.throw('The array length should be 0, 1, or 2')
    })
    it(`Input array is "[30]"  #6`, () => {
        expect(example079([30])).equal(false)
    })
    it(`Input array is "[30, 40]"  #7`, () => {
        expect(example079([30, 40])).equal(false)
    })
    it(`Input array is "[40, 30]"  #8`, () => {
        expect(example079([40, 30])).equal(false)
    })
    it(`Input array is "[40, 40]"  #9`, () => {
        expect(example079([40, 40])).equal(true)
    })
    it(`Input array is "[30, 30]"  #10`, () => {
        expect(example079([30, 30])).equal(true)
    })
    it(`Input array is "[30, 40, 50]"  #11`, () => {
        expect(() => example079([30, 40, 50])).to.throw('The array length should be 0, 1, or 2')
    })
    it(`Input array is "[50, 40, 30]"  #12`, () => {
        expect(() => example079([50, 40, 30])).to.throw('The array length should be 0, 1, or 2')
    })
    it(`Input array is "[30, 30, 60]"  #13`, () => {
        expect(() => example079([30, 30, 60])).to.throw('The array length should be 0, 1, or 2')
    })
    it(`Input array is "[40, 80, 40]"  #14`, () => {
        expect(() => example079([40, 80, 40])).to.throw('The array length should be 0, 1, or 2')
    })
})