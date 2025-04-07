// tests/example266.spec.ts
import { expect } from 'chai'
import { example266 } from '../src/example266'

console.log(`Fundamental(ES6)-Part-I
116. Truthy Predicate Check on Collection

Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument).

 - Use Array.prototype.every() to check if each passed object has the specified property and if it returns a truthy value.

`)

describe('#example266', () => {
    it(`Input arguments are [{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex' #1`, () => {
        expect(example266([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex')).equal(true)
    })
})
