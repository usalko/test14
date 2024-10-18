// tests/example097.spec.ts
import { expect } from 'chai'
import { example097 } from '../src/example097'

console.log(`
Write a JavaScript program to find the shortest possible string. 
This can be converted into a string and converted into a palindrome by adding characters to the end of it.
`)
describe('#example097', () => {
    it(`Input array is ["Biology", "English", "Physics", "Maths","Chemistry"] #1`, () => {
        expect(example097(["Biology", "English", "Physics", "Maths", "Chemistry"])).equal('MathsshtaM')
    })
    it(`Input array is [] #2`, () => {
        expect(example097([])).equal('')
    })
})