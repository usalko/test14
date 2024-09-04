// src/example053.ts

const characters = ['a', 'b']
const minimalDistance = 3

const distanceInCursor = (cursor: { [key: string]: number }): number => {
    const lastMaxIndex = Math.max(...Object.entries(cursor).map(x => x[1]))
    const selectedKeyValue = Object.entries(cursor).find(x => x[1] === lastMaxIndex)
    if (!selectedKeyValue) {
        throw `Invalid state, lastMaxIndex is ${lastMaxIndex}`
    }
    const selectedKey = selectedKeyValue[0]
    const maximalValueFromOtherKeys = Math.max(...Object.entries(cursor).filter(x => x[0] !== selectedKey).map(x => x[1]))
    if (maximalValueFromOtherKeys < 0) {
        throw `Invalid state, maximalValueFromOtherKeys less then zero`
    }
    return cursor[selectedKey] - maximalValueFromOtherKeys
}

const initialMove = (positions: { [key: string]: number[] }): { [key: string]: number } => {
    const cursor: { [key: string]: number } = {}
    for (const key in positions) {
        cursor[key] = positions[key].slice(-1)[0]
    }
    // Try to decrease index if other less then index value
    for (const key in cursor) {
        const maximalValueFromOtherKeys = Math.max(...Object.entries(cursor).filter(x => x[0] !== key).map(x => x[1]))
        if (cursor[key] > maximalValueFromOtherKeys) {
            // seek previous position that more then maximal value from other keys
            let cursorIndex = positions[key].indexOf(cursor[key]) - 1
            while (cursorIndex > 0 && positions[key][cursorIndex] > maximalValueFromOtherKeys) {
                cursorIndex--
            }
            cursor[key] = positions[key][cursorIndex]
        }
    }
    return cursor
}

const moveToTheLeft = (cursor: { [key: string]: number }, positions: { [key: string]: number[] }) => {

    function moveKeyToPreviousPosition(key: string, maximalValueFromOtherKeys: number) {
        // move to the next position or assign -1 if it a last position
        let cursorIndex = positions[key].indexOf(cursor[key]) - 1
        while (cursorIndex >= 0 && positions[key][cursorIndex] > maximalValueFromOtherKeys) {
            cursorIndex--
        }
        // Force move if position doesn't change
        if (cursorIndex < 0) {
            cursor[key] = -1
        } else {
            cursor[key] = positions[key][cursorIndex]
        }
    }

    // Detect key with maximal value
    const lastMaxIndex = Math.max(...Object.entries(cursor).map(x => x[1]))
    const selectedKeyValue = Object.entries(cursor).find(x => x[1] === lastMaxIndex)
    if (!selectedKeyValue) {
        throw `Invalid state, lastMaxIndex is ${lastMaxIndex}`
    }
    const selectedKey = selectedKeyValue[0]
    moveKeyToPreviousPosition(selectedKey, Math.max(...Object.entries(cursor).filter(x => x[0] !== selectedKey).map(x => x[1])))

    for (const key in cursor) {
        const maximalValueFromOtherKeys = Math.max(...Object.entries(cursor).filter(x => x[0] !== key).map(x => x[1]))
        if (cursor[key] > maximalValueFromOtherKeys && maximalValueFromOtherKeys >= 0) {
            moveKeyToPreviousPosition(key, maximalValueFromOtherKeys)
        }
    }

}

export function example053(inputString: string): boolean {
    // Index initialization
    const positions: { [key: string]: number[] } = {}
    characters.forEach((x) => positions[x] = [])

    // Indexing
    for (let i = 0; i < inputString.length; i++) {
        if (characters.includes(inputString[i])) {
            positions[inputString[i]].push(i)
        }
    }

    // Check no symbols case
    if (Object.entries(positions).some((x) => x[1].length === 0)) {
        return false
    }

    // Distances calculation
    // input example ----
    // 'a': [1,2,     10]
    // 'b': [    3, 5   ]

    // Scan from end algorithm
    // Create vector cursor
    // Then move cursor from right to the left
    // And calculate positive differences
    const distances = []
    const cursor: { [key: string]: number } = initialMove(positions)
    distances.push(distanceInCursor(cursor))

    moveToTheLeft(cursor, positions)
    while (Object.entries(cursor).every((x) => x[1] >= 0)) {
        distances.push(distanceInCursor(cursor))
        moveToTheLeft(cursor, positions)
    }
    return distances.some((x) => x >= minimalDistance)
}