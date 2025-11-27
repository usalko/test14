// src/example387.ts

// Degrees to Radians
export function example387(...input: any[]): any {
    return input.reverse().reduce((acc, obj) => Object.assign({}, acc, obj), {})
}

