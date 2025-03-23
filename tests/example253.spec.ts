// tests/example253.spec.ts
import { expect } from 'chai'
import { example253 } from '../src/example253'

console.log(`Fundamental(ES6)-Part-I
103. String to Array of Words

Write a JavaScript program to convert a given string into an array of words.

 - Use String.prototype.split() with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings.
 - Use Array.prototype.filter() to remove any empty strings.
 - Omit the second argument, pattern, to use the default regexp.

`)

describe('#example253', () => {
    it(`Input argument is 'I love javaScript!!' #1`, () => {
        expect(example253('I love javaScript!!')).deep.equal(['I', 'love', 'javaScript'])
    })
    it(`Input argument is 'python, java, php' #1`, () => {
        expect(example253('python, java, php')).deep.equal(["python","java","php"])
    })
})
