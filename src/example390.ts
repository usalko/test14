// src/example390.ts

// Create an element from a string (without appending it to the document).
export function example390(inputString: string): any {
    return new DOMParser().parseFromString(inputString, 'text/html').body.firstElementChild;
}

