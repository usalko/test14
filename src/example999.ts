import * as ts from 'typescript'
import * as fs from 'fs'


// src/example999.ts
export function example999(code: string, fileName: string, astFileName: string): number {
    const node = ts.createSourceFile(fileName, code, ts.ScriptTarget.Latest)
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
    
    fs.writeFileSync(astFileName, printer.printNode(ts.EmitHint.ImportTypeNodeAttributes, node, node))
        
    return 0
}