// tests/example369.spec.ts
import { expect } from 'chai'
import { example369, } from '../src/example369'


console.log(`Fundamental(ES6)-Part-II
229. Camelcase to String


Write a JavaScript program to convert a string from camelcase.

 
 - Use String.prototype.replace() to break the string into words and add a separator between them.
 - Omit the second argument to use a default separator of _.
`)

describe('#example369', () => {
    it(`Input arguments are: 'someDatabaseFieldName', ' ' #1`, () => {
        expect(example369('someDatabaseFieldName', ' ')).equal('some database field name')
    })
    it(`Input arguments are: 'someLabelThatNeedsToBeCamelized', '-' #2`, () => {
        expect(example369('someLabelThatNeedsToBeCamelized', '-')).equal('some-label-that-needs-to-be-camelized')
    })
    it(`Input arguments are: 'someJavascriptProperty', '_' #3`, () => {
        expect(example369('someJavascriptProperty', '_')).equal('some_javascript_property')
    })
    it(`Input arguments is: 'someJavascriptProperty' #4`, () => {
        expect(example369('someJavascriptProperty')).equal('some_javascript_property')
    })
})
