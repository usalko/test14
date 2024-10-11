// src/example089.ts

export function example089(expression: string): string {
    // parse expression (input string)
    const regexp = /\s*(\d+)\s*\$\s*(\d+)\s*=\s*(\d+)\s*/g
    const matches = [...expression.matchAll(regexp)]

    if (matches.length === 1 && matches[0].length === (1+3)) {
        const regexpGroupValues = [...matches[0]].slice(1)
        const number1 = parseInt(regexpGroupValues[0])
        const number2 = parseInt(regexpGroupValues[1])
        const operationResult = parseInt(regexpGroupValues[2])

        if (number1 + number2 === operationResult) {
            return '+'
        }
        if (number1 - number2 === operationResult) {
            return '-'
        }
        if (number1 * number2 === operationResult) {
            return '*'
        }
    }
    throw `The available expression form is number $ number = number but input expression is ${expression}`
}