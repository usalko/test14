// tests/example243.spec.ts
import { expect } from 'chai'
import { example243 } from '../src/example243'

console.log(`Fundamental(ES6)-Part-I
93. Remove Event Listener from Element

Write a JavaScript program to remove an event listener from an element.

 - Use EventTarget.removeEventListener() to remove an event listener from an element.
 - Omit the fourth argument opts to use false or specify it based on the options used when the event listener was added.

 `)

describe('#example243', () => {
    // Add an event listener for 'click' events on the document body, calling the 'fn' function.
    const fn = () => console.log('!')
    document.body.addEventListener('click', fn)

    it(`Input arguments are fn #1`, () => {
        expect(example243(fn)).equal('click')
    })
})
