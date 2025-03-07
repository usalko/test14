// src/example236.ts

// Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.
export function example236(inputArray: any[], inputFunctionOrKey: (x: any) => any | string): any {
    if (typeof(inputFunctionOrKey) == 'string') {
        return inputArray.map((x: any) => x[inputFunctionOrKey]).reduce((max: any, x: any) => max < x ? x : max)
    }
    return inputArray.map((x: any) => inputFunctionOrKey(x)).reduce((max: any, x: any) => max < x ? x : max)
    return 8
}

