// tests/example201.spec.ts
import { expect } from 'chai'
import { example201 } from '../src/example201'

console.log(`Fundamental(ES6)-Part-I
51. Get Current URL Parameters as Object

Write a JavaScript program to get an object containing the current URL parameters.
`)

describe('#example201', () => {
    it(`Input url is: https://example.com/?test1=9&test2=a 1 #1`, () => {
        expect(example201('https://example.com/?test1=9&test2=a')).deep.equal({ test1: 1, test2: 'a' })
    })
})
