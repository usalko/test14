// src/example348.ts

// check if the provided value is of the specified type.
export function example348(inputType: any, inputValue: any): boolean {
    if (inputValue === null) {
        return false
    }
    return inputValue.constructor === inputType
}
