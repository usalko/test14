// src/example149.ts


// Change the capitalization of all letters in a given string
export function example149(inputString: string): string {
    return inputString.split('').map((x) => x.toLowerCase() === x ? x.toUpperCase(): x.toLowerCase()).join('')
}

