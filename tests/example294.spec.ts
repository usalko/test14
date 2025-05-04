// tests/example294.spec.ts
import { expect } from 'chai'
import { example294 } from '../src/example294'

console.log(`Fundamental(ES6)-Part-I
154. Object from Properties Failing Function


Write a JavaScript program to create an object composed of the properties the given function returns false for.
The function is invoked with two arguments: (value and key).

 - Use Object.keys() and Array.prototype.filter() to remove the keys for which fn returns a truthy value.
 - Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.
 - The callback function is invoked with two arguments: (value, key).

`)

describe('#example294', () => {
    it(`Input arguments are { a: 1, b: '2', c: 3 }, x => typeof x === 'number' #1`, () => {
        expect(example294({ a: 1, b: '2', c: 3 }, (x: any) => typeof x === 'number')).deep.equal({b: '2'})
    })
})
