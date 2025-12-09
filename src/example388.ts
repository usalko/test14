// src/example388.ts

// Deep Flatten Array
export function example388(...input: any[]): any[] {
    return input.reverse().reduce((acc, obj) => Object.assign({}, acc, obj), {})
}

