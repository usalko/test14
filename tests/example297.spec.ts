// tests/example297.spec.ts
import { expect } from 'chai'
import { example297 } from '../src/example297'

console.log(`Fundamental(ES6)-Part-I
157. Redirect to URL


Write a JavaScript program to redirect to a specified URL.


 - Use Window.location.href or Window.location.replace() to redirect to url.
 - Pass a second argument to simulate a link click (true - default) or an HTTP redirect (false).


`)

describe('#example297', () => {
    it(`Input argument is 'https://google.com' #1`, () => {
        expect(example297('https://google.com').includes('<meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image">')).equal(true)
    })
})
