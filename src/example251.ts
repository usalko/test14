// src/example251.ts

// object associating the properties to the values
// of a given array of valid property identifiers and an array of values.
export function example251(inputKeys: any[], inputValues: any[]): any {
    return inputKeys.slice(0, Math.min(inputKeys.length, inputValues.length)).reduce(
        (result: any, key: any, i: number) => {
            result[key] = inputValues[i]
            return result
        },
        {},
    )
}

