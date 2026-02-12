// src/example403.ts


// JavaScript program to capitalize the first letter of a string
export function example403([first, ...last]: string[], normalize: boolean): string {
    return first.toUpperCase() + (normalize? last.join('').toLocaleLowerCase(): last.join(''))
}
