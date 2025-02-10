// src/example211.ts

// Cast the provided value as an array if it's not one.
export function example211(inputValue: any): any[] {
    if (Array.isArray(inputValue)) {
        return inputValue
    }
    return [inputValue]
}
