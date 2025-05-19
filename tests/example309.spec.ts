// tests/example309.spec.ts
import { expect } from 'chai'
import { example309 } from '../src/example309'


console.log(`Fundamental(ES6)-Part-I
169. Function with Appended Partials


Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.


 - Use the spread operator (...) to append partials to the list of arguments of fn.


`)

describe('#example309', () => {
    it(`Input arguments are (greeting, name) => greeting + ' ' + name + '!', 'John'; 'Hello' #1`, () => {
        expect(example309((greeting: any, name: any) => greeting + ' ' + name + '!', 'John')('Hello')).equal('Hello John!')
    })
})
