// src/example407.ts


// Calculate the midpoint between two pairs of points
export function example407(point1: [number, number], point2: [number, number]): [number, number] {
    return [(point2[0] + point1[0]) / 2, (point2[1] + point1[1]) / 2]
}
