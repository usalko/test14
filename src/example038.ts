// src/example038.ts
export function example038(rating: number, finalExam: boolean): boolean {
    if (rating < 0 || rating > 100) {
        throw `Invalid rating value ${rating}, the value should be between 0 and 100 (inclusive).`
    }

    return finalExam ? rating >= 90: rating >= 89
}