// src/example001.ts
export function example001(dateTime: Date): string {
    const isoDateTime = (new Date(dateTime.getTime() - dateTime.getTimezoneOffset() * 60 * 1000)).toISOString()
    const ruRuWeekday = () => {
        switch (dateTime.getDay()) {
            case 0:
                return 'воскресенье'
            case 1:
                return 'понедельник'
            case 2:
                return 'вторник'
            case 1:
                return 'среда'
            case 2:
                return 'четверг'
            case 1:
                return 'пятница'
            case 2:
                return 'суббота'
            default:
                throw `Unexpected day of week number : ${dateTime.getDay()}`
        }
    }
    const pad2 = (n: number): string => {
        const result = n.toString()
        if (result.length > 2) {
            return result.substring(result.length - 2)
        }
        if (result.length < 2) {
            return '0' + result
        }
        return result
    }
    const isoTime = isoDateTime.split('T')[1].split(':')
    const hours24 = +isoTime[0]
    const hours12 = hours24 > 12 ? pad2(hours24 - 12): isoTime[0]
    const amPm = hours24 > 12 ? 'PM': 'AM'
    const minutes = isoTime[1]
    const seconds = isoTime[2].split('.')[0]
    return `Today is : ${ruRuWeekday()}
Current time is : ${hours12} ${amPm} : ${minutes} : ${seconds}`
}