// src/example123.ts


const isDigitalsPermutation = (arrayElement: number, digitals: Set<number>): boolean => {
    const numberAsDigitalSequence = arrayElement.toString().split('').map((x) => parseInt(x))
    const numberDigitals: Set<number> = new Set()
    return numberAsDigitalSequence.every((n) => {
        // Check if digital is unique
        if (numberDigitals.has(n)) {
            return false
        }
        numberDigitals.add(n)
        // Check if digital is prohibit
        return digitals.has(n)
    })
} 

export function example123(inputArray: number[], inputNumber: number): boolean {
    if (inputArray.length < 1) {
        return false
    }
    if (inputNumber < 1 || inputNumber > 9) {
        throw `An input number should be lay between 1 and 9 (inclusive). But input number is ${inputNumber}`
    }
    const digitals: number[] = []
    for (let i = 1; i <= inputNumber; i++) {
        digitals.push(i)
    }
    return inputArray.every((n) => isDigitalsPermutation(n, new Set(digitals)))
}

