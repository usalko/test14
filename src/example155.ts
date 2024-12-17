// src/example155.ts


// Convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
export function example155(inputArrayOfObjects: any[], lineSeparator: string = '\n', fieldSeparator: string = ','): string {
    if (inputArrayOfObjects.length === 0) {
        return ''
    }

    const keys = Object.keys(inputArrayOfObjects[0])
    return keys.join(fieldSeparator) + lineSeparator + inputArrayOfObjects.map((x) => keys.map((y) => x[y]).join(fieldSeparator)).join(lineSeparator)
}

