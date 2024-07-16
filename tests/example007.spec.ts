// tests/example007.spec.ts
import { assert, expect } from 'chai'
import { example007 } from '../src/example007'

describe('#example007', () => {
    const etalon: number[] = []
    if (new Date('2014-01-01').getDay() === 0) {
        etalon.push(2014)
    }
    if (new Date('2015-01-01').getDay() === 0) {
        etalon.push(2015)
    }
    if (new Date('2016-01-01').getDay() === 0) {
        etalon.push(2016)
    }
    if (new Date('2017-01-01').getDay() === 0) {
        etalon.push(2017)
    }
    if (new Date('2018-01-01').getDay() === 0) {
        etalon.push(2018)
    }
    if (new Date('2019-01-01').getDay() === 0) {
        etalon.push(2019)
    }
    if (new Date('2020-01-01').getDay() === 0) {
        etalon.push(2020)
    }
    if (new Date('2021-01-01').getDay() === 0) {
        etalon.push(2021)
    }
    if (new Date('2022-01-01').getDay() === 0) {
        etalon.push(2022)
    }
    if (new Date('2023-01-01').getDay() === 0) {
        etalon.push(2023)
    }
    if (new Date('2024-01-01').getDay() === 0) {
        etalon.push(2024)
    }
    if (new Date('2025-01-01').getDay() === 0) {
        etalon.push(2025)
    }
    if (new Date('2026-01-01').getDay() === 0) {
        etalon.push(2026)
    }
    if (new Date('2027-01-01').getDay() === 0) {
        etalon.push(2027)
    }
    if (new Date('2028-01-01').getDay() === 0) {
        etalon.push(2028)
    }
    if (new Date('2029-01-01').getDay() === 0) {
        etalon.push(2029)
    }
    if (new Date('2030-01-01').getDay() === 0) {
        etalon.push(2030)
    }
    if (new Date('2031-01-01').getDay() === 0) {
        etalon.push(2031)
    }
    if (new Date('2032-01-01').getDay() === 0) {
        etalon.push(2032)
    }
    if (new Date('2033-01-01').getDay() === 0) {
        etalon.push(2033)
    }
    if (new Date('2034-01-01').getDay() === 0) {
        etalon.push(2034)
    }
    if (new Date('2035-01-01').getDay() === 0) {
        etalon.push(2035)
    }
    if (new Date('2036-01-01').getDay() === 0) {
        etalon.push(2036)
    }
    if (new Date('2037-01-01').getDay() === 0) {
        etalon.push(2037)
    }
    if (new Date('2038-01-01').getDay() === 0) {
        etalon.push(2038)
    }
    if (new Date('2039-01-01').getDay() === 0) {
        etalon.push(2039)
    }
    if (new Date('2040-01-01').getDay() === 0) {
        etalon.push(2040)
    }
    if (new Date('2041-01-01').getDay() === 0) {
        etalon.push(2041)
    }
    if (new Date('2042-01-01').getDay() === 0) {
        etalon.push(2042)
    }
    if (new Date('2043-01-01').getDay() === 0) {
        etalon.push(2043)
    }
    if (new Date('2044-01-01').getDay() === 0) {
        etalon.push(2044)
    }
    if (new Date('2045-01-01').getDay() === 0) {
        etalon.push(2045)
    }
    if (new Date('2046-01-01').getDay() === 0) {
        etalon.push(2046)
    }
    if (new Date('2047-01-01').getDay() === 0) {
        etalon.push(2047)
    }
    if (new Date('2048-01-01').getDay() === 0) {
        etalon.push(2048)
    }
    if (new Date('2049-01-01').getDay() === 0) {
        etalon.push(2049)
    }
    if (new Date('2050-01-01').getDay() === 0) {
        etalon.push(2050)
    }
    it(`Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.`, () => {
        expect(example007(2014, 2050)).deep.equal(etalon)
    })
})