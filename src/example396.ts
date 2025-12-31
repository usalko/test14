// src/example396.ts

// check if two given numbers are approximately equal to each other. 
export function example396(inputNumber1: number, inputNumber2: number, epsilon: number = 0.001): boolean {
    return Math.abs(inputNumber1 - inputNumber2) < epsilon
}

