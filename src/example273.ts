// src/example273.ts

// convert a string to kebab case.
export function example273(inputString: string): string {
    return inputString.split(/_|\s/).flatMap(
        (x: string) => x.split(
            /(?<!(^|\p{Uppercase_Letter}))(?=\p{Uppercase_Letter})|(?<!^)(?=\p{Uppercase_Letter}\p{Lowercase_Letter})/u
        ).filter((x: string) => x).map((x: string) => x.toLocaleLowerCase())
    ).join('-') || ''
}
