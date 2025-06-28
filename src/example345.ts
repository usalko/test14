// src/example345.ts

// check if the provided argument is an array (i.e. iterable).
export function example345(inputArgument: any): boolean {
    return inputArgument !== null && typeof inputArgument.iterator === 'function'
}
