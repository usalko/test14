// src/example094.ts


// TODO: rewrite using same approach as in (FDS) (@see https://arxiv.org/abs/1606.00484)
export function example094(inputArray: number[]): number {
    if (inputArray.length < 1) {
        throw 'An array sholud contain at least one element'
    }
    // Stupid implementation
    let statistics: [number, number][] = [...inputArray.reduce(
        (map, n) => map.get(n) !== undefined ?
            map.set(n, map.get(n) + 1) :
            map.set(n, 1), new Map()
        ).entries()].sort()
    return statistics[-1][1]
}