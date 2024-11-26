// src/example136.ts


const isDigit = (x: string): boolean => {
    const charCode = x.charCodeAt(0)
    return charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0)
}


export function example136(inputString: string): string {
    let hasDigit = false
    let output = ''
    for (let i = 0; i < inputString.length; i++) {
        if (!hasDigit && isDigit(inputString[i])) {
            hasDigit = true
            output += '$'
        } else {
            output += inputString[i]
        }
    }
    if (!hasDigit) {
        throw 'A string should have at least one digit'
    }
    return output
}

