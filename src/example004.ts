// src/example004.ts

/*
    The formula of triangle square.
    Heron's formula (@see wiki https://en.wikipedia.org/wiki/Area_of_a_triangle)
    semi-perimeter: s = (a + b + c) / 2
    area is: ta = sqrt(s * (s - a) * (s - b) * (s - c)

*/
export function example004(aSide: number, bSide: number, cSide: number): number {
    const s = (aSide + bSide + cSide) / 2
    return Math.sqrt(s * (s - aSide) * (s - bSide) * (s - cSide))
}