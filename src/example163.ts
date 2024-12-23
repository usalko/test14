// src/example163.ts


// Convert a given string's length to bytes.
export function example163(inputString: string): number {
    return new Blob([inputString], {type: 'text/plain'}).size
}

