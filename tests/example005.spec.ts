// tests/example005.spec.ts
import { assert, expect } from 'chai'
import { example005 } from '../src/example005'

describe('#example005', () => {
    it(`Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.`, () => {
        expect(example005('w3resource')).equal('ecruoser3w')
    })
})