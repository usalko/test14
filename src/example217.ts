// src/example217.ts

// perform left-to-right function composition.
export function example217(...fns: any[]): any {
    return fns.reduce((f1, f2) => (...args: any[]): any => f2(f1(...args)))
}
