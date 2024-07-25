// tests/example012.spec.ts
import { expect } from 'chai'
import { example012 } from '../src/example012'

console.log(`
Write a JavaScript program to get the website URL (loading page).
`)
describe('#example012', () => {
    it(`download google page (www.google.com)`, async () => {
        expect(await example012({url: 'www.google.com'})).contains('google.com')
    })
    it(`download test6.qstand.art page`, async () => {
        expect(await example012({url: 'test6.qstand.art'})).contains('test6')
    })

})