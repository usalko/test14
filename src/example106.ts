// src/example106.ts


export function example106(inputNumber: number, divider: number): number {
    let result = inputNumber
    while (result % divider === 0 && divider > 1) {
        result = result / divider
    }
    return result
}