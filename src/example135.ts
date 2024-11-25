// src/example135.ts


export function example135(inputString: string): string {
    let uniqueLetters = new Set<string>()
    let nonUniqueLetters = new Set<string>()
    for (let i = 0; i < inputString.length; i++) {
        if (nonUniqueLetters.has(inputString[i])) {
            continue
        }
        if (uniqueLetters.has(inputString[i])) {
            uniqueLetters.delete(inputString[i])
            nonUniqueLetters.add(inputString[i])
            continue
        }
        uniqueLetters.add(inputString[i])
    }
    return inputString.split('').filter((x) => uniqueLetters.has(x)).join('')
}

