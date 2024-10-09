// tests/example088.spec.ts
import { expect } from 'chai'
import { example088 } from '../src/example088'

console.log(`
Write a JavaScript program that takes two integers and a divisor.
If the given divisor divides both integers and does not divide either,
two specified integers are similar. Check whether two integers are similar or not.
`)
describe('#example088', () => {
    it(`Input integer1 is 3, integer2 is 9, divisor is 3 #1`, () => {
        expect(example088(3, 9, 3)).equal(true)
    })
    it(`Input integer1 is 19, integer2 is 7, divisor is 2 #1`, () => {
        expect(example088(19, 7, 2)).equal(false)
    })
})