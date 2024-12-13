// src/example153.ts


// convert a comma-separated value (CSV) string to a 2D array
export function example153(inputString: string, omitHeader: boolean = false, lineSeparator: string = '\n', fieldSeparator: string = ','): any[][] {
    return inputString.split(lineSeparator)
        .filter((line: string, index: number) => !omitHeader || index > 0)
        .map((line: string) =>
            line.split(fieldSeparator))

}

