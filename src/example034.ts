const inRange = (inputNumber: number, range: [number, number]) => {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}`
    }
    return inputNumber >= range[0] && inputNumber <= range[1]
}


// src/example034.ts
export function example034(inputNumber1: number, inputNumber2: number, range: [number, number]): number {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}`
    }
    if (inputNumber1 < range[0] || inputNumber1 > range[1]) {
        throw `Invalid user input. First input number ${inputNumber1} not in the range [${range[0]}, ${range[1]}]`
    }
    if (inputNumber2 < range[0] || inputNumber2 > range[1]) {
        throw `Invalid user input. Second input number ${inputNumber2} not in the range [${range[0]}, ${range[1]}]`
    }
    return Math.max(inputNumber1, inputNumber2)
}