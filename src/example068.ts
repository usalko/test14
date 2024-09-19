// src/example068.ts

export function example068(inputString: string, inputNumber: number): string {
    if (inputString.length < inputNumber) {
        throw `The string length must be larger than or equal to ${inputNumber}`
    }
    return inputString.slice(0, inputNumber) + inputString.slice(-inputNumber)
}