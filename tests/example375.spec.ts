// tests/example375.spec.ts
import { expect } from 'chai'
import { example375, } from '../src/example375'


console.log(`Fundamental(ES6)-Part-II
235. Last Key Satisfying Condition


Write a JavaScript program to get the last key that satisfies the provided testing function, otherwise undefined is returned.

`)

describe('#example375', () => {
    it(`Input arguments are: {"first": 1, "middle": 3, "last": 2}, (x: number) => x > 1 #1`, () => {
        expect(example375({ "first": 1, "last": 2 }, (x: number) => x > 1)).equal("last")
    })
})
