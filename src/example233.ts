// src/example233.ts

// create an updated string with the results of calling a provided function on every character in the called string
export function example233(inputString: string, inputFunction: any): string {
    return inputString.split('').map((x: string) => inputFunction(x)).join('')
}

