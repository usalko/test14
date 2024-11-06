// src/example116.ts


export function example116(inputString: string, hashChar: string, divider: number): string[] {
    const result: string[] = []
    for(let i = 0; i < inputString.length; i++) {
        if (inputString[i] === hashChar) {
            for (let j = 0; j < 10; j++) {
                const testedNumber = parseInt(inputString.slice(0, i) + j + inputString.slice(i+1))
                if (testedNumber % divider === 0) {
                    result.push(testedNumber.toString())
                }
            }
            break
        }
    }
    return result
}