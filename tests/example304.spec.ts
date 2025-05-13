// tests/example304.spec.ts
import { expect } from 'chai'
import { example304 } from '../src/example304'


console.log(`Fundamental(ES6)-Part-I
164. Singular or Plural Form


Write a JavaScript program that returns the singular or plural form of the word based on the input number.


If the first argument is an object, it will use a closure by returning a function that can auto-pluralize words that don't simply end in s if the supplied dictionary contains the word.

 - Use a closure to define a function that pluralizes the given word based on the value of num.
 - If num is either -1 or 1, return the singular form of the word.
 - If num is any other number, return the plural form.
 - Omit the third argument, plural, to use the default of the singular word + s, or supply a custom pluralized word when necessary.
 - If the first argument is an object, return a function which can use the supplied dictionary to resolve the correct plural form of the word.

`)

describe('#example304', () => {
    it(`Input arguments are 0, 'apple' #1`, () => {
        expect(example304(0, 'apple')).equal('apples')
    })
    it(`Input arguments are 1, 'apple' #2`, () => {
        expect(example304(1, 'apple')).equal('apple')
    })
    it(`Input arguments are 2, 'apple' #3`, () => {
        expect(example304(2, 'apple')).equal('apples')
    })
    it(`Input arguments are 2, 'person', 'people' #4`, () => {
        expect(example304(2, 'person', 'people')).equal('people')
    })
})
