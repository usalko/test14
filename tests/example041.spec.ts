// tests/example041.spec.ts
import { expect } from 'chai'
import { example041 } from '../src/example041'

console.log(`
Write a JavaScript program to check a set of three numbers;
if the three numbers are the same return 30; 
otherwise return 20; 
and if two numbers are the same return 40.
`)
describe('#example041', () => {
    it(`Input numbers are 2, 2, 2 #1`, () => {
        expect(example041(2, 2, 2)).equal(30)
    })
    it(`Input numbers are 1, 2, 3 #1`, () => {
        expect(example041(1, 2, 3)).equal(20)
    })
    it(`Input numbers are 4, 4, 6 #1`, () => {
        expect(example041(4, 4, 6)).equal(40)
    })
    it(`Input numbers are 1, 4, 1 #1`, () => {
        expect(example041(1, 4, 1)).equal(40)
    })
    it(`Input numbers are 7, 18, 18 #1`, () => {
        expect(example041(7, 18, 18)).equal(40)
    })
})