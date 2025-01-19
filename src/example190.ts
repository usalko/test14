// src/example190.ts

const compareObjects = (a: any, b: any): number => {
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 > 0)) {
        return 1
    }
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 < 0)) {
        return -1
    }
    return 0
}

// Create an array of key-value pair arrays from a given object.
export function example190(inputArray: object[]): object[] {
    const result = inputArray.sort(compareObjects)
    return result
}
