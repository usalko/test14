// src/example372.ts

// iterate over all the properties of an object in reverse, running a callback for each one
export function example372(inputFunction: any): any {
    return (...inputArguments: any[]) => inputFunction(...[...inputArguments.splice(0, 1), inputArguments[0]])
}

