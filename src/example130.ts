// src/example130.ts


export function example130(inputNumber: number): number {
    return inputNumber.toString().split('').map((x) => parseInt(x)).filter((x) => x % 2 === 0).length
}

