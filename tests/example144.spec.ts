// tests/example144.spec.ts
import { expect } from 'chai'
import { example144 } from '../src/example144'

console.log(`
Write a JavaScript program to break an URL address and put its parts into an array.  
Note: url structure : ://.org[/] and there may be no part in the address.
`)
describe('#example144', () => {
    it(`Input url is "https://my.domain.com/index.html" #1`, () => {
        expect(example144('https://my.domain.com/index.html')).deep.equal(['https', 'my.domain.com', '/index.html'])
    })
})
