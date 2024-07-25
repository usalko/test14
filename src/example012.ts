// src/example012.ts
export async function example012(params: {
    url: string,
}): Promise<string> {
    const {url} = params
    if (url.startsWith('https://')) {
        return fetch(url).then(value => {
            return value.text()
        })
    }
    return fetch(`https://${url}`).then(value => {
        return value.text()
    })
}