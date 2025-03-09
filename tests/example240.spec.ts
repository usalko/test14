// tests/example240.spec.ts
import { expect } from 'chai'
import { example240 } from '../src/example240'

console.log(`Fundamental(ES6)-Part-I
90. Nest Flat Array Recursively

Write a JavaScript program to nest a given flat array of objects linked to one another recursively.

Note: Useful for nesting comments, such as the ones on reddit.com.

Use recursion.
 - Use Array.prototype.filter() to filter the items where the id matches the link.
 - Use Array.prototype.map() to map each item to a new object that has a children property which recursively nests the items based on which ones are children of the current item.
 - Omit the second argument, id, to default to null which indicates the object is not linked to another one (i.e. it is a top level object).
 - Omit the third argument, link, to use 'parent_id' as the default property which links the object to another one by its id.
`
)

describe('#example240', () => {
    it(`Input argument is [ { id: 1, parent_id: null }, { id: 2, parent_id: 1 }, { id: 3, parent_id: 1 }, { id: 4, parent_id: 2 }, { id: 5, parent_id: 4 } ] #1`, () => {
        expect(example240([ { id: 1, parent_id: null }, { id: 2, parent_id: 1 }, { id: 3, parent_id: 1 }, { id: 4, parent_id: 2 }, { id: 5, parent_id: 4 } ])).deep.equal([{"id":1,"parent_id":null,"children":[{"id":2,"parent_id":1,"children":[{"id":4,"parent_id":2,"children":[{"id":5,"parent_id":4,"children":[]}]}]},{"id":3,"parent_id":1,"children":[]}]}]        )
    })
})
