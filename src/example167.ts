// src/example167.ts


// Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
export function example167<T>(inputArray: T[], inputPredicate: (x: T) => boolean): [T[], T[]] {
    const result: [T[], T[]] = [[], []]
    return inputArray.reduce((u, x) => {
        if (inputPredicate(x)) {
            u[0].push(x)
        } else {
            u[1].push(x)
        }
        return u
    }, result)
}

