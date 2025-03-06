// src/example235.ts

// replace all but the last number of characters with the specified mask character.
export function example235(inputString: string, inputPosition: number = 4, inputMark: string = '*'): string {
    return inputString.slice(0, -inputPosition).split('').map((x: string) => inputMark).join('') + inputString.slice(-inputPosition)
}

