// src/example312.ts

// create a function that invokes the provided function with its arguments transformed.
export function example312(inputFunction: any, inputTransformers: any[]): any {
    return (...args: any[]) => inputFunction(...inputTransformers.map((t: any, i: number) => t(args[i])))
}
