// tests/example286.spec.ts
import { expect } from 'chai'
import { example286 } from '../src/example286'

console.log(`Fundamental(ES6)-Part-I
146. Shallow Clone Object


Write a JavaScript program to create a shallow clone of an object.

 - Use Object.assign() and an empty object ({}) to create a shallow clone of the original.

`)

describe('#example286', () => {
    it(`Input argument is { x: true, y: 1 } #1`, () => {
        expect(example286({ x: true, y: 1 })).deep.equal({ x: true, y: 1 })
    })
})
