// src/example377.ts

// generate an array containing the Fibonacci sequence, up to the nth term.
export function example377(inputNumber: number): number[] {
    return Array.from({length: inputNumber}).reduce((result: number[], _: any, i: number) => result.concat(i > 1 ? result[i - 2] + result[i - 1]: i), [])
}

