// src/example009.ts
/*
 * Christmas days:
 * https://en.wikipedia.org/wiki/Christmas
 * 26 Dec
 * 07 Jan - orthodox 
 */


const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24

export function example009(date: Date, isOrthodox: boolean): number {
    const currentDate = new Date(date)
    currentDate.setHours(0, 0, 0, 0)
    
    if (isOrthodox) {
        const orthodoxChristmasDay = currentDate.getMonth() === 0 && currentDate.getDay() < 7 ? 
            new Date(currentDate.getFullYear(), 0, 7): 
            new Date(currentDate.getFullYear() + 1, 0, 7)
        return Math.abs(((orthodoxChristmasDay.getTime() -  currentDate.getTime()) / MILLISECONDS_IN_DAY) | 0)
    }

    const catholicChristmasDay = currentDate.getMonth() === 11 && currentDate.getDay() > 26 ? 
        new Date(currentDate.getFullYear() + 1, 11, 26): 
        new Date(currentDate.getFullYear(), 11, 26)
    return Math.abs(((catholicChristmasDay.getTime() -  currentDate.getTime()) / MILLISECONDS_IN_DAY) | 0)
}