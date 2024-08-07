// src/example025.ts
export function example025(input: number, dividers: Array<number>): boolean {
    return dividers.some((e) => Math.floor(input/e) == input/e)
}