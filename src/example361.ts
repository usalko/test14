// src/example361.ts

// get a string like HH:MM:SS from a Date object.
export function example361(inputDate: Date): string {
    return inputDate.toTimeString().slice(0, 8)
}

