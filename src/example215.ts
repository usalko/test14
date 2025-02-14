// src/example215.ts

// add special characters to text
// to print in color on the console (combined with console.log())
export function example215(color: string, text: string): string {
    if (color === "black" ) {
        return "\x1b[30m" + text
    }
    if (color === "red" ) {
        return "\x1b[31m" + text
    }
    if (color === "green" ) {
        return "\x1b[32m" + text
    }
    if (color === "yellow" ) {
        return "\x1b[33m" + text
    }
    if (color === "blue" ) {
        return "\x1b[34m" + text
    }
    if (color === "magenta" ) {
        return "\x1b[35m" + text
    }
    if (color === "cyan" ) {
        return "\x1b[36m" + text
    }
    if (color === "white" ) {
        return "\x1b[37m" + text
    }
    return text
}
