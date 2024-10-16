// src/example095.ts


// TODO: rewrite using same approach as in (FDS) (@see https://arxiv.org/abs/1606.00484)
export function example095(inputArray: number[], searchNumber: number, numberForReplace: number): number[] {
    return inputArray.map((x) => x === searchNumber ? numberForReplace: x)
}