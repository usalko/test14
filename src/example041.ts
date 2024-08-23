// src/example041.ts
export function example041(inputNumber1: number, inputNumber2: number, inputNumber3: number): number {
    if (inputNumber1 == inputNumber2 && inputNumber2 == inputNumber3) {
        return 30
    }
    if (inputNumber1 == inputNumber2
        || inputNumber2 == inputNumber3
        || inputNumber1 == inputNumber3
    ) {
        return 40
    }
    return 20
}