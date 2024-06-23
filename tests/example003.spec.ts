// tests/example003.spec.ts
import { assert, expect } from 'chai'
import { example003 } from '../src/example003'

describe('#example003', () => {
    const currentDate = new Date()
    it(`Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy`, () => {
        expect(example003(currentDate, 'mm-dd-yyyy')).equal(`${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}-${currentDate.getFullYear().toString().padStart(4, '0')}`)
    })
})