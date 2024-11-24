// src/example134.ts


const ENCODE_BASE = 'a'.charCodeAt(0)
const ENCODE_STOP = 'z'.charCodeAt(0)

const encode = (charCode: number): string => {
    const charIndex = charCode - ENCODE_BASE
    return String.fromCharCode(ENCODE_STOP - charIndex)
}


export function example134(inputString: string): string {
    return inputString.split('').map((c) => c.toLowerCase() === c ? encode(c.charCodeAt(0)): c).join('')
}

