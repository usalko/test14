// src/example309.ts

// create a function that invokes fn with partials appended to the arguments it receives.
export function example309(inputFunction: any, ...inputArguments: any[]): any {
    return (...args: any[]) => inputFunction(...args, ...inputArguments)
}
