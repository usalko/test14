// src/example091.ts

enum Example091Event {
    StartNewSequence,
    Stop,
    UpdateCurrentSum,
}

const detectEvent = (i: number, inputArray: number[]): Example091Event => {
    if (i < inputArray.length) {
        if (i === 0 || inputArray[i - 1] > inputArray[i]) {
            return Example091Event.StartNewSequence
        }
        return Example091Event.UpdateCurrentSum
    }
    return Example091Event.Stop 
} 

export function example091(inputArray: number[]): number {
    let maxSum = 0
    let prevElement = undefined
    let currentSum = 0

    for (let i = 0; i <= inputArray.length; i++) {
        switch (detectEvent(i, inputArray)) {
            case Example091Event.StartNewSequence:
                break;
            case Example091Event.UpdateCurrentSum:
                break;
            case Example091Event.Stop:
                break;
        }
    }
    return 0;
}