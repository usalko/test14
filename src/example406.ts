// src/example406.ts


// clamp a number within the inclusive range specified by the given boundary values a and b
export function example406(num: number, a: number, b: number): number {
    return Math.max(a, Math.min(num, b))
}
