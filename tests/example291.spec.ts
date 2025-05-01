// tests/example291.spec.ts
import { expect } from 'chai'
import { example291 } from '../src/example291'

console.log(`Fundamental(ES6)-Part-I
151. Run Function in Web Worker

Write a JavaScript program to run a function in a separate thread using a Web Worker. 
This allows long running functions to not block the UI.

Note: Create a new Worker using a Blob object URL, the contents of which should be the stringified version of the supplied function. Immediately post the return value of calling the function back. Return a promise, listening for onmessage and onerror events and resolving the data posted back from the worker, or throwing an error.

 - Since the function is running in a different context, closures are not supported. The function supplied to 'runAsync' gets stringified, so everything becomes literal. All variables and functions must be defined inside.

 - Create a new Worker() using a Blob object URL, the contents of which should be the stringified version of the supplied function.
 - Immediately post the return value of calling the function back.
 - Return a new Promise(), listening for onmessage and onerror events and resolving the data posted back from the worker, or throwing an error.

`)

describe('#example291', () => {
    it(`Input arguments are (x: number) => {
            let result = x
            for(let i = 0; i < 1000; i++) {
                for (let j = 0; j < 1000; j++) {
                    result ++
                }
            }
            return result
        }, 0  #1`, () => {
        expect(example291((x: number) => {
            let result = x
            for(let i = 0; i < 1000; i++) {
                for (let j = 0; j < 1000; j++) {
                    result ++
                }
            }
            return result
        }, 0)).equal(999999)
    })
})
