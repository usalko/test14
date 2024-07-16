// src/example007.ts
/*
    Accordingly definition of leap year: https://en.wikipedia.org/wiki/Leap_year
 */

export function example007(initialYear: number, finalYear: number): number[] {
    const result: number[] = []
    for(let year = initialYear; year <= finalYear; year++) {
        const localDate = new Date(`${year}-01-01`)
        if(localDate.getDay() === 0) {
            result.push(year)
        }
    }

    return result
}