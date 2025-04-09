// src/example270.ts

// get tomorrow's date in a string representation.
export function example270(inputString: string): string {
    return inputString.split(/\w+/).map((x: string) => x.toLocaleLowerCase()).join('_')
}

