// tests/example209.spec.ts
import { expect } from 'chai'
import { example209 } from '../src/example209'

console.log(`Fundamental(ES6)-Part-I
59. Invoke Function in Given Context

Write a JavaScript program to create a function that invokes fn in a given context.
Optionally add any additional variables to the arguments beginning.
`)

describe('#example209', () => {
    it(`Input function is: (x) => boolean, input context is: 1 #1`, () => {
        expect(example209((x: any): number => {return x}, 1)).equal(1)
    })
})
