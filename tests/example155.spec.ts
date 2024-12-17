// tests/example155.spec.ts
import { expect } from 'chai'
import { example155 } from '../src/example155'

console.log(`Fundamental(ES6)-Part-I
5. Array of Objects to CSV String

Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
`)
describe('#example155', () => {
    it(`Input array is [{header1: 'text1', header2: 'text2'}] #1`, () => {
        expect(example155([{header1: 'text1', header2: 'text2'}])).equal('header1,header2\ntext1,text2')
    })
})
