// src/example278.ts

// takes a variadic function and returns a closure
// that accepts an array of arguments to map to the inputs of the function.
export function example278(inputFunction: any, inputArguments: any[] ): any {
    return inputFunction(...inputArguments)
}
