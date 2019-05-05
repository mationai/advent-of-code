const { maximum, minimum, fold } = require('fkit')
const { strToInts2D } = require('./helpers')

let maxDiff = xs => maximum(xs) - minimum(xs)

/**
 * @returns {int} 1st result of division of ints in xs where reminder is 0
 */
let maxDiv = xs /*[int]*/ => {
  for (let a of xs)
    for (let b of xs)
      if (a != b && a%b == 0) return a / b
  throw Error(`No a/b == 0 in ${xs}`)
} 

module.exports = (inStr, log) => {
  const xss = strToInts2D(inStr)
  log.p1(xss |> fold((a, xs) => a + maxDiff(xs), 0))
  log.p2(xss |> fold((a, xs) => a + maxDiv(xs), 0))
}