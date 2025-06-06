// tests/example323.spec.ts
import { expect } from 'chai'
import { example323} from '../src/example323'


console.log(`Fundamental(ES6)-Part-I
183. Check Valid JSON


Write a JavaScript program to check if the provided argument is valid JSON.


 - Use JSON.parse() and a try... catch block to check if the provided string is a valid JSON.


`)

describe('#example323', () => {
    it(`Input argument is '{"name":"Adam","age":20}' #1`, () => {
        expect(example323('{"name":"Adam","age":"20"}')).equal(true)
    })
    it(`Input argument is '{"name":"Adam",age:"20"}' #2`, () => {
        expect(example323('{"name":"Adam",age:"20"}')).equal(false)
    })
    it(`Input argument is null #3`, () => {
        expect(example323(null)).equal(false)
    })
})
