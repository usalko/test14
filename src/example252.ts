// src/example252.ts

// create an array of elements, grouped based on the position in the original array.
export function example252(inputArray1: any[], inputArray2: any[], inputArray3: any[]): any[] {
    return [...Array(Math.max(inputArray1.length, inputArray2.length, inputArray3.length))].map((item: any, i: number) => {
            return [
            i < inputArray1.length? inputArray1[i]: null,
            i < inputArray2.length? inputArray2[i]: null,
            i < inputArray3.length? inputArray3[i]: null,
        ]
    })
}


