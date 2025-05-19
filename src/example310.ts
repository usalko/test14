// src/example310.ts

// create a function that invokes fn with partials prepended to the arguments it receives.
export function example310(inputFunction: any, ...inputArguments: any[]): any {
    return (...args: any[]) => inputFunction(...inputArguments, ...args)
}
