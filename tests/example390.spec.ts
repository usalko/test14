// tests/example390.spec.ts
import { assert, expect } from 'chai'
import { example390 } from '../src/example390'


console.log(`Fundamental(ES6)-Part-II
250. Create Element from String

Write a JavaScript program to create an element from a string (without appending it to the document).

If the given string contains multiple elements, only the first one will be returned.

    - Use Document.createElement() to create a new element.
    - Use Element.innerHTML to set its inner HTML to the string supplied as the argument.
    - Use ParentNode.firstElementChild to return the element version of the string.
`)

describe('#example390', () => {
    it(`Input argument is <div class="container">
    <p>Hello!</p>
  </div>#1`, () => {
        expect(example390(`<div class="container">
    <p>Hello!</p>
  </div>`).className).equal("container")
    })
})
