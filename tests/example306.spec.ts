// tests/example306.spec.ts
import { expect } from 'chai'
import { example306 } from '../src/example306'


console.log(`Fundamental(ES6)-Part-I
166. Async Left-to-Right Composition


Write a JavaScript program to perform left-to-right function composition for asynchronous functions.


 - Use Array.prototype.reduce() and the spread operator (...) to perform function composition using Promise.prototype.then().
 - The functions can return a combination of normal values, Promises or be async, returning through await.
 - All functions must accept a single argument.

`)

describe('#example306', () => {
    it(`Input arguments are x => x + 1, x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)), x => x + 3, async x => (await x) + 4  #1`, () => {
        expect((await example306(
            (x: any) => x + 1,
            (x: any) => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
            (x: any) => x + 3,
            async (x: any) => (await x) + 4))(5)).equal(15)
    })
})
