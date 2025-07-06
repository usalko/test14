// src/example347.ts

// true if the given string is an absolute URL, false otherwise.
export function example347(inputArgument: string): boolean {
    return /^([a-z]|[A-Z])[a-z0-9A-Z+.-]*:/.test(inputArgument)
}
