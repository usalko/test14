// tests/example001.spec.ts
import { assert } from 'chai'
import { example001 } from '../src/example001'

describe('#example001', () => {
    it('Write a TypeScript program to display the current day and time in the following format.', () => {
        const currentDate = new Date()
        const result = example001(currentDate)
        const weekday = Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(currentDate)
        const pad2 = (n: number): string => n.toString().padStart(2, '0')
        // const hours = pad2(currentDate.getHours())
        const minutes = pad2(currentDate.getMinutes())
        const seconds = pad2(currentDate.getSeconds())
        const dayPeriod = Intl.DateTimeFormat('en-US', {hour: 'numeric', hour12: true}).format(currentDate)
        assert.equal(result, `Today is : ${weekday}
Current time is : ${dayPeriod} : ${minutes} : ${seconds}`)
    })
})