// src/example277.ts

// generate all permutations of a string (contains duplicates).
export function example277(inputArray: any[], inputCompareFunction: (x: any, y: any) => number ): any[] {
    const intermediateResult = inputArray.map((x: any, i: number) => [x, i])
    intermediateResult.sort((x: any, y: any) => {
        const cmp = inputCompareFunction(x[0], y[0])
        if (cmp == 0) {
            return x[1] - y[1]
        }
        return cmp
    })
    return intermediateResult.map((x: any) => x[0])
}
