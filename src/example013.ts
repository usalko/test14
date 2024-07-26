// src/example013.ts
export function example013(variableName: string, variableValue: any): string {
    if (variableName.match(/^\d+.*/)) {
        throw new Error(`Invalid user input ${variableName}`)
    }
    let userDefinedVariable = {
        [variableName]: variableValue
    }
    return JSON.stringify(userDefinedVariable)
}