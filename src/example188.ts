// src/example188.ts

const compareObjects = (a: any, b: any): number => {
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 > 0)) {
        return 1
    }
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 < 0)) {
        return -1
    }
    return 0
}

// Pad a string on both sides with the specified character.
export function example188(inputArray: object[]): object[] {
    const result = inputArray.sort(compareObjects)
    return result
}
