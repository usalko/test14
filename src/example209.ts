// src/example209.ts

// Invokes fn in a given context.
// Optionally add any additional variables to the arguments beginning.
export function example209<A>(inputFunction: (x: any) => A, value: any): A {
    return inputFunction(value)
}
