// tests/example338.spec.ts
import { expect } from 'chai'
import { example338 } from '../src/example338'


console.log(`Fundamental(ES6)-Part-II
198. Check If Function


Write a JavaScript program to check if the given argument is a function.


 - Use typeof to check if a value is classified as a function primitive.


`)

describe('#example338', () => {
    it(`Input argument is 'x' #1`, () => {
        expect(example338('x')).equal(false)
    })
    it(`Input argument is x => x #2`, () => {
        expect(example338((x: any) => x)).equal(true)
    })
})
