const lastDecimalDigit = (inputNumber: number): string => {
    return inputNumber.toString().slice(-1)
}


// src/example037.ts
export function example037(inputString: string): string {
    return inputString.length > 3 ? 
        inputString.slice(0, 3).toLowerCase() + inputString.slice(3) :
        inputString.toUpperCase()
}