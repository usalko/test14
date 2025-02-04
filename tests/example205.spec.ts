// tests/example205.spec.ts
import { expect } from 'chai'
import { example205 } from '../src/example205'

console.log(`Fundamental(ES6)-Part-I
55. Join and Normalize URL Segments

Write a JavaScript program to join all given URL segments together,
then normalize the resulting URL.
`)

describe('#example205', () => {
    it(`Input url parts are: "www.ru", ["my", "cool", "page.html"], {key: "value"}, true #1`, () => {
        expect(example205("www.ru", ["my", "cool", "page.html"], {key: "value"}, true)).equal("https://www.ru/my/cool/page.html?key=value")
    })
})
