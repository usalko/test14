// src/example408.ts


// program to find the index of an array item in a for loop
export function example408(arr: any[]): [number, any][] {
    const result: [number, any][] = []
    for (const [index, value] of arr.entries()) {
        result.push([index, value])
    }
    return result
}
