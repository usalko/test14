// tests/example196.spec.ts
import { expect } from 'chai'
import { example196 } from '../src/example196'

console.log(`Fundamental(ES6)-Part-I
46. Curry a Function


Write a JavaScript program to curry (curries) a function.

According to wiki.haskell.org "Currying is the process of transforming a function that takes multiple arguments into a function
that takes just a single argument and returns another function if any arguments are still needed. f x y = g (x,y), however the
curried form is usually more convenient because it allows partial application.

Note: Use recursion. If the number of provided arguments (args) is sufficient, call the passed function fn. Otherwise, return
a curried function fn that expects the rest of the arguments. If you want to curry a function that accepts a variable number
of arguments (a variadic function, e.g. Math.min()), you can optionally pass the number of arguments to the second parameter arity.

Use recursion.
If the number of provided arguments (args) is sufficient, call the passed function fn.
Otherwise, use Function.prototype.bind() to return a curried function fn that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. Math.min()), you can
optionally pass the number of arguments to the second parameter arity.

`)

describe('#example196', () => {
    it(`Input array is: [true, false, true, false, true, false, true] #1`, () => {
        expect(example196([true, false, true, false, true, false, true], (x: any) => Boolean(x))).deep.equal([[true, true, true, true], [false, false, false]])
    })
})
