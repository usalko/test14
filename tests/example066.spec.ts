// tests/example066.spec.ts
import { expect } from 'chai'
import { example066 } from '../src/example066'

console.log(`
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
`)
describe('#example066', () => {
    it(`Input string is "Los Alamos" #1`, () => {
        expect(example066('Los Alamos')).equal('Los Alamos')
    })
    it(`Input string is "New York" #2`, () => {
        expect(example066('New York')).equal('New York')
    })
    it(`Input string is "Moscow" #3`, () => {
        expect(example066('Moscow')).equal('')
    })
})