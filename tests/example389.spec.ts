// tests/example389.spec.ts
import { assert, expect } from 'chai'
import { example389 } from '../src/example389'


console.log(`Fundamental(ES6)-Part-II
249. Get Current URL

Write a JavaScript program to get the current URL. 

    - Use Window.location.href to get the current URL.
`)

describe('#example389', () => {
    it(`No input arguments #1`, () => {
        expect(example389()).equal("http://localhost/")
    })
})
