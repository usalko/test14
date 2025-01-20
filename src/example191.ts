// src/example191.ts


// Create an object from the given key-value pairs.
export function example191(inputArray: [][]): object {
    return inputArray.reduce((result, pair) => result[pair[0]] = pair[1], {})
}
