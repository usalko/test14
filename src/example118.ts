// src/example118.ts



export function example118(inputNumber: number, inputRange: number[]): boolean {
    if (inputRange[0] > inputRange[1]) {
        throw `Invalid input range ${inputRange}, valid input range should be satisfy with condition inputRange[0] <= inputRange[1].`
    }
    return inputNumber >= inputRange[0] && inputNumber <= inputRange[1]
}