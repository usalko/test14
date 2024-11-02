// src/example112.ts


export function example112(inputNumber: number): number {
    let result = 0
    for (let i = 1; i <= inputNumber; i++) {
        if ( i % 5 === 0) {
            result++
        }
    }
    return result
}