// tests/example245.spec.ts
import { expect } from 'chai'
import { example245 } from '../src/example245'

console.log(`Fundamental(ES6)-Part-I
95. Add Event Listener with Delegation

Write a JavaScript program to add an event listener to an element with the ability to use event delegation.

 - Use EventTarget.addEventListener() to add an event listener to an element.
 - If there is a target property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct this context.
 - Omit opts to default to non-delegation behavior and event bubbling.
 - Returns a reference to the custom delegator function, in order to be possible to use with off.

`)

describe('#example245', () => {

    // Define a test function.
    const fn = () => console.log('!')

    it(`Input arguments are document.body, 'click', fn #1`, () => {
        expect(example245(document.body, 'click', fn)).equal(undefined)
    })
    it(`Input arguments are document.body, 'click', fn, { target: 'p' } #2`, () => {
        expect(example245(document.body, 'click', fn, { target: 'p' })).equal(undefined)
    })
    it(`Input arguments are document.body, 'click', fn, { options: true } #2`, () => {
        expect(example245(document.body, 'click', fn, { options: true })).equal(undefined)
    })
})
