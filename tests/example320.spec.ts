// tests/example320.spec.ts
import { expect } from 'chai'
import { example320 } from '../src/example320'


console.log(`Fundamental(ES6)-Part-I
180. Object with Lowercase Keys


Write a JavaScript program to create an object from the specified object, where all keys are in lowercase.


 - Use Object.keys() and Array.prototype.reduce() to create a new object from the specified object.
 - Convert each key in the original object to lowercase, using String.prototype.toLowerCase().

`)

describe('#example320', () => {
    it(`Input argument is { Name: 'Adam', sUrnAME: 'Smith' } #1`, () => {
        expect(example320({ Name: 'Adam', sUrnAME: 'Smith' })).deep.equal({"name":"Adam","surname":"Smith"})
    })
})
