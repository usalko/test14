// src/example214.ts

// Get the first non-null / undefined argument.
export function example214(...args: any[]): any {
    return args.find((x: any) => x)
}
