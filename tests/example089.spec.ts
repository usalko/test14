// tests/example089.spec.ts
import { expect } from 'chai'
import { example089 } from '../src/example089'

console.log(`
Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
`)
describe('#example089', () => {
    it(`Input expression is "1 $ 2 = 3" #1`, () => {
        expect(example089('1 $ 2 = 3')).equal('+')
    })
    it(`Input expression is "12 $ 6 = 6" #2`, () => {
        expect(example089('12 $ 6 = 6')).equal('-')
    })
    it(`Input expression is "5 $ 2 = 10" #3`, () => {
        expect(example089('5 $ 2 = 10')).equal('*')
    })
    it(`Input expression is " $ 2 = 10" #4`, () => {
        expect(() => example089(' $ 2 = 10')).to.throw('The available expression form is number $ number = number but input expression is  $ 2 = 10')
    })
    it(`Input expression is "2 = 10" #5`, () => {
        expect(() => example089('2 = 10')).to.throw('The available expression form is number $ number = number but input expression is 2 = 10')
    })
    it(`Input expression is "" #6`, () => {
        expect(() => example089('')).to.throw('The available expression form is number $ number = number but input expression is ')
    })
})