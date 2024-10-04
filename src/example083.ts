// src/example083.ts

export function example083(inputStringsArray: string[]): string {
    if (inputStringsArray.length == 0) {
        return ''
    }
    let positionOfMaxStringLength = 0;
    let maxStringLength = 0
    for (let i = 0; i < inputStringsArray.length; i++) {
        if (inputStringsArray[i].length > maxStringLength) {
            maxStringLength = inputStringsArray[i].length
            positionOfMaxStringLength = i
        }
    }
    return inputStringsArray[positionOfMaxStringLength]
}