// tests/example391.spec.ts
import { assert, expect } from 'chai'
import { example391 } from '../src/example391'


console.log(`Fundamental(ES6)-Part-II
251. Write JSON to File

Write a JavaScript program to write a JSON object to a file.

   -  Use fs.writeFileSync(), template literals and JSON.stringify() to write a json object to a .json file.
`)

describe('#example391', () => {
    it(`Input arguments are { test: 'is passed' }, 'testJsonFile' #1`, () => {
        expect(example391({ test: 'is passed' }, 'testJsonFile')).equal("ok")
    })
})
