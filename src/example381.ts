// src/example381.ts

// remove elements from an array until the passed function returns true.
// Returns the remaining elements in the array.
export function example381(inputArray1: any[], inputSaveCriteria: (x: any) => boolean): any[] {
    let result = []
    for (let i = 0; i < inputArray1.length; i++) {
        if (!inputSaveCriteria(inputArray1[i])) {
            result = inputArray1.slice(i+1)
        } else {
            break
        }
    }
    return result
}

