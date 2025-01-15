// src/example186.ts


// Invokes each provided function with the arguments it receives and returns the results.
export function example186<T1, T2>(inputFunctions: ((t1: T1) => T2)[], inputArguments: T1[]): T2[] {
    return inputFunctions.map((f, index) => f(inputArguments[index]))
}
