// src/example269.ts

// get tomorrow's date in a string representation.
export function example269(isShortFormat: boolean = true): any {
    const date = new Date()
    date.setDate(date.getDate() + 1000*60*60*24)
    return date.toISOString()
}

