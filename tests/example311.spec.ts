// tests/example311.spec.ts
import { expect } from 'chai'
import { example311 } from '../src/example311'


console.log(`Fundamental(ES6)-Part-I
171. Parse Cookie Header to Object


Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.


 - Use String.prototype.split(';') to separate key-value pairs from each other.
 - Use Array.prototype.map() and String.prototype.split('=') to separate keys from values in each pair.
 - Use Array.prototype.reduce() and decodeURIComponent() to create an object with all key-value pairs.

`)

describe('#example311', () => {
    it(`Input argument is 'foo=bar; equation=E%3Dmc%5E2 #1`, () => {
        expect(example311('foo=bar; equation=E%3Dmc%5E2')).equal({"foo":"bar","equation":"E=mc^2"})
    })
})
