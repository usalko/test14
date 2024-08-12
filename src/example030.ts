// src/example030.ts
export function example030(input: string): string {
    const i = input.indexOf('Script')
    if (i === 4) {
        return input.slice(0, 4) + input.slice(4 + 6)
    }
    return input
}