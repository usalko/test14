// src/example385.ts

// invokes the provided function after a few milliseconds
export function example385(timeout: number, fn: any): any {
    return setTimeout(fn, timeout)
}

