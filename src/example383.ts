// src/example383.ts

// get the distance between two given points
export function example383(inputCoordinatesX1: number, inputCoordinatesY1: number, inputCoordinatesX2: number, inputCoordinatesY2: number): number {
    return Math.hypot(inputCoordinatesX2 - inputCoordinatesX1, inputCoordinatesY2 - inputCoordinatesY1)
}

