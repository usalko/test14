// src/example400.ts

//TODO: optimization of the calculation

// evaluate the binomial coefficients of two integers n and k

export function example400(inputIntegerN: number, inputIntegerM: number): any {
    return Math.round(factorial(inputIntegerN) / (factorial(inputIntegerM) * factorial(inputIntegerN - inputIntegerM)))
}

function factorial(inputIntegerN: number): number {
    return (inputIntegerN === 0) ? 1 : inputIntegerN * factorial(inputIntegerN - 1)
}

