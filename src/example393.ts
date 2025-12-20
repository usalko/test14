// src/example393.ts

// Generate a UUID in a browser.
export function example393(): string {
    return (new Crypto()).getRandomValues(new Uint8Array(16)).toString().replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, (_, a, b, c, d, e) => {
        const hex = (num: number) => num.toString(16).padStart(2, '0')
        const bytes = Array.from(new Uint8Array(16).map((_, i) => parseInt(hex(parseInt(a + b + c + d + e, 16)).substr(i * 2, 2), 16)))
        bytes[6] = (bytes[6] & 0x0f) | 0x40 // version 4
        bytes[8] = (bytes[8] & 0x3f) | 0x80 // variant 10
        return bytes.map((byte, index) => (index === 4 || index === 6 || index === 8 || index === 10 ? '-' : '') + hex(byte)).join('')
    })
}

