// src/example055.ts

export function example055(inputString: string, checkingCountEqualityCharacters: string[]): boolean {
    let statistics: {[key: string]: number} = Object.fromEntries(checkingCountEqualityCharacters.map((x) => [x, 0]))
    for (let i = 0; i < inputString.length; i++) {
        const checkingCountEqualityCharactersIndex = checkingCountEqualityCharacters.indexOf(inputString[i])
        if (checkingCountEqualityCharactersIndex >= 0) {
            statistics[checkingCountEqualityCharacters[checkingCountEqualityCharactersIndex]]++
        }
    }
    const balancedCount = statistics[checkingCountEqualityCharacters[0]]
    return balancedCount > 0 && Object.values(statistics).every((x) => x === balancedCount)
}