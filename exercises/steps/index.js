// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    //MI SOLUCIÓN
    
        const arr = [];
    
        for (let j = 0; j < n; j++) {
            arr[j] = ' '
        }
    
        for (let k = 0; k < n; k++) {
            arr[k] = '#';
            console.log(arr.join(''))
        }
    
    /*
        //Primera solución del menda. 
        // La lógica es que la esquina superior de la 'matriz' siempre sean espacios
        // por ello todo nº de columna igual o inferior a la fila será un hash
        for (let row = 0; row < n; row++) {
            let stair = ''
    
            for (let column = 0; column < n; column++) {
                if (column <= row) {
                    stair += '#';
                } else {
                    stair += ' ';
                }
            }
            console.log(stair)
        }
    */
    // SOLUCIÓN GUAY - recursion - a mi no me mola una mierda
    /*
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row ){
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);
    */
}

module.exports = steps;
