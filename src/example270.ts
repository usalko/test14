// src/example270.ts

// get tomorrow's date in a string representation.
export function example270(inputString: string): string {
    return inputString.split(/-|\s/).flatMap(
        (x: string) => x.split(
            /(?<!(^|\p{Uppercase_Letter}))(?=\p{Uppercase_Letter})|(?<!^)(?=\p{Uppercase_Letter}\p{Lowercase_Letter})/u
        ).filter((x: string) => x).map((x: string) => x.toLocaleLowerCase())
    ).join('_') || ''
}

