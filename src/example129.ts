// src/example129.ts


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


export function example129(inputNumber: number): number {
    if (isPrime(Math.abs(inputNumber))) {
        return inputNumber
    }
    for (let i = inputNumber + 1; i < Number.MAX_SAFE_INTEGER; i += 1) {
        if (inputNumber > 0) {
            if (isPrime(i)) {
            return i
        }
        } else if (isPrime(-i)){
            return i
        }
    }
    throw 'Sorry, out of calculations limits'
}

