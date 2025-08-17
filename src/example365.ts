// src/example365.ts

// get the standard deviation of an array of numbers.
export function example365(inputArray: number[], usePopulation: boolean = false): number {
    if (inputArray.length < 2) {
        return 0.
    }
    const sampleMean = inputArray.reduce((x: number, y: number) => x + y, 0) / inputArray.length
    if (usePopulation) {
        const mean = sampleMean
        return Math.sqrt(inputArray.reduce((x: number, y: number) => x+ Math.pow(y - mean, 2), 0)/inputArray.length)
    }
    return Math.sqrt(inputArray.reduce((x: number, y: number) => x+ Math.pow(y - sampleMean, 2), 0)/(inputArray.length - 1))
}

