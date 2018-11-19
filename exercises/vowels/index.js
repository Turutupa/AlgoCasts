// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // MI SOLUCIÓN
    /*
    const vowels = ['a','e','i','o','u']

    return str.split('').reduce((prev, elem) => {
        if (vowels.includes(elem.toLowerCase())) {
            prev += 1
        }
        return prev
    }, 0)
*/
    // SU SEGUNDA SOLUCIÓN ES EXACTAMENTE IGUAL PERO USANDO for( let char of str.toLowerCase())
    // USANDO REGULAR EXPRESIONS
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;