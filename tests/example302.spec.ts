// tests/example302.spec.ts
import { expect } from 'chai'
import { example302 } from '../src/example302'
import { writeFileSync } from 'fs';


console.log(`Fundamental(ES6)-Part-I
162. Async to Promise Conversion


Write a JavaScript program to convert an asynchronous function to return a promise.


 - Use currying to return a function returning a Promise that calls the original function.
 - Use the rest operator (...) to pass in all the parameters.
 - Note: In Node 8+, you can use util.promisify.

`)

describe('#example302', () => {
    it(`Input argument is (d, cb) => setTimeout(cb, d) #1`, () => {
        expect(example302(['a', 'b', 'c', 'd'], ['b', 'd'])).deep.equal(['b', 'd'])
    })
})
