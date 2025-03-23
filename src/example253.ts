// src/example253.ts

// convert a given string into an array of words.
export function example253(inputString: string): string[] {
    return inputString.split(/[^\w]+/).filter((x: string) => x != '')
}


