// tests/example193.spec.ts
import { expect } from 'chai'
import { example193 } from '../src/example193'

console.log(`Fundamental(ES6)-Part-I
43. Change Function to Variadic


Write a JavaScript program to change a function that accepts an array into a variadic function.
`)

describe('#example193', () => {
    it(`Input function is: (x: any[]): boolean => { return x.find((y) => y) } #1`, () => {
        expect(example193((x: any[]): boolean => { return x.find((y) => y) })(undefined, 'a', 'b')).equal('a')
    })
})
