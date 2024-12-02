// src/example142.ts


//TODO: write optimized by memory version.
export function example142(inputPath: string): string {
    const path = inputPath.split('/')
    const output: string[] = []
    for (let i = 0; i < path.length; i++) {
        if (path[i] == '') {
            continue
        }
        if (path[i] == '.') {
            continue
        }
        if (path[i] == '..') {
            output.pop()
        } else {
            output.push(path[i])
        }
    }
    return '/' + output.join('/') 
}

