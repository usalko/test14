// src/example021.ts
export function example021(input: string): string {
    if (input.startsWith('Py')) {
        return input
    }
    return 'Py' + input
}