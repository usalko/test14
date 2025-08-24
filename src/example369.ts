// src/example369.ts

import { debug } from "console";

// convert a string from camelcase.
export function example369(inputString: string, delimiterString: string = '_'): string {
    const a = inputString.replace(/(\p{Ll})(\p{Lu})/ug, '$1' + delimiterString + '$2').toLowerCase()
    return a
}

