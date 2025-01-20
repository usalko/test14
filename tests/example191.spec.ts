// tests/example191.spec.ts
import { expect } from 'chai'
import { example191 } from '../src/example191'

console.log(`Fundamental(ES6)-Part-I
41. Object from Key-Value Pairs


Write a JavaScript program to create an object from the given key-value pairs.
`)

describe('#example191', () => {
    it(`Input array is [['a', 1], ['b', 2]] #1`, () => {
        expect(example191([['a', 1], ['b', 2]])).deep.equal({ a: 1, b: 2 })
    })
    it(`Input array is [[1, 10], [2, 20], [3, 30]] #1`, () => {
        expect(example191([[1, 10], [2, 20], [3, 30]])).deep.equal({ '1': 10, '2': 20, '3': 30 })
    })
})
