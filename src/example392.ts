// src/example392.ts

// Convert the values of RGB components to a color code.
export function example392(r: number, g: number, b: number): string {
    // return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

