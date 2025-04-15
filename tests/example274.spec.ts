// tests/example274.spec.ts
import { expect } from 'chai'
import { example274 } from '../src/example274'

console.log(`Fundamental(ES6)-Part-I
124. Reduce Array-Like to Hash Map

Write a JavaScript program to reduce a given Array-like into a value hash (keyed data store).

Note: Given an Iterable or Array-like structure, call Array.prototype.reduce.call() on the provided object
to step over it and return an Object, keyed by the reference value.

 - Given an iterable object or array-like structure, call Array.prototype.reduce.call() on the provided object
 to step over it and return an Object, keyed by the reference value.

`)

describe('#example274', () => {
    it(`Input argument is [4, 3, 2, 1] #1`, () => {
        expect(example274([4, 3, 2, 1])).equal(undefined)
    })
    it(`Input arguments are [{ a: 'label' }], 'a' #2`, () => {
        expect(example274([{ a: 'label' }], 'a')).equal(undefined)
    })
    let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
    let managers = [{ manager: 1, employees: [2, 3] }];
    managers.forEach(
        (manager: any) =>
        (manager.employees = manager.employees.map(function (id: any) {
            return this[id];
        }, example274(users, 'id')))
    );
    it(`Input arguments are users, managers #3`, () => {
        expect(managers).deep.equal([ { manager: 1, employees: [ { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' } ] } ])
    })
})
