// tests/example225.spec.ts
import { expect } from 'chai'
import { example225 } from '../src/example225'

console.log(`Fundamental(ES6)-Part-I
75. Elo Rating System Computation

Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system.
It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -> loser).
 - Note: Use the exponent ** operator and math operators to compute the expected score (chance of winning). 
 of each opponent and compute the new rating for each. Loop through the ratings, 
 using each permutation to compute the post-Elo rating for each player in a pairwise fashion. 
 Omit the second argument to use the default kFactor of 32.
`)

describe('#example225', () => {
    it(`Input arguments are [1200, 1200] #1`, () => {
        expect(example225([1200, 1200])).deep.equal([1216, 1184])
    })
    it(`Input arguments are elo([1200, 1200], 64) #1`, () => {
        expect(example225([1200, 1200], 64)).deep.equal([1232, 1168])
    })
    it(`Input arguments are elo([1200, 1200], 64) #1`, () => {
        expect(example225([1200, 1200, 1200, 1200]).map(Math.round)).deep.equal([1246, 1215, 1185, 1154])
    })
})
