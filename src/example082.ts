// src/example082.ts

export function example082(inputNumber1: number, inputNumber2: number): number {
    if (inputNumber1 < 0 || inputNumber2 < 0) {
        throw 'Input numbers should be positive'
    }
    const maxStringLength = Math.max(inputNumber1.toString().length, inputNumber2.toString().length)
    const inputNumber1InDecimalRepresentation = inputNumber1.toString().padStart(maxStringLength - inputNumber1.toString().length, '0')
    const inputNumber2InDecimalRepresentation = inputNumber2.toString().padStart(maxStringLength - inputNumber2.toString().length, '0')
    let result = ''
    for (let i = 0; i < maxStringLength; i++) {
        const digit = (new Number(inputNumber1InDecimalRepresentation[i]).valueOf() +
            new Number(inputNumber2InDecimalRepresentation[i]).valueOf()
        ).toString().slice(-1)[0]
        result += digit
    }

    return new Number(result).valueOf()
}