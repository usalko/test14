// tests/example002.spec.ts
import { assert, expect } from 'chai'
import { example002 } from '../src/example002'

describe('#example002', () => {
    it('Write a JavaScript program to print the current window contents.', () => {
        expect(() => example002()).to.throw()
    })
})