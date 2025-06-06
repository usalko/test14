// src/example322.ts

// join all elements of an array into a string and return this string.
// Use a separator and an end separator.
export function example322(inputArray: any[], inputArg2: string = ',', inputArg3:  string = '&'): string {
    if (!inputArray.length || inputArray.length == 0) {
        return ""
    }
    return inputArray[inputArray.length - 1]
}

