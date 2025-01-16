// src/example187.ts

const compareObjects = (a: any, b: any): number => {
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 > 0)) {
        return 1
    }
    if (Object.keys(a).every((key) => b[key] !== undefined ? b[key] - a[key]: 0 < 0)) {
        return -1
    }
    return 0
}

// Get a sorted array of objects ordered by properties and orders.
// Define a function 'orderBy' that takes three parameters: 'arr' (an array), 'props' (an array of property names), and 'orders' (an optional array of sort orders).
export function example187(inputArray: object[]): object[] {
    const result = inputArray.sort(compareObjects)
    return result
}
