// src/example011.ts
/*
 * Celsius Fahrenheit conversion:
 * https://en.wikipedia.org/wiki/Fahrenheit#:~:text=Conversion%20(specific%20temperature%20point),-For%20an%20exact&text=c%20%C2%B0C%20to%20f,f%20%3D%20c%20%C3%97%201.8%20%2B%2032
 */


const convertFromCelsiusToFahrenheit = (value: number): number => {
    return value * 1.8 + 32
}

const convertFromFahrenheitToCelsius = (value: number): number => {
    return (value - 32) / 1.8
}

export function example011(params: {
    fromCelsiusToFahrenheit?: boolean,
    fromFahrenheitToCelsius?: boolean,
    value: number,
}): number {
    const { fromCelsiusToFahrenheit, fromFahrenheitToCelsius, value } = params
    if (fromCelsiusToFahrenheit && !fromFahrenheitToCelsius) {
        return convertFromCelsiusToFahrenheit(value)
    }
    return convertFromFahrenheitToCelsius(value)
}