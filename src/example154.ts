// src/example154.ts


const toEntries = (keys: string[], values: any[]): Map<string, any> => {
    const result = Array()
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i], values[i]])
    }
    return new Map(result)
}

// convert a comma-separated value (CSV) string to a 2D array
export function example154(inputString: string, lineSeparator: string = '\n', fieldSeparator: string = ','): any[] {
    const keys = inputString.split(lineSeparator, 1)[0].split(fieldSeparator)
    return inputString.split(lineSeparator)
        .filter((line: string, index: number) => index > 0)
        .map((line: string) => Object.fromEntries(toEntries(keys, line.split(fieldSeparator))))
}

