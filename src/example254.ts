// src/example254.ts

// test a value, x, against a predicate function. If true, return fn(x). Else, return x.
export function example254(inputValue: any, inputPredicate: (x: any) => boolean, inputFunction: (x: any) => any): any {
    return inputPredicate(inputValue) ? inputFunction(inputValue): inputValue
}


