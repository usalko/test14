// src/example193.ts


// Change a function that accepts an array into a variadic function.
export function example193(inputFunction: (x: any[]) => boolean): (...args: any[]) => boolean {
    return (...args) => inputFunction(args)
}
