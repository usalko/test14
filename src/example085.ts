// src/example085.ts

export function example085(inputArray: number[]): number[] {
    const result = new Array<number>(2).fill(0)
    const firstPartsArray = new Array<number>(Math.ceil(inputArray.length / 2)).fill(0)
    const secondPartsArray = new Array<number>(Math.ceil(inputArray.length / 2)).fill(0)
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 === 0) {
            firstPartsArray[Math.floor(i / 2)] = inputArray[i]
        } else {
            secondPartsArray[Math.floor(i / 2)] = inputArray[i]
        }

    }
    return [
        firstPartsArray.length > 0 ? firstPartsArray.reduce((prev, current) => prev + current) : 0,
        secondPartsArray.length > 0 ? secondPartsArray.reduce((prev, current) => prev + current) : 0]
}