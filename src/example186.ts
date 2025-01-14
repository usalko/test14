// src/example186.ts


// Invokes each provided function with the arguments it receives and returns the results.
export function example186(inputFunction1: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return inputFunction1(args)
}
