// tests/example310.spec.ts
import { expect } from 'chai'
import { example310 } from '../src/example310'


console.log(`Fundamental(ES6)-Part-I
170. Function with Prepended Partials


Write a JavaScript program to create a function that invokes fn with partials prepended to the arguments it receives.


 - Use the spread operator (...) to prepend partials to the list of arguments of fn.

`)

describe('#example310', () => {
    it(`Input arguments are (greeting, name) => greeting + ' ' + name + '!', 'Hello'; 'John' #1`, () => {
        expect(example310((greeting: any, name: any) => greeting + ' ' + name + '!', 'Hello')('John')).equal('Hello John!')
    })
})
