// tests/example014.spec.ts
import { expect } from 'chai'
import { example014 } from '../src/example014'

console.log(`
Write a JavaScript exercise to get the filename extension.
`)
describe('#example014', () => {
    it(`extract file extension #1`, () => {
        expect(example014('/tmp/path/extra.md')).equal('md')
    })
    it(`extract file extension #2`, () => {
        expect(example014('/tmp/path/without_extension')).equal('')
    })
})