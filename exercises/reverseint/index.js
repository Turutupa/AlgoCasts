// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // MI ÑAPA BONITA QUE FUNCIONA
    /*
    var str = String(n)
    var pos = String(n * (-1))
    var array = str.split('')
    var posArray = pos.split('')
    return n >= 0 ? parseInt(array.reverse().join('')) : (-1) * parseInt(posArray.reverse().join(''))
    */
    // RESPUESTA CURSO
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')

    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;