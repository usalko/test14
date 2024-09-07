// src/example056.ts

export function example056(inputNumber1: number, inputNumber2: number): string {
    return ((inputNumber1 / inputNumber2) + '').replace('\.', ',')
}