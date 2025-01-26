// src/example196.ts


// Curry (curries) a function.
export function example196(inputArray: any[], filter: (x: any) => boolean): [any[], any[]] {
    return [[], []] // inputArray.filter((x) => x, inputArray)
}
