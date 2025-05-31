// src/example320.ts

// create an object from the specified object, where all keys are in lowercase.
export function example320(inputObject: any): any {
    return Object.keys(inputObject).reduce((result: any, key: string) => {
        result[key.toLowerCase()] = inputObject[key]
        return result
    }, {})
}
