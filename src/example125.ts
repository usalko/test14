// src/example125.ts


export function example125(inputArray: string[]): string {
    return inputArray.reduce((prev, curr) => (prev.length >= curr.length)? prev: curr)
}

