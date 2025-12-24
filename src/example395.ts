// src/example395.ts

// Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.
export function example395(inputArray: any[], ...inputPredicate: any): boolean {
    return inputArray.some(inputPredicate || Boolean);
}

