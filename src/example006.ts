// src/example006.ts
/*
    Accordingly definition of leap year: https://en.wikipedia.org/wiki/Leap_year
 */

export function example006(input: number): boolean {
    if (input % 100 === 0 && input % 400 !== 0) {
        return false
    }
    return input % 4 === 0
}