// src/example360.ts

// get the native type of a value. 
// Returns the lowercased constructor name of value, 
// "undefined" or "null" if value is undefined or null.
export function example360(inputValue: any): string {
    if (inputValue === undefined) {
        return 'undefined'
    }
    if (inputValue === null) {
        return 'null'
    }
    if (typeof inputValue === 'object') {
        return ('' + inputValue.constructor.name).toLowerCase()
    }
    return typeof inputValue
}

