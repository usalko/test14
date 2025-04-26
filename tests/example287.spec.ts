// tests/example287.spec.ts
import { expect } from 'chai'
import { example287 } from '../src/example287'

console.log(`Fundamental(ES6)-Part-I
147. Serialize Cookie Name-Value to Set-Cookie Header

Write a JavaScript program to serialize a cookie name-value pair into a Set-Cookie header string.

 - Use template literals and encodeURIComponent() to create the appropriate string.

`)

describe('#example287', () => {
    it(`Input arguments are 'foo', 'bar'  #1`, () => {
        expect(example287('foo', 'bar')).equal("foo=bar")
    })
})
