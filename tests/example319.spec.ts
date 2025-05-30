// tests/example319.spec.ts
import { expect } from 'chai'
import { example319 } from '../src/example319'


console.log(`Fundamental(ES6)-Part-I
179. Object Comparison by Function


Write a JavaScript program to compare two objects to determine if the first contains equivalent property values
to the second one. This is based on a provided function.


 - Use Object.keys() to get all the keys of the second object.
 - Use Array.prototype.every(), Object.prototype.hasOwnProperty() and the provided function to determine if all keys exist in the first object and have equivalent values.
 - If no function is provided, the values will be compared using the equality operator.

`)

describe('#example319', () => {
    const isGreeting = (val: any) => /^h(?:i|ello)$/.test(val);
    it(`Input arguments are { greeting: 'hello' }, { greeting: 'hi' }, (oV: any, sV: any) => isGreeting(oV) && isGreeting(sV) #1`, () => {
        expect(example319({ greeting: 'hello' }, { greeting: 'hi' }, (oV: any, sV: any) => isGreeting(oV) && isGreeting(sV))).equal(true)
    })
})
