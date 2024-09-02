// src/example051.ts


const minutes = (x: number): number => Math.floor(x % 100)

const hours = (x: number): number => Math.floor(x / 100)

export function example051(inputNumber: number): [number, number] {
    return [hours(inputNumber), minutes(inputNumber)]
}