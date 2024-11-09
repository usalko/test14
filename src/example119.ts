// src/example119.ts


const isMonotonicUp = (inputArray: number[]): boolean => {
    return inputArray.every((x, index) => index == 0 || x >= inputArray[index - 1])
}


export function example119(inputNumber: number): boolean {
    return isMonotonicUp(inputNumber.toString().split('').map((x) => parseInt(x)))
}