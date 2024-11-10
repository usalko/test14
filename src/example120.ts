// src/example120.ts


const square = (x: number) => x * x


export function example120(inputCircleCenter: number[], inputRadius: number, testedPoint: number[]): boolean {
    let errors: string[] = new Array()
    if (inputCircleCenter.length !== 2) {
        errors.push('Input circle center should be the point (i.e. array of length 2.')
    }
    if (testedPoint.length !== 2) {
        errors.push('Tested point is not an array of length 2.')
    }
    if (inputRadius < 0) {
        errors.push('Circle radius should be non negative.')
    }
    if (errors.length > 0) {
        throw errors.join('\n')
    }
    return square(inputCircleCenter[0] - testedPoint[0]) + square(inputCircleCenter[1] - testedPoint[1]) <= square(inputRadius)
}