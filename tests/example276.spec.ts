// tests/example276.spec.ts
import { expect } from 'chai'
import { example276 } from '../src/example276'

console.log(`Fundamental(ES6)-Part-I
136. String Permutations (With Duplicates)

Write a JavaScript program to generate all permutations of a string (contains duplicates).

 - Use recursion.
 - For each letter in the given string, create all the partial permutations for the rest of its letters.
 - Use Array.prototype.map() to combine the letter with each partial permutation.
 - Use Array.prototype.reduce() to combine all permutations in one array.
 - Base cases are for String.prototype.length equal to 2 or 1.
 - WARNING: The execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your environment to hang as it tries to solve all the different combinations.

`)

describe('#example276', () => {
    it(`Input argument is 'abc' #1`, () => {
        expect(example276('abc')).deep.equal(["abc","acb","bac","bca","cab","cba"])
    })
    it(`Input argument is '*$*' #2`, () => {
        expect(example276('*$*')).deep.equal(["*$*","**$","$**","$**","**$","*$*"])
    })
})
