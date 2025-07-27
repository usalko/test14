// src/example358.ts

const ONE_MILLION = 1_000_000
// get the number of times a function executed per second.
// HZ is the unit for hertz, the unit of frequency defined as one cycle per second.
export function example358(inputFunction: any, inputArgument: any, inputIterationsAmount: number = 100): number {
    let elapsed = 0
    for (let i = 0; i < inputIterationsAmount; i++) {
        let executionTimer = performance.now()
        inputFunction(inputArgument)
        elapsed += performance.now() - executionTimer
    }
    const executionFrequencyInHz = Math.ceil((elapsed / inputIterationsAmount) * ONE_MILLION)
    console.log(`Execution frequency is ${executionFrequencyInHz} Hz`)
    return executionFrequencyInHz
}
