// src/example294.ts

// create an object composed of the properties the given function returns false for.
// The function is invoked with two arguments: (value and key)
export function example294(inputObject: any, inputFilter: any): any {
    return Object.fromEntries(Object.keys(inputObject).filter((x: any) => !inputFilter(inputObject[x])).map((x: any) => [x, inputObject[x]]))
}
