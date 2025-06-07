// tests/example324.spec.ts
import { expect } from 'chai'
import { example324} from '../src/example324'


console.log(`Fundamental(ES6)-Part-I
184. Check String Uppercase


Write a JavaScript program to check if a given string is upper case or not.


 - Convert the given string to upper case, using String.prototype.toUpperCase() and compare it to the original.

`)

describe('#example324', () => {
    it(`Input argument is 'ABC' #1`, () => {
        expect(example324('ABC')).equal(true)
    })
    it(`Input argument is 'A3@$' #2`, () => {
        expect(example324('A3@$')).equal(true)
    })
    it(`Input argument is "aB4" #3`, () => {
        expect(example324('aB4')).equal(false)
    })
})
