// src/example152.ts


// copy a string to the clipboard
export async function example152(inputString: string, window: Window): Promise<string> {

    const nav = window.navigator
    if (nav.clipboard) {
        nav.clipboard.writeText(inputString)
        return await navigator.clipboard.readText()
    }
    // Mock function if node.js environment
    return await Promise.resolve(inputString)
}

