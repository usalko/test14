// src/example212.ts

// Chain asynchronous functions.
export function example212(...inputFuncs: any[]): any {
    let counter = 0

    const next = (x: any) => inputFuncs[counter++](next)

    return next
}
