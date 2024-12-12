// tests/example152.spec.ts
import { expect } from 'chai'
import { example152 } from '../src/example152'
import { JSDOM } from 'jsdom'

console.log(`Fundamental(ES6)-Part-I
Write a JavaScript program to copy a string to the clipboard.
`)
describe('#example152', () => {
    const { window } = new JSDOM(`...`)
    it(`Input string is 'text1' #1`, async () => {
        expect(await example152('text1', window)).equal('text1')
    })
})
