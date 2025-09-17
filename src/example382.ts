// src/example382.ts

// remove elements from the end of an array until the passed function returns true.
// Returns the remaining elements of the array.
export function example382(inputArray1: any[], inputSaveCriteria: (x: any) => boolean): any[] {
    let sliceIndex = -1
    for (let i = 0; i < inputArray1.length; i++) {
        if (!inputSaveCriteria(inputArray1[inputArray1.length - i])) {
            sliceIndex = -i
        } else {
            break
        }
    }

    return sliceIndex === -1 ? inputArray1 : inputArray1.slice(sliceIndex)
}

