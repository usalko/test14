// src/example151.ts


// compare two objects to determine if the first contains equivalent property values to the second one
export function example151(inputObject1: object, inputObject2: object): boolean {
    return Object.entries(inputObject1).every((keyValue) => (inputObject2 as any)[keyValue[0]] === keyValue[1])
}

