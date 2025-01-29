// tests/example199.spec.ts
import { expect } from 'chai'
import { example199 } from '../src/example199'

console.log(`Fundamental(ES6)-Part-I
49. Retrieve Selected Properties from Object

Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.

Use Array.prototype.map() for each selector, String.prototype.replace() to replace square brackets with dots.
Use String.prototype.split('.') to split each selector.
Use Array.prototype.filter() to remove empty values and Array.prototype.reduce() to get the value indicated by each selector.
`)

describe('#example199', () => {
    it(`Input object 1 is: { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] } #1`, () => {
        expect(example199(
            { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] },
            'selector.to.val', 'target[0]', 'target[2].a'
        )).deep.equal([ 'val to select', 1, 'test' ])
    })
})
