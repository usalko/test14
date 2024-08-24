// src/example042.ts

export enum SequenceMode {
    Strict,
    Soft,
    Decrease,
}

export function example042(inputNumber1: number, inputNumber2: number, inputNumber3: number): SequenceMode {
    if (inputNumber1 <= inputNumber2 && inputNumber2 <= inputNumber3) {
        return SequenceMode.Strict
    }
    if (inputNumber1 <= inputNumber3) {
        return SequenceMode.Soft
    }
    return SequenceMode.Decrease
}