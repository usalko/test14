// tests/example154.spec.ts
import { expect } from 'chai'
import { example154 } from '../src/example154'

console.log(`Fundamental(ES6)-Part-I
Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
`)
describe('#example154', () => {
    it(`Input string is 'header1,header2\ntext1,text2' #1`, () => {
        expect(example154('header1,header2\ntext1,text2')).deep.equal([{header1: 'text1', header2: 'text2'}])
    })
})
