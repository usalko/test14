// src/example305.ts

// perform left-to-right function composition
export function example305(...inputFunctions: any[]): any {
    return inputFunctions.reduce((result: any, f: any) => (...args: any[]) => f(result(...args)))
}
