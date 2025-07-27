// tests/example358.spec.ts
import { expect } from 'chai'
import { example358, } from '../src/example358'


console.log(`Fundamental(ES6)-Part-II
218. Function Execution Frequency (Hz)


Write a JavaScript program to get the number of times a function executed per second.
HZ is the unit for hertz, the unit of frequency defined as one cycle per second.


 - Use performance.now() to get the difference in milliseconds
   before and after the iteration loop to calculate
   the time elapsed executing the function iterations times.
 - Return the number of cycles per second by converting milliseconds to seconds
   and dividing it by the time elapsed.
 - Omit the second argument, iterations, to use the default of 100 iterations.


`)

describe('#example358', () => {
    it(`Input arguments are:
        (numbers: any) => {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) sum += numbers[i];
            return sum;
        },
        (numbers: any) => numbers.reduce((acc, n) => acc + n, 0),
        numbers = Array(10000).fill().map((_, i) => i),
        #1`, () => {
        expect(example358((numbers: any) => {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) sum += numbers[i];
            return sum;
        }, Array(10000).fill(0).map((_, i) => i))).lte(example358(
            (numbers: any) => numbers.reduce((acc: number, n: number) => acc + n, 0)
            , Array(10000).fill(0).map((_, i) => i)))
    })
})
