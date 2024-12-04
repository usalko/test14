// src/example144.ts


// Break an URL address and put its parts into an array.  
// Note: url structure : ://.org[/] and there may be no part in the address.
export function example144(inputString: string): string[] {
    const inputStringComponents = inputString.split('://', 2)
    const siteAndHost = inputStringComponents[1].split('/', 2)
    return [inputStringComponents[0], siteAndHost[0], '/' + siteAndHost[1]]
}

