// tests/example317.spec.ts
import { expect } from 'chai'
import { example317 } from '../src/example317'


console.log(`Fundamental(ES6)-Part-I
177. Minimum Value After Mapping


Write a JavaScript program to get the minimum value of an array,
after mapping each element to a value using the provided function.


 - Use Array.prototype.map() to map each element to the value returned by fn.
 - Use Math.min() to get the minimum value.

`)

describe('#example317', () => {
    it(`Input arguments are [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o: any) => o.n #1`, () => {
        expect(example317([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o: any) => o.n)).equal(2)
    })
    it(`Input arguments are [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n' #2`, () => {
        expect(example317([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')).equal(2)
    })
})
