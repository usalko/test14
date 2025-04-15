// tests/example273.spec.ts
import { expect } from 'chai'
import { example273 } from '../src/example273'

console.log(`Fundamental(ES6)-Part-I
123. String to Kebab Case

Write a JavaScript program to convert a string to kebab case.

Note: Break the string into words and combine them adding - as a separator, using a regexp.

 - Use String.prototype.match() to break the string into words using an appropriate regexp.
 - Use Array.prototype.map(), Array.prototype.join() and String.prototype.toLowerCase() to combine them, adding - as a separator.

`)

describe('#example273', () => {
    it(`Input argument is 'camelCase' #1`, () => {
        expect(example273('camelCase')).equal('camel-case')
    })
    it(`Input argument is 'some text' #2`, () => {
        expect(example273('some text')).equal('some-text')
    })
    it(`Input argument is 'some-mixed_string With spaces_underscores-and-hyphens' #3`, () => {
        expect(example273('some-mixed_string With spaces_underscores-and-hyphens')).equal('some-mixed-string-with-spaces-underscores-and-hyphens')
    })
    it(`Input argument is 'AllThe-small Things' #1`, () => {
        expect(example273('AllThe-small Things')).equal('all-the-small-things')
    })
    it(`Input argument is 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML' #5`, () => {
        expect(example273('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')).equal('i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html')
    })
})
