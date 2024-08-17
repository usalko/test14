const inRange = (inputNumber: number, range: [number, number]) => {
    if (range[0] > range[1]) {
        throw `Invalid range ${range}`
    }
    return inputNumber >= range[0] && inputNumber <= range[1]
}


// src/example035.ts
export function example035(inputCharacter: string, inputString: string): boolean {
    if (inputCharacter.length === 0 || inputCharacter.length > 1) {
        throw `Invalid character ${inputCharacter}. A character should be single char string`
    }
    const inputCharacterPosition = inputString.indexOf(inputCharacter)
    return inputCharacterPosition >= 1 && inputCharacterPosition <= 3
}