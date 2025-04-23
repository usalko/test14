// src/example284.ts

// get an array of elements that appear in both arrays.
export function example284(inputArrayFirst: any[], inputArraySecond: any[]): any[] {
    return inputArrayFirst.filter((x: any) => inputArraySecond.includes(x))
}
