// tests/example248.spec.ts
import { expect } from 'chai'
import { example248 } from '../src/example248'

console.log(`Fundamental(ES6)-Part-I
98. Filter Array of Objects by Condition

Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.

 - Use Array.prototype.filter() to filter the array based on the predicate fn so that it returns the objects for which the condition returned a truthy value.
 - On the filtered array, use Array.prototype.map() to return the new object.
 - Use Array.prototype.reduce() to filter out the keys which were not supplied as the keys argument.

`)

describe('#example248', () => {
    it(`Input arguments are [  { id: 1, name: 'john', age: 24 }, { id: 2, name: 'mike', age: 50, } ], ['id', 'name'], item => item.age > 24 #1`, () => {
        expect(example248([  { id: 1, name: 'john', age: 24 }, { id: 2, name: 'mike', age: 50, } ], ['id', 'name'], (item: any) => item.age > 24)).deep.equal([{ id: 2, name: 'mike' }])
    })
})
