const inRange = (inputNumber: number, range: [number, number]) => {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}`
    }
    return inputNumber >= range[0] && inputNumber <= range[1]
}


// src/example033.ts
export function example033(inputNumber1: number, inputNumber2: number, range1: [number, number], range2: [number, number]): boolean {
    if (range1[0] > range1[1]) {
        throw `Invalid range ${range1}`
    }
    if (range2[0] > range2[1]) {
        throw `Invalid range ${range2}`
    }
    return (inRange(inputNumber1, range1) || inRange(inputNumber2, range2)) &&
        (inRange(inputNumber2, range1) || inRange(inputNumber2, range2))
}