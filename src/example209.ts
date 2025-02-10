// src/example209.ts

// Invokes fn in a given context.
// Optionally add any additional variables to the arguments beginning.
export function example209(inputFunction: any, context: any, ...args: any[]): any {
    return function() {
        return inputFunction.apply(context, args.concat(...arguments))
    }
}
