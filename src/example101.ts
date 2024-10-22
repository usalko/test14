// src/example101.ts


const isLatinOnly = (inputString: string): boolean => {
    return inputString.match(/[\[a-zA-Z]+/gu)?.length !== 0
}


enum Case {
    Upper,
    Lower,
} 


const hasAtLeastTwoSameCaseInAdjacentPositions = (inputString: string): boolean => {
    let prevLetterCase: Case | undefined = undefined
    for (let i = 0; i < inputString.length; i++) {
        const currentLetterCase = inputString[i].toUpperCase() === inputString[i] ? Case.Upper: Case.Lower
        if (prevLetterCase !== undefined && prevLetterCase === currentLetterCase) {
            return true
        }
        prevLetterCase = currentLetterCase
    }
    return false
}

export function example101(inputString: string): boolean {
    return inputString.length >= 2 && isLatinOnly(inputString) && !hasAtLeastTwoSameCaseInAdjacentPositions(inputString)
}