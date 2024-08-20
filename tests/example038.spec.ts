// tests/example038.spec.ts
import { expect } from 'chai'
import { example038 } from '../src/example038'

console.log(`
Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade.
The grading criteria are as follows:

- If the total marks fall within the range of 89 to 100 (inclusive),
    the student receives an A+ grade.

- If the examination is labeled as "Final-exam," the student will receive an A+ grade only
    if their total marks are 90 or greater. Assume that final examination means we pass
    'true' as second parameter otherwise blank.

- If the student achieves an A+ grade, the program should return 'true';
    otherwise, it should return 'false'.

`)
describe('#example038', () => {
    it(`Input data is totalMarks: 50, finalExam: false #1`, () => {
        expect(example038(50, false)).equal(false)
    })
    it(`Input data is totalMarks: 89, finalExam: false #2`, () => {
        expect(example038(89, false)).equal(true)
    })
    it(`Input data is totalMarks: 89, finalExam: true #3`, () => {
        expect(example038(89, true)).equal(false)
    })
    it(`Input data is totalMarks: 90, finalExam: true #4`, () => {
        expect(example038(90, true)).equal(true)
    })
    it(`Input data is totalMarks: 95, finalExam: true #5`, () => {
        expect(example038(95, true)).equal(true)
    })
    it(`Input data is totalMarks: 101, finalExam: true #6`, () => {
        expect(() => example038(101, true)).to.throw('Invalid rating value 101, the value should be between 0 and 100 (inclusive).')
    })
})