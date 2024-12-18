// tests/example156.spec.ts
import { expect } from 'chai'
import { example156 } from '../src/example156'

console.log(`Fundamental(ES6)-Part-I
6. Target Value in Nested JSON

Write a JavaScript program to target a given value in a nested JSON object based on the given key.
`)
describe('#example156', () => {
    it(`Input object is {foo: "bar"}, key is "foo" #1`, () => {
        expect(example156({foo: 'bar'}, 'foo')).equal('bar')
    })
})
