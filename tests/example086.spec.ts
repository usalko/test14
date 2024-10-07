// tests/example086.spec.ts
import { expect } from 'chai'
import { example086 } from '../src/example086'

console.log(`
Write a JavaScript program to find the types of a given angle.  

Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.
`)
describe('#example086', () => {
    it(`Input angle is 90 #1`, () => {
        expect(example086(90)).equal('Right')
    })
    it(`Input angle is 45 #2`, () => {
        expect(example086(45)).equal('Acute')
    })
    it(`Input angle is 135 #3`, () => {
        expect(example086(135)).equal('Obtuse')
    })
    it(`Input angle is 180 #4`, () => {
        expect(example086(180)).equal('Straight')
    })
    it(`Input angle is 225 #5`, () => {
        expect(example086(225)).equal('Unknown')
    })
})