// src/example350.ts

// get a list of elements in both arrays, after applying the provided function to each array element of both.
export function example350(inputArray1: any[], inputArray2: any[], inputMapper: any): any[] {
    return inputArray1.filter((x: any) => inputArray2.findIndex((y: any) => inputMapper(x) === inputMapper(y)) > -1)
}
