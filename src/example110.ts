// src/example110.ts


export function example110(inputSequence: number[], inputNumber: number): number[] {
    return inputSequence.filter((x) => x !== inputNumber && x % 2 === 0)
}