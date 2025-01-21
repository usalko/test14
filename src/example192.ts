// src/example192.ts


// Returns the first argument that returns true from the provided argument validation function.
export function example192(...args: any[]): any {
    return args.find((value) => value)
}
