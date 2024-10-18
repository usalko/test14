// src/example097.ts


const reverse1 = (inputString: string) => {
    return inputString.split('').reverse().join('')
}


const reverse2 = (inputString: string) => {
    let result = ''
    for (let i = inputString.length - 1; i >= 0; i--) {
        result += inputString[i]
    }
    return result
}


const reverse3 = (inputString: string): string => {
    return (inputString === '') ? '': reverse3(inputString.slice(1)) + inputString.charAt(0)
}


const palindrome = (inputString: string) => {
    return inputString + reverse1(inputString)
}


export function example097(inputArray: string[]): string {
    if (inputArray.length === 0) {
        return ''
    }
    return palindrome(inputArray.reduce((prev, current) => current.length < prev.length ? current : prev))
}