// tests/example143.spec.ts
import { expect } from 'chai'
import { example143 } from '../src/example143'

console.log(`
Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
Note: Do not change the order if the lengths of two string are same.
`)
describe('#example143', () => {
    it(`Input array is ["string2", "a", "string1", "string_last", "eof", "1"] #1`, () => {
        expect(example143(['string1', 'a', 'string2', 'string_last', 'eof', '1'])).deep.equal(['a', '1', 'eof', 'string2', 'string1', 'string_last'])
    })
    it(`Input array is ["b", "a", "c", "a", "d", "a"] #2`, () => {
        expect(example143(['b', 'a', 'c', 'a', 'd', 'a'])).deep.equal(['b', 'a', 'c', 'a', 'd', 'a'])
    })
})
