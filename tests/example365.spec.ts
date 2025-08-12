// tests/example365.spec.ts
import { expect } from 'chai'
import { example365, } from '../src/example365'


console.log(`Fundamental(ES6)-Part-II
225. Standard Deviation


Write a JavaScript program to get the standard deviation of an array of numbers.

 
 - Use Array.prototype.reduce() to calculate the mean, variance and the sum of the variance of the values and
   determine the standard deviation.
 - Omit the second argument, usePopulation, to get the sample standard deviation or set it to true 
   to get the population standard deviation.


`)

describe('#example365', () => {
    it(`Input argument is: [10, 2, 38, 23, 38, 23, 21] #1`, () => {
        expect(example365([10, 2, 38, 23, 38, 23, 21])).equal(13.284434142114991)
    })
    it(`Input argument are: [10, 2, 38, 23, 38, 23, 21], true #2`, () => {
        expect(example365([10, 2, 38, 23, 38, 23, 21], true)).equal(12.29899614287479)
    })
})
