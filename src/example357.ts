// src/example357.ts

// check if the given number falls within the given range.
export function example357(inputNumber: number, inputRangeStart: number, inputRangeEnd: number | undefined = undefined): boolean {
    return inputRangeEnd !== undefined ? inputNumber >= inputRangeStart && inputNumber <= inputRangeEnd: inputNumber >= inputRangeStart
}
