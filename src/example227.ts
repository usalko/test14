// src/example227.ts

// iterate over all the properties of an object, running a callback for each one
export function example227(inputObject1: any, inputFunction: (value: any) => any): any[] {
    return Object.keys(inputObject1).map((key: any) => inputObject1[key])
}

