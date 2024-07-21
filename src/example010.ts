// src/example010.ts
/*
 * Christmas days:
 * https://en.wikipedia.org/wiki/Christmas
 * 26 Dec
 * 07 Jan - orthodox 
 */


const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24

export function example010(userInput1: string, userInput2: string): number {
    return parseInt(userInput1) * parseInt(userInput2)
}