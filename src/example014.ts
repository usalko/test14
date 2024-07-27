// src/example014.ts
export function example014(fileNamePath: string): string {
    const fileNameExtension =  fileNamePath.split('.').pop()
    if (fileNameExtension && fileNamePath !== fileNameExtension) {
        return fileNameExtension
    }
    return ''
}