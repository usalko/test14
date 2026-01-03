// src/example397.ts

// convert a 2D array to a comma-separated value (CSV) string. 
export function example397(inputArray: any[], inputSeparator: string = ','): string {
    return inputArray
        .map(row => row.map((item: any) => `"${item}"`).join(inputSeparator))
        .join('\n');
}

