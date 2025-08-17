// src/example367.ts

// remove elements from an array for which the given function returns false.
export function example367(inputArray: number[], inputFunction: any): number[] {
    return inputArray.filter(inputFunction).reduce((a: number[], v: number) => {
        inputArray.splice(inputArray.indexOf(v), 1)
        return a.concat(v)
    }, [])
}

