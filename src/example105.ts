// src/example105.ts


const convolution = (inputArray: number[]): number => {
    let result = 0
    while(inputArray.length > 1) {
        inputArray = inputArray.reduce((sum, currentValue) => sum+currentValue).toString().split('').map((x) => parseInt(x))
        result++
    }
    return result
}

export function example105(inputNumber: number): number {
    const inputNumberAsArrayOfDigits = inputNumber.toString().split('').map((x) => parseInt(x))

    return convolution(inputNumberAsArrayOfDigits)
}