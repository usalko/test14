// src/example230.ts

// Luhn Algorithm used to validate identification numbers
// For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
export function example230(inputNumber: any): any {
    const inputNumberAsString: string = String(inputNumber).replace(/\s+/, '')
    // check that input argument is number (i.e. contains only digits
    /\d+/.test()
    // function isValid(cardNumber[1..length])
    //     sum := 0
    //     parity := length mod 2
    //     for i from 1 to (length - 1) do
    //         if i mod 2 != parity then
    //             sum := sum + cardNumber[i]
    //         elseif cardNumber[i] > 4 then
    //             sum := sum + 2 * cardNumber[i] - 9
    //         else
    //             sum := sum + 2 * cardNumber[i]
    //         end if
    //     end for
    //     return cardNumber[length] == ((10 - (sum mod 10)) mod 10)
    // end function

    return  4
}

