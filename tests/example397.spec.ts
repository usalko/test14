// tests/example397.spec.ts
import { assert, expect } from 'chai'
import { example397 } from '../src/example397'


console.log(`Fundamental(ES6)-Part-II
257. 2D Array to CSV

Write a JavaScript program to convert a 2D array to a comma-separated value (CSV) string. 


    - Use Array.prototype.map() and Array.prototype.join(delimiter) to combine individual 1D arrays (rows) into strings.
    - Use Array.prototype.join('\n') to combine all rows into a CSV string, separating each row with a newline.
    - Omit the second argument, delimiter, to use a default delimiter of ,.

`)

describe('#example397', () => {
    it(`Input argument is: [['a', 'b'], ['c', 'd']] #1`, () => {
        expect(example397([['a', 'b'], ['c', 'd']])).equal(`"a","b"\n"c","d"`)
    })
    it(`Input arguments are: [['a', 'b'], ['c', 'd']], ';' #1`, () => {
        expect(example397([['a', 'b'], ['c', 'd']], ';')).equal(`"a";"b"\n"c";"d"`)
    })
})
