// tests/example318.spec.ts
import { expect } from 'chai'
import { example318 } from '../src/example318'


console.log(`Fundamental(ES6)-Part-I
178. Merge Objects into New Object


Write a JavaScript program to create a new object from the combination of two or more objects.


 - Use Array.prototype.reduce() combined with Object.keys() to iterate over all objects and keys.
 - Use Object.prototype.hasOwnProperty() and Array.prototype.concat() to append values for keys existing in multiple objects.

`)

describe('#example318', () => {
    it(`Input arguments are 
        {
            a: [{ x: 2 }, { y: 4 }],
            b: 1
        },
        {
            a: { z: 3 },
            b: [2, 3],
            c: 'foo'
        },
        #1`, () => {
        expect(example318(
            {
            "a": [{ x: 2 }, { y: 4 }],
            "b": 1
        },
        {
            "a": { z: 3 },
            "b": [2, 3],
            "c": 'foo'
        },
        )).deep.equal({"a":[{"x":2},{"y":4},{"z":3}],"b":[1,2,3],"c":"foo"})
    })
})
