// src/example003.ts
export function example003(date: Date, format: string): string {
    // TODO: parse format string
    if (format !== 'mm-dd-yyyy') {
        throw `Unimplemented format ${format}`
    }
    let pad = (n: number, count: number, s: string = '0') => {
        let result = n.toString()
        if (result.length > count) {
            return result.substring(result.length - count)
        }
        if (result.length === count) {
            return result
        }
        return s.repeat(count - result.length) + result
    }

    let months = pad(date.getMonth() + 1, 2)
    let days = pad(date.getDate(), 2)
    let years = pad(date.getFullYear(), 4)
    return [months, days, years].join('-')
}