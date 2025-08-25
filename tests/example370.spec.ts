// tests/example370.spec.ts
import { expect } from 'chai'
import { example370, } from '../src/example370'


console.log(`Fundamental(ES6)-Part-II
230. Milliseconds to Human Format


Write a JavaScript program to generate the human-readable format in the given number of milliseconds.

 
 - Divide ms with the appropriate values to obtain the appropriate values for day, hour, minute, second and millisecond.
 - Use Object.entries() with Array.prototype.filter() to keep only non-zero values.
 - Use Array.prototype.map() to create the string for each value, pluralizing appropriately.
 - Use String.prototype.join(', ') to combine the values into a string.

`)

describe('#example370', () => {
    it(`Input argument is: 1001 #1`, () => {
        expect(example370(1001)).equal('1 second, 1 millisecond')
    })
    it(`Input argument is: 34325055574 #1`, () => {
        expect(example370(34325055574)).equal('397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds')
        // TODO: mailto error expect(example370(34325055574)).equal('397 days, 6 hours, 9 minutes, 15 seconds, 574 milliseconds')
    })
})
