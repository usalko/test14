// tests/example247.spec.ts
import { expect } from 'chai'
import { example247 } from '../src/example247'

console.log(`Fundamental(ES6)-Part-I
97. Object from Truthy Function Keys

Write a JavaScript program to create an object composed of the properties the given function returns truthy for.
The function is invoked with two arguments: (value, key).

 - Use Object.keys(obj) and Array.prototype.filter() to remove the keys for which fn returns a falsy value.
 - Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.
 - The callback function is invoked with two arguments: (value, key).

`)

describe('#example247', () => {
    it(`Input arguments are { a: 1, b: '2', c: 3 }, x => typeof x === 'number' #1`, () => {
        expect(example247({ a: 1, b: '2', c: 3 }, (x: any) => typeof x === 'number')).deep.equal({ a: 1, c: 3 })
    })
})
