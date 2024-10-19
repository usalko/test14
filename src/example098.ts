// src/example098.ts


export function example098(inputString: string): string {
    let result = ''
    let lowerCaseLetters = 0
    let upperCaseLetters = 0
    inputString.split('').forEach((value) => {
        if (value === value.toUpperCase()) {
            upperCaseLetters ++
        }
        if (value === value.toLocaleLowerCase()) {
            lowerCaseLetters ++
        }
    })
    return lowerCaseLetters > upperCaseLetters? inputString.toLowerCase(): inputString.toUpperCase()
}