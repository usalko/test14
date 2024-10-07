// src/example086.ts

export function example086(inputAngle: number): string {
    if (inputAngle == 90) {
        return 'Right'
    }
    if (inputAngle >= 0 && inputAngle < 90) {
        return 'Acute'
    }
    if (inputAngle > 90 && inputAngle < 180) {
        return 'Obtuse'
    }
    if (inputAngle == 180) {
        return 'Straight'
    }
    return 'Unknown'
}