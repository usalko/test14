// tests/example164.spec.ts
import { expect } from 'chai'
import { example164 } from '../src/example164'

console.log(`Fundamental(ES6)-Part-I
14. Replace Multiple Object Keys

Write a JavaScript program to replace multiple object keys' names with the values provided.
`)
describe('#example164', () => {
    it(`Input keys Map are #1`, () => {
        expect(example164('大家好')).equal(9)
    })
})
