// tests/example198.spec.ts
import { expect } from 'chai'
import { example198 } from '../src/example198'

console.log(`Fundamental(ES6)-Part-I
48. Array of Function Property Names

Write a JavaScript program to get an array of function property names from the own 
(and optionally inherited) enumerable properties of an object.

Use Object.keys(obj) to iterate over the object's own properties.
If inherited is true, use Object.getPrototypeOf(obj) to also get the object's inherited properties.
Use Array.prototype.filter() to keep only those properties that are functions.
Omit the second argument, inherited, to not include inherited properties by default.
`)

describe('#example198', () => {
    it(`Input object 1 is: 
// Define a constructor function 'Foo'.
function Foo() {
  // Assign arrow function expressions to properties 'a' and 'b'.
  this.a = () => 1;
  this.b = () => 2;
}

// Assign an arrow function expression to the prototype property 'c'.
Foo.prototype.c = () => 3;
        #1`, () => {

        function Foo() {
            // Assign arrow function expressions to properties 'a' and 'b'.
            this.a = () => 1
            this.b = () => 2
        }

        Foo.prototype.c = () => 3


        expect(example198(new Foo(), true)).deep.equal(['a', 'b', 'c'])
    })
})
