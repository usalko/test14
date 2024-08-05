// src/example023.ts
export function example023(input: string): string {
    return input.slice(-1) + input.slice(1, -1) + input.slice(0, 1)
}