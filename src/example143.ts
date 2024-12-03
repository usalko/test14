// src/example143.ts

// Get function to map array onto interval [0..array.length - 1]
// Input function is q(e1, e2) where e1 and e2 are element of array
export function example143(inputArray: string[]): string[] {
    // In our case inout function is: (a, b) => a.length - b.length
    // I.e. q(e1, e2) = l(e1) - l(e2)
    // We define a new function i(e) which map input array into [0..array.length - 1] and
    // q(e1, e2) = P(i(e1), i(e2)) where P is polynomial function
    return inputArray.sort()
}

