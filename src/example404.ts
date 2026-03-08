// src/example404.ts

import { join } from "path"


// JavaScript program to capitalize the first letter of a string
export function example404(inputString: string): string {
    return inputString.split(/\s+/).map(([first, ...last]: string) => first.toUpperCase() + last.join('')).join(' ')
}
