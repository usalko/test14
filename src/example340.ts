// src/example340.ts

// returns true if a value is an empty object, collection, map or set.
// It has no enumerable properties or is of any type not considered a collection.
export function example340(inputArgument: any): boolean {
    return inputArgument === null || 
    ('size' in inputArgument && inputArgument.size > 0) ||
    ('length' in inputArgument && inputArgument.length > 0)
}
