// src/example374.ts

// flatten a given array to the specified depth.
export function example374(inputObject: any[], allowedLength: number = -1): any {
    return inputObject.reduce((r: any[], x: any) => {
        if (typeof(x) !== 'object' || x.length === 'undefined' || x.length === allowedLength) {
            return [...r, x]
        }
        return r.concat(example374(x, allowedLength))
    }, [])
}

