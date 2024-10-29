// src/example108.ts


export function example108(inputVector1: number[], inputVector2: number[]): number {
    if (inputVector1.length !== 3) {
        throw 'Input vector1 is not 3d vector'
    }
    if (inputVector2.length !== 3) {
        throw 'Input vector2 is not 3d vector'
    }
    let result: number = 0
    for (let i = 0; i < 3; i++) {
        result += inputVector1[i] * inputVector2[i]
    }
    return result
}