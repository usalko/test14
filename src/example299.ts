// src/example299.ts
import {readFileSync} from 'fs'

// get an array of lines from the specified file.
export function example299(inputFileName: string): string[] {
    return readFileSync(inputFileName).toString('utf-8').split('\n')
}
