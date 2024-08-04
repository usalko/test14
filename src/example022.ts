// src/example022.ts
export function example022(input: string, position: number): string {
    if (position + 1 > input.length) {
        return input
    }
    return input.slice(0, position) + input.slice(position + 1, input.length - 1)
}