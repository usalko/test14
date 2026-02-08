// src/example402.ts


// Encode String to Base-64
export function example402(input: string): string {
    return Buffer.from(input, 'binary').toString('base64')
}
