// src/example135.ts


export function example135v1(inputString: string): string {
    let result = ''
    for (let i = 0; i < inputString.length; i++) {
        if (inputString.indexOf(inputString[i]) !== inputString.lastIndexOf(inputString[i])) {
            continue
        }
        result += inputString[i]
    }
    return result
}

export function example135v2(inputString: string): string {
    const inputStringAsArray = inputString.split('')
    const result = []
    for (let i = 0; i < inputString.length; i++) {
        if (inputStringAsArray.indexOf(inputString[i]) !== inputStringAsArray.lastIndexOf(inputString[i])) {
            continue
        }
        result.push(inputString[i])
    }
    return result.join('')
}

export function example135v3(inputString: string): string {
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

