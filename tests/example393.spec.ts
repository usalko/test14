// tests/example393.spec.ts
import { assert, expect } from 'chai'
import { example393 } from '../src/example393'


console.log(`Fundamental(ES6)-Part-II
253. Generate UUID (Browser)

Write a JavaScript program to generate a UUID in a  browser. 

    - Use Crypto.getRandomValues() to generate a UUID, compliant with RFC4122 version 4.
    - Use Number.prototype.toString(16) to convert it to a proper UUID.
`)

describe('#example393', () => {
    it(`No input arguments #1`, () => {
        expect(example393()).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
    })
})
