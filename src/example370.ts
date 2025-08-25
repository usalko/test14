// src/example370.ts

import { debug } from "console";


const MS_IN_SECONDS = 1000
const MS_IN_MINUTE = 60 * MS_IN_SECONDS
const MS_IN_HOUR = 60 * MS_IN_MINUTE
const MS_IN_DAY = 24 * MS_IN_HOUR

const TIME_PARTS = ['days', 'hours', 'minutes', 'seconds', 'milliseconds']
const FACTORS = [MS_IN_DAY, MS_IN_HOUR, MS_IN_MINUTE, MS_IN_SECONDS, 1]

// generate the human-readable format in the given number of milliseconds.
export function example370(inputMilliseconds: number): string {
    return FACTORS.reduce(
        (parts: number[], factor: number, i: number) => i === 0 ?
            [Math.floor(parts[i] / FACTORS[i]), parts[i] % FACTORS[i]] :
            [...parts.slice(0, -1), Math.floor(parts[i] / FACTORS[i]), parts[i] % FACTORS[i]],
        [inputMilliseconds]).slice(0, -1).map((x: number, i: number) => x === 1 ? `${x} ${TIME_PARTS[i].slice(0, -1)}`: x === 0 ? '': `${x} ${TIME_PARTS[i]}` ).filter((x: string) => x !== '').join(', ')
}

