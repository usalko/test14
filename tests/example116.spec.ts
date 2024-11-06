// tests/example116.spec.ts
import { expect } from 'chai'
import { example116 } from '../src/example116'

console.log(`
Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#))
with a digit to produce an integer divisible by 3. 
For a string "2*0", the output should be : ["210", "240", "270"]
`)
describe('#example116', () => {
    it(`Input string is "2*0" #1`, () => {
        expect(example116('2*0', '*', 3)).deep.equal(['210', '240', '270'])
    })
})