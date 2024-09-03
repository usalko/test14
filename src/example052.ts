// src/example052.ts


const minutes = (x: number): number => Math.floor(x % 100)

const hours = (x: number): number => Math.floor(x / 100)

export function example052(inputString: string): string {
    let text = []
    for(let i = 0; i < inputString.length; i++) {
        text.push(inputString[i])
    }
    return text.sort().join('')
}