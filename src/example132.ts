// src/example132.ts


const isPrime = (n: number): boolean => {
    if (n < 0) {
        return false
    }
    if (n === 1 || n == 2 || n == 3) {
        return true
    }
    if ((n & 1) === 0) {
        return false
    }
    if ((n + 1) % 6 === 0 && (n - 1) % 6 === 0) {
        return false
    }
    const factor = Math.sqrt(n) + 1
    for (let i = 3; i < factor; i += 2) {
        if ((n % i) === 0) {
            return false
        }
    }
    return true
} 


export function example132(inputNumber: number): number[] {
    const result: number[] = Array()
    const maxFactor = inputNumber / 2
    for (let i = 2; i <= maxFactor; i++) {
        if (inputNumber % i === 0 && isPrime(i)) {
            result.push(i)
        }
    }
    if (isPrime(inputNumber)) {
        result.push(inputNumber)
    }
    return result.reverse()
}

