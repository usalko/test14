// src/example363.ts

// calculate the greatest common divisor between two or more numbers/arrays.
export function example363(inputNumber1: number, inputNumber2: number, ...otherNumbers: number[]): number {
    
    function _gcd(x: number, y: number): number  { return y === 0 ? x : _gcd(y, x % y) }

    let result = _gcd(inputNumber1, inputNumber2)
    if (otherNumbers.length === 0) {
        return result
    }
    return otherNumbers.reduce((x: number, y: number) => {
        const result  = _gcd(inputNumber1, y)
        return result < x? result: x 
    }, result)
}

