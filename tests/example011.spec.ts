// tests/example011.spec.ts
import { expect } from 'chai'
import { example011 } from '../src/example011'

console.log(`
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
 `)
describe('#example011', () => {
    it(`From Celsius to Fahrenheit`, () => {
        expect(example011({fromCelsiusToFahrenheit:true, value:60})).equal(140)
    })
    it(`From Fahrenheit to Celsius`, () => {
        expect(example011({fromFahrenheitToCelsius:true, value:45})).equal(7.222222222222222)
    })

})