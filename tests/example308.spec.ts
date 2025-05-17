// tests/example308.spec.ts
import { expect } from 'chai'
import { example308 } from '../src/example308'


console.log(`Fundamental(ES6)-Part-I
168. Group Elements by Predicate Truthiness


Write a JavaScript program to group the elements into two arrays,
depending on the provided function's truthiness for each element.


 - Use Array.prototype.reduce() to create an array of two arrays.
 - Use Array.prototype.push() to add elements for which fn returns true to the first array and elements for which fn returns false to the second one.


`)

describe('#example308', () => {
    it(`Input arguments are [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }], (o: any) => o.active #1`, () => {
        expect(example308([{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }], (o: any) => o.active)).deep.equal([{"user":"barney","age":36,"active":false},{"user":"fred","age":40,"active":true}])
    })
})
