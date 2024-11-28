// src/example138.ts

const HEX_WORDS = [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x100, 0x200, 0x400, 0x800, 0x1000, 0x2000, 0x4000, 0x8000]

export function example138(inputNumber: number): number {
    if (inputNumber < 0) {
        throw `Input number ${inputNumber} less then zero`
    }
    if (inputNumber > 0xFFFF) {
        throw `Input number ${inputNumber} greater than 0xFFFF (i.e not unsigned 16 bit integer)`
    }
    let result: number = 0 
    for (let i = 0; i < 16; i++) {
        if (inputNumber >> i & 0x1) {
            result += HEX_WORDS[15 - i]
        }
    }
    return result
}

