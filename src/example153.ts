// src/example153.ts


// convert a comma-separated value (CSV) string to a 2D array
export function example153(inputString: string): any[][] {
    const lineSeparator = '\n'
    const fieldSeparator = ','
    const result: any[][] = Array()
    inputString.split(lineSeparator).forEach((line: string) => {
        result.push(line.split(fieldSeparator))
    })
    return result
}

