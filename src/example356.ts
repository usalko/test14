// src/example356.ts

// get all val indices in an array. If val never occurs, return [].
export function example356(inputArray: any[], inputMatchedElement: any): any[] {
    return inputArray.reduce((result: any[], x: any, i: number) => x === inputMatchedElement ? [...result, i]: result, [])
}
