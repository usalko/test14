// src/example317.ts

// get the minimum value of an array,
// after mapping each element to a value using the provided function.
export function example317(inputArray: any[], inputAccessor: any): number {
    return Math.min(...inputArray.map<number>((x: any) => typeof(inputAccessor) == 'string' ? x[inputAccessor]: inputAccessor(x)))
}
