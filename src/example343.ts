// src/example343.ts

// determine if the current runtime environment is a browser.
// This is so that front-end modules can run on the server (Node) without errors.
export function example343(): boolean {
    return [typeof window, typeof document].includes('object')
}
