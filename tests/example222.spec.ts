// tests/example222.spec.ts
import { expect } from 'chai'
import { example222 } from '../src/example222'

console.log(`Fundamental(ES6)-Part-I
72. Detect Mobile or Desktop

Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.
 - Use a regular expression to test the navigator.userAgent property to figure out if the device is a mobile device or a desktop.
`)

describe('#example222', () => {
    it(`Input agent string #1`, () => {
        expect(example222('Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1')).equal('mobile')
    })
    it(`Input agent string #2`, () => {
        expect(example222('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/106.0.0.0')).equal('desktop')
    })
})
