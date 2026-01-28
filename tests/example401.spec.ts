// tests/example398.spec.ts
import { assert, expect } from 'chai'
import { example400 } from '../src/example400'


console.log(`Fundamental(ES6)-Part-II
261. Check Page Bottom Visible

Write a JavaScript program that returns true if the page bottom is visible, false otherwise. 

    - Use scrollY, scrollHeight and clientHeight to determine if the bottom of the page is visible.

`)

describe('#example401', () => {
    it(`No input arguments #1`, () => {
        expect(example401()).equal('')
    })
})
