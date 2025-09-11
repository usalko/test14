// src/example380.ts

// returns true if the parent element contains the child element, false otherwise.
export function example380(inputElement1: HTMLElement | undefined | null, inputElement2: any): boolean {
    return inputElement1 !== undefined && inputElement1 !== null && inputElement1.contains(inputElement2)
}

