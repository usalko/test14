// tests/example312.spec.ts
import { expect } from 'chai'
import { example312 } from '../src/example312'


console.log(`Fundamental(ES6)-Part-I
172. Function with Transformed Arguments


Write a JavaScript program to create a function that invokes the provided function with its arguments transformed.


 - Use Array.prototype.map() to apply transforms to args in combination with the spread operator (...)
 to pass the transformed arguments to fn.

`)

describe('#example312', () => {
    it(`Input arguments are (x: any, y: any) => [x, y], [(n: any) => n * n, (n: any) => n * 2]; 9, 3 #1`, () => {
        expect(example312((x: any, y: any) => [x, y], [(n: any) => n * n, (n: any) => n * 2])(9, 3)).deep.equal([81, 6])
    })
    it(`Input arguments are (x: any, y: any) => [x, y], [(n: any) => n * n, (n: any) => n * 2]; 5, 2 #1`, () => {
        expect(example312((x: any, y: any) => [x, y], [(n: any) => n * n, (n: any) => n * 2])(5, 2)).deep.equal([25, 4])
    })
})
