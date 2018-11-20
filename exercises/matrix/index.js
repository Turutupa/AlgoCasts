// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n, arr, subArr, direction, colDeduct, rowDeduct, count) {
    if (count === (n * n)) {
        return arr;
    } else {
        if (direction === 'right') {
            //console.log('right', arr)
            for (let col = 0 + colDeduct; col < n - colDeduct - 1; col++) {

                count += 1;
                arr[rowDeduct][col] = count;
            };
            return matrix(n, arr, subArr, 'down', colDeduct, rowDeduct, count)
        }
        if (direction === 'down') {
            //console.log('down', arr)
            for (let row = 0 + rowDeduct; row <= n - rowDeduct - 1; row++) {

                count += 1;
                arr[row][n - rowDeduct - 1] = count;
            }
            return matrix(n, arr, subArr, 'left', colDeduct, rowDeduct, count)
        }
        if (direction === 'left') {
            //console.log('left', arr)
            for (let col = n - colDeduct - 2; col >= colDeduct; col--) {

                count += 1;
                arr[n - rowDeduct - 1][col] = count;
            };
            return matrix(n, arr, subArr, 'up', colDeduct + 1, rowDeduct, count)
        }
        if (direction === 'up') {
            //console.log('up', arr)
            for (let row = n - rowDeduct - 2; row > rowDeduct; row--) {

                count += 1;
                arr[row][rowDeduct] = count;
            }
            return matrix(n, arr, subArr, 'right', colDeduct, rowDeduct + 1, count)
        }
    }
    arr = [];
    subArr = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            subArr.push(' ')
        }
        arr.push(subArr);
        subArr = [];
    }
    //console.log(arr)
    return matrix(n, arr, subArr, 'right', colDeduct = 0, rowDeduct = 0, count = 0)

}

module.exports = matrix;