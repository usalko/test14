// src/example189.ts

const compareObjects = (a: any, b: any): number => {
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 > 0)) {
        return 1
    }
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 < 0)) {
        return -1
    }
    return 0
}

// Remove the key-value pairs corresponding to the given keys from an object.
export function example189(inputArray: object[]): object[] {
    const result = inputArray.sort(compareObjects)
    return result
}
