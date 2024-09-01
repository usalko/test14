// src/example050.ts


const capitalize = (x: string): string => x.slice(0, 1).toUpperCase() + x.slice(1)

export function example050(inputString: string): string {
    return inputString.split(' ').map(capitalize).join(' ')
}