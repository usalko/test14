// tests/example999.spec.ts
import { expect } from 'chai'
import { example999 } from '../src/example999'

describe('#example999', () => {
    const currentDate = new Date()
    it(`Write a AST to the /tmp/tmp.ts file`, () => {
        expect(example999(`
    class A {
            x: number
            y: number = this.foo()

            foo(): number {
                return 6
            }
    }

    function foo() { }
            `,
            '/tmp/tmp.ts',
            '/tmp/tmp.ts.ast',
        )).equal(0)
    })
})