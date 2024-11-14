// tests/example124.spec.ts
import { expect } from 'chai'
import { example124 } from '../src/example124'

console.log(`
Write a JavaScript program to create the NOR value of two given booleans. 
Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or.
That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
Sample Example:
For x = true and y = false,
the output should be logical_Nor(x, y) = false;
For x = false and y = false, the output should be logical_Nor(x, y) = true.
`)
describe('#example124', () => {
    it(`Input boolean1 is true, input boolean2 is true #1`, () => {
        expect(example124(true, true)).equal(true)
    })
    it(`Input boolean1 is false, input boolean2 is true #2`, () => {
        expect(example124(false, true)).equal(false)
    })
    it(`Input boolean1 is true, input boolean2 is false #3`, () => {
        expect(example124(true, false)).equal(false)
    })
    it(`Input boolean1 is false, input boolean2 is false #4`, () => {
        expect(example124(false, false)).equal(true)
    })
})