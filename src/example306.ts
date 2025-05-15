// src/example306.ts

// perform left-to-right function composition for asynchronous functions.
export async function example306(...inputFunctions: any[]): Promise<any> {
    return inputFunctions.reduce((result: any, f: any) => (...args: any[]) => f(result(...args)))
}
