// src/example216.ts

// perform right-to-left function composition.
export function example216(...fns: any[]): any {
    return fns.reverse().reduce((f1, f2) => (...args: any[]): any => f2(f1(...args)))
}
