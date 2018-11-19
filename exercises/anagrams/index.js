// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //MI SOLUCIÓN - ha pasado el test pero realmente no funciona.
    /*
    var charObj = {};
  	var arrA = [];
  	var arrB = [];
    arrA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
    arrB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");

    for (let char of arrA) {
        if (!charObj[char]) {
            charObj[char] = 1
        } else {
            charObj[char] += 1
        }
    };
    for (let char of arrB) {
        if (!charObj[char]) {
            charObj[char] = 1
        } else {
            charObj[char] += 1
        }
    }
    for (let char in charObj) {
        if(charObj[char]&2!== 0){
            return false
        }
    }
    return true
    */

    // Primera solución del menda
    /*
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    } 

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }
    return true;
    */
   // SEGUNDA SOLUCIÓN DEL MENDA
   const strA = cleanString(stringA);
   const strB = cleanString(stringB);

   return strA === strB;
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = anagrams;