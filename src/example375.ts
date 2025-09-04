// src/example375.ts

// get the last key that satisfies the provided testing function, otherwise undefined is returned.
export function example375(inputObject: any, inputTestFunction: (x: any) => boolean): any {
    return Object.keys(inputObject).filter((key: any) => inputTestFunction(inputObject[key])).slice(-1)[0]
}

