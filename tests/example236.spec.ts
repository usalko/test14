// tests/example236.spec.ts
import { expect } from 'chai'
import { example236 } from '../src/example236'

console.log(`Fundamental(ES6)-Part-I
86. Maximum Value of Array with Mapping

Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.

 - Use Array.prototype.map() to map each element to the value returned by fn.
 - Use Math.max() to get the maximum value.

`)

describe('#example236', () => {
    it(`Input arguments are [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n #1`, () => {
        expect(example236([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o: any) => o.n)).equal(8)
    })
    it(`Input arguments are [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n' #2`, () => {
        expect(example236([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')).equal(8)
    })
})
