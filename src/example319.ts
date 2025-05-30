// src/example319.ts

// compare two objects to determine if the first contains equivalent property values
// to the second one. This is based on a provided function.
export function example319(inputObject1: any, inputObject2: any, inputComparisonFunction: (x: any, y: any) => boolean): boolean {
    return inputComparisonFunction(inputObject1, inputObject2)
}
