// src/example126.ts


export function example126(inputArray: number[]): number {
    const firstEvenIndex = inputArray.findIndex((n) => n % 2 === 0)
    if (firstEvenIndex < 0) {
        throw `No even numbers in input array ${inputArray}`
    }
    return inputArray.slice(firstEvenIndex).reduce((prev, curr) => (prev < curr && curr % 2 === 0)? curr: prev)
}

