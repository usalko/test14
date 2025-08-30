// src/example373.ts

// flatten an object with the paths for keys.
export function example373(inputObject: any, prefix: string = '', result: any = {}): any {
    return Object.keys(inputObject).reduce((x: any, key: string) => {
        const flattenedKey = prefix ? prefix + '.' + key: key
        if (typeof(inputObject[key]) === 'object' && inputObject[key] !== null) {
            Object.assign(x, example373(inputObject[key], flattenedKey), result)
        } else {
            x[flattenedKey] = inputObject[key]
        }
        return result
    }, result)
}

