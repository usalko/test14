// src/example185.ts


// Invokes each provided function with the arguments it receives and returns the results.
export function example185(inputFunction1: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return inputFunction1(args)
}
