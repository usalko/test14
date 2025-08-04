// tests/example361.spec.ts
import { expect } from 'chai'
import { example361, } from '../src/example361'


console.log(`Fundamental(ES6)-Part-II
221. Time from Date Object


Write a JavaScript program to get a string like HH:MM:SS from a Date object.

 
 - Use Date.prototype.toTimeString() and String.prototype.slice() to get the HH:MM:SS part of a given Date object.


`)

describe('#example361', () => {
    it(`Input arguments are: new Date(2025, 8, 4, 13, 0, 0, 999) #1`, () => {
        expect(example361(new Date(2025, 8, 4, 13, 0, 0, 999))).equal('13:00:00')
    })
})
