// src/example026.ts
export function example026(input: string): string {
    if (input.length < 3 ) {
        return input
    }
    return input.slice(-3) + input + input.slice(-3)
}