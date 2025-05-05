// src/example296.ts

// Write a JavaScript program to apply a function against an accumulator and
// each element in the array (from left to right),
// returning an array of successively reduced values.
export function example296(inputArray: any[], inputFunction: any, inputInitialValue: any): any[] {
    return inputArray.reduce((x: any[], y: any) => [...x, inputFunction(x[x.length - 1], y)], [inputInitialValue])
}
