// tests/example013.spec.ts
import { expect } from 'chai'
import { example013 } from '../src/example013'

console.log(`
Write a JavaScript exercise to create a variable using a user-defined name. 
`)
describe('#example013', () => {
    const correctUserInput = 'correctVariableName123'
    const incorrectUserInput = '123IncorrectVariableName'
    it(`define user variable with name ${correctUserInput}`, () => {
        expect(example013(correctUserInput, 1)).equal('{"correctVariableName123":1}')
    })
    // it(`test incorrect user input ${incorrectUserInput}`, () => {
    //     expect(example013(incorrectUserInput, 1)).to.throw(`Invalid user input ${incorrectUserInput}`)
    // })

})