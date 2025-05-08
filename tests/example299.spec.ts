// tests/example299.spec.ts
import { expect } from 'chai'
import { example299 } from '../src/example299'
import { writeFileSync } from 'fs';


console.log(`Fundamental(ES6)-Part-I
159. Read File Lines into Array


Write a JavaScript program to get an array of lines from the specified file.


 - Use fs.readFileSync() to create a Buffer from a file.
 - Convert buffer to string using buf.toString(encoding) function.
 -Use String.prototype.split(\n) to create an array of lines from the contents of the file.

`)

describe('#example299', () => {
    writeFileSync('test.txt', ['line1', 'line2', 'line3'].join('\n'), {
        flag: 'w',
       })

    it(`Input argument is 'test.txt' #1`, () => {
        expect(example299('test.txt')).deep.equal(['line1', 'line2', 'line3'])
    })
})
