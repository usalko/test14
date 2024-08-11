// src/example029.ts
export function example029(inputNumber1: number, inputNumber2: number, inputNumber3: number, range: [number, number]): boolean {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}`
    }
    return inputNumber1 <= range[1] && inputNumber1 >= range[0] ||
        inputNumber2 <= range[1] && inputNumber2 >= range[0] ||
        inputNumber3 <= range[1] && inputNumber3 >= range[0]
}