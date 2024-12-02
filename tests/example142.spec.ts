// tests/example142.spec.ts
import { expect } from 'chai'
import { example142 } from '../src/example142'

console.log(`
Write a JavaScript program to simplify a given absolute path for a file in Unix-style. 

"/a/./"   --> means stay at the current directory 'a'
"/a/b/.." --> means jump to the parent directory
              from 'b' to 'a'
"////"    --> consecutive multiple '/' are a  valid  
              path, they are equivalent to single "/".

`)
describe('#example142', () => {
    it(`Input path is "/home/" #1`, () => {
        expect(example142('/home/')).equal('/home')
    })
    it(`Input path is "/a/./b/../../c/" #2`, () => {
        expect(example142('/a/./b/../../c/')).equal('/c')
    })
    it(`Input path is "/a/.." #3`, () => {
        expect(example142('/a/..')).equal('/')
    })
    it(`Input path is "/a/../" #4`, () => {
        expect(example142('/a/../')).equal('/')
    })
    it(`Input path is "/../../../../../a" #5`, () => {
        expect(example142('/../../../../../a')).equal('/a')
    })
    it(`Input path is "/a/./b/./c/./d/" #6`, () => {
        expect(example142('/a/./b/./c/./d/')).equal('/a/b/c/d')
    })
    it(`Input path is "/a/../.././../../." #7`, () => {
        expect(example142('/a/../.././../../.')).equal('/')
    })
    it(`Input path is "" #8`, () => {
        expect(example142('/a//b//c//////d')).equal('/a/b/c/d')
    })

})
