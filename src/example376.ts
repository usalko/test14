// src/example376.ts

// get the first key that satisfies the provided testing function. Otherwise return undefined.
export function example376(inputObject: any, inputTestFunction: (x: any) => boolean): any {
    return Object.keys(inputObject).filter((key: any) => inputTestFunction(inputObject[key]))[0]
}

