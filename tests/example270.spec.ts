// tests/example270.spec.ts
import { expect } from 'chai'
import { example270 } from '../src/example270'

console.log(`Fundamental(ES6)-Part-I
120. String to Snake Case

Write a JavaScript program to convert a string to snake case.

Note: Break the string into words and combine them adding _ as a separator, using a regexp.

 - Use String.prototype.match() to break the string into words using an appropriate regexp.
 - Use Array.prototype.map(), Array.prototype.slice(), Array.prototype.join() and String.prototype.toLowerCase() to combine them, adding _ as a separator.

`)

describe('#example270', () => {
    it(`Input argument is 'camelCase' #1`, () => {
        expect(example270('camelCase')).equal('camel_case')
    })
    it(`Input argument is 'some text' #1`, () => {
        expect(example270('some text')).equal('some_text')
    })
    it(`Input argument is 'some-mixed_string With spaces_underscores-and-hyphens' #1`, () => {
        expect(example270('some-mixed_string With spaces_underscores-and-hyphens')).equal('some_mixed_string_with_spaces_underscores_and_hyphens')
    })
    it(`Input argument is 'AllThe-small Things' #1`, () => {
        expect(example270('AllThe-small Things')).equal('all_the_small_things')
    })
    it(`Input argument is 'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML' #1`, () => {
        expect(example270('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML')).equal('i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html')
    })
})
