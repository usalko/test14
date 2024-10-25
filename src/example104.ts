// src/example104.ts


export function example104(inputArray: number[], inputNumber: number): number[] {
    if (inputArray.length < 2) {
        throw 'Input array should has length more or equal two'
    }
    //TODO: optimize it
    let minimax: number | undefined = undefined
    let pairIndex1 = 0
    let pairIndex2 = 0
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            const absoluteDifference = Math.abs(inputArray[i] - inputArray[j])
            if (absoluteDifference < inputNumber && (
                minimax === undefined ||
                absoluteDifference > minimax
            )) {
                pairIndex1 = i
                pairIndex2 = j
                minimax = absoluteDifference
            }
        }
    }
    return [inputArray[pairIndex1], inputArray[pairIndex2]]
}