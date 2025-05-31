// src/example321.ts

// get the last element from an given array.
export function example321(inputArray: any): any {
    if (!inputArray.length || inputArray.length == 0) {
        return undefined
    }
    return inputArray[inputArray.length - 1]
}

// get the last element from an given array.
export function example321v2(inputArray: any): any {
    if (!inputArray.length || inputArray.length == 0) {
        return undefined
    }
    return inputArray.slice(-1)[0]
}
