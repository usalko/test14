// src/example220.ts

// count a value in an array
export function example220(inputArray1: any[], inputValue: any): any {
    return inputArray1.reduce((x, y) => y === inputValue ? x + 1: x, 0)
}
