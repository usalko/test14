// src/example323.ts

// check if the provided argument is valid JSON.
export function example323(inputObject: any): boolean {
    if (inputObject == null) {
        return false
    }
    try {
        JSON.parse(inputObject)
        return true
    }
    catch (error) {
        return false
    }
}

