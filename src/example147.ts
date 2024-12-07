// src/example147.ts


const isDigit = (x: string): boolean => {
    return x >= '0' && x <= '9' // Unicode encoding
}

// Compute the sum of all the digits that occur in a given string
export function example147(inputNumber: string): number {
    return inputNumber.split('').filter((x) => isDigit(x)).map((x) => parseInt(x)).reduce((x, y) => x + y)
}

