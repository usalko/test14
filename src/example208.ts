// src/example208.ts

// There is split values into two groups according to a predicate function.
// This specifies which group an element in the input collection belongs to.
export function example208(inputArray: any[], inputFunction: (x: any) => boolean): [any[], any[]] {
    if (inputArray.length === 0) {
        return [[], []]
    }
    return inputArray.reduce((result, x) => {
        if (inputFunction(x)) {
            result[0].push(x)
        } else {
            result[1].push(x)
        }
        return result
    }, [[], []])
}
