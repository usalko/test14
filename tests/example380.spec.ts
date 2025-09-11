// tests/example380.spec.ts
import { expect } from 'chai'
import { example380, } from '../src/example380'


console.log(`Fundamental(ES6)-Part-II
240. Check Parent Contains Child


Write a JavaScript program that returns true if the parent element contains the child element, false otherwise.


Note: Check that parent is not the same element as child, use parent.contains(child) to check if the parent element contains the child element.

 - Check that parent is not the same element as child.
 - Use Node.contains() to check if the parent element contains the child element.


`)

describe('#example380', () => {
    it(`Input arguments are document.querySelector('head'), document.querySelector('title') #1`, () => {
        expect(example380(document.querySelector('head'), document.querySelector('title'))).equal(true)
    })
    it(`Input arguments are document.querySelector('head'), document.querySelector('body') #1`, () => {
        expect(example380(document.querySelector('head'), document.querySelector('body'))).equal(false)
    })
})
