// tests/example376.spec.ts
import { expect } from 'chai'
import { example376, } from '../src/example376'


console.log(`Fundamental(ES6)-Part-II
236. First Key Satisfying Condition


Write a JavaScript program to get the first key that satisfies the provided testing function. Otherwise return undefined.

Use Object.keys(obj) to get all the properties of the object, Array.prototype.find() to test each key-value pair using fn.
The callback receives three arguments - the value, the key and the object.


`)

describe('#example376', () => {
    it(`Input arguments are: {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active'] #1`, () => {
        expect(example376({
            barney: { age: 36, active: true },
            fred: { age: 40, active: false },
            pebbles: { age: 1, active: true }
        },
            (o: any) => o['active'])).equal("barney")
    })
})
