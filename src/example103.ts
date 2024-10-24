// src/example103.ts


const version1 = (inputArray: number[]): number => {
    let result = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[result] > inputArray[i]) {
            result = i
        }
    }
    return result
}


const version2 = (inputArray: number[]): number => {
    return inputArray.reduce((minimalValueIndex, currentValue, currentIndex) => currentValue < minimalValueIndex ? currentIndex: minimalValueIndex, 0)
}


const version3 = (inputArray: number[]): number => {
    return inputArray.indexOf(Math.min(...inputArray))
}


export function example103(inputNumber: number): number {
    if (inputNumber < 0) {
        throw 'Input number should be positive'
    }
    if (inputNumber < 10) {
        throw 'Input number should be greater or equal 10'
    }
    const numberAsArrayOfDigits = inputNumber.toString().split('').map((x) => parseInt(x))
    numberAsArrayOfDigits.splice(version1(numberAsArrayOfDigits), 1)
    return parseInt(numberAsArrayOfDigits.join(''))
}