// src/example229.ts

// take any number of iterable objects or objects with a length property and return the longest one
export function example229(...args: any[]): any {
    if (args.length === 0) {
        return undefined
    }
    return args.reduce((result: any, x: any) => (Object.getOwnPropertyDescriptor(x, 'length') ? x.length: 1) > (Object.getOwnPropertyDescriptor(result, 'length') ? result.length: 1) ? x: result)
}

