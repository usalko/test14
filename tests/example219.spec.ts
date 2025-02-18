// tests/example219.spec.ts
import { expect } from 'chai'
import { example219 } from '../src/example219'

console.log(`Fundamental(ES6)-Part-I
69. Group Array and Count Elements

Write a JavaScript program to group array elements based on the given function.
It return the count of elements in each group.

Use Array.prototype.map() to map the values of an array to a function or property name.
Use Array.prototype.reduce() to create an object, where the keys are produced from the mapped results.
`)

describe('#example219', () => {
    it(`Input input arguments [6, 10, 100, 10], Math.sqrt  #1`, () => {
        expect(example219([6, 10, 100, 10], Math.sqrt)).equal(5)
    })
    it(`Input input arguments [6.1, 4.2, 6.3], Math.floor #1`, () => {
        expect(example219([6.1, 4.2, 6.3], Math.floor)).equal(5)
    })
    it(`Input input arguments ['one', 'two', 'three'], 'length' #1`, () => {
        expect(example219(['one', 'two', 'three'], 'length')).equal(5)
    })
})
