// tests/example210.spec.ts
import { expect } from 'chai'
import { example210 } from '../src/example210'

console.log(`Fundamental(ES6)-Part-I
60. Invoke Object Method by Key

Write a JavaScript program to create a function that invokes the method at a given key of an object.
Optionally, add any parameters that are supplied to the beginning of the arguments.
`)

describe('#example210', () => {
    it(`Input object is: {id: 1}, input args is 2, 3 #1`, () => {
        expect(example210({id: 1}, 2, 3)).equal(6)
    })
})
