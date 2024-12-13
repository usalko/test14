// tests/example153.spec.ts
import { expect } from 'chai'
import { example153 } from '../src/example153'
import { JSDOM } from 'jsdom'

console.log(`Fundamental(ES6)-Part-I
Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
`)
describe('#example153', () => {
    it(`Input string is 'header1,header2\ntext1,text2' #1`, () => {
        expect(example153('header1,header2\ntext1,text2')).deep.equal([['header1', 'header2'], ['text1', 'text2']])
    })
})
