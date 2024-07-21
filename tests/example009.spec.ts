// tests/example009.spec.ts
import { assert, expect } from 'chai'
import { example009 } from '../src/example009'

const dayOfYear = (date: Date): number => {
    return ((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24) | 0
}

describe('#example009', () => {
    const currentDate = new Date(2024, 1, 26)

    const orthodoxChristmasDayInCurrentYear = currentDate.getMonth() === 0 && currentDate.getDay() < 7
    const orthodoxChristmasDay = orthodoxChristmasDayInCurrentYear ? 
        new Date(currentDate.getFullYear(), 0, 7):
        new Date(currentDate.getFullYear() + 1, 0, 7)

    const lastDayInTheCurrentYear = new Date(currentDate.getFullYear(), 11, 31)

    const catholicChristmasDayInCurrentYear = currentDate.getMonth() < 11 || currentDate.getDay() < 26
    const catholicChristmasDay = catholicChristmasDayInCurrentYear ?
        new Date(currentDate.getFullYear(), 11, 26):
        new Date(currentDate.getFullYear() + 1, 11, 26)

    const daysLeftBeforeCatholicChristmasDay = catholicChristmasDayInCurrentYear ?
    Math.abs(dayOfYear(currentDate) - dayOfYear(catholicChristmasDay)):
    Math.abs(dayOfYear(lastDayInTheCurrentYear) - dayOfYear(currentDate) + 1) + (catholicChristmasDayInCurrentYear ? 0: dayOfYear(lastDayInTheCurrentYear) - dayOfYear(currentDate))

    it(`Write a JavaScript program to calculate the days left before catholic Christmas.`, () => {
        expect(example009(currentDate, false)).equal(daysLeftBeforeCatholicChristmasDay)
    })

    const daysLeftBeforeOrthodoxChristmasDay = orthodoxChristmasDayInCurrentYear ?
        Math.abs(dayOfYear(currentDate) - dayOfYear(orthodoxChristmasDay)) :
        Math.abs(dayOfYear(lastDayInTheCurrentYear) - dayOfYear(currentDate) + 1) + (orthodoxChristmasDayInCurrentYear ? 0: 6)

    it(`Write a JavaScript program to calculate the days left before orthodox Christmas.`, () => {
        expect(example009(currentDate, true)).equal(daysLeftBeforeOrthodoxChristmasDay)
    })

})