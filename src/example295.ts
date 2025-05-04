// src/example295.ts

// takes a predicate and an array, like Array.filter(),
// but only keeps x if pred(x) returns false.
export function example295(inputPredicate: any, inputArray: any[]): any[] {
    return inputArray.filter((x: any) => !inputPredicate(x))
}
