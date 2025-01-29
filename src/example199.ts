// src/example199.ts


// Retrieve a set of properties indicated by the given selectors from an object.
export function example199(obj: any, ...args: string[]): any[] {
    return args.map((sel) => sel.replace('[', '.').replace(']', '').split('.').filter((selPart) => selPart !== '')
        .reduce((o, selPart) => o ? o[selPart] : undefined, obj))
}
