// src/example375.ts

// flatten a given array to the specified depth.
export function example375(inputObject: any, inputTestFunction: (x: any) => boolean): any {
    return Object.keys(inputObject).filter((key: any) => inputTestFunction(inputObject[key])).slice(-1)[0]
}

