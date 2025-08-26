// src/example371.ts

// iterate over all the properties of an object in reverse, running a callback for each one
export function example371(inputValue: any, inputCallback: any): any[] {
    return Object.keys(inputValue).reverse().map((propertyName: string) => inputCallback(inputValue[propertyName]))
}

