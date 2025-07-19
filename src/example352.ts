// src/example352.ts

// create a n-dimensional array with a given value.
export function example352(inputElement1: any, ...inputDimensionSize: number[]): any {
    return inputDimensionSize.length === 0 ?
        inputElement1 :
        new Array(inputDimensionSize[0]).fill(example352(inputElement1, ...inputDimensionSize.slice(1)))
}

// create a n-dimensional array with a given value.
export function example352_2(inputElement1: any, ...inputDimensionSize: number[]): any {
    return inputDimensionSize.length === 0 ?
        inputElement1 :
        Array.from({length: inputDimensionSize[0]}).map(() => example352_2(inputElement1, ...inputDimensionSize.slice(1)))
}
