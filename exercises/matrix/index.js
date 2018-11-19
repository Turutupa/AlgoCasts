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
function matrix(n) {
    let arr = [];
    let subArr = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            subArr.push(' ')
        }
        arr.push(subArr);
        subArr = [];
    }

    function slide(arr, direction, colDeduct, rowDeduct, n, count) {
        console.log(arr)
        if (count === n * n) {
            return arr;
        } else {
            switch (direction) {
                case 'right':
                    for (let col = 0 + colDeduct; col < n - colDeduct -1; col++) {
                        count += 1;
                        arr[rowDeduct][col] = count;
                    };
                    direction = 'down';
                    slide(arr, direction, colDeduct, rowDeduct, n, count)
                    break;

                case 'down':
                    for (let row = 0 + rowDeduct; row <= n - rowDeduct - 1; row++) {
                        count += 1;
                        arr[row][n - rowDeduct] = count;
                    }
                    direction = 'left';
                    slide(arr, direction, colDeduct, rowDeduct, n, count)
                    break;

                case 'left':
                    colDeduct += 1;
                    for (let col = n - colDeduct - 1; col >= colDeduct; col--) {
                        count += 1;
                        arr[rowDeduct][col] = count;
                    };
                    direction = 'up';
                    slide(arr, direction, colDeduct, rowDeduct, n, count)
                    break;

                case 'up':
                    rowDeduct += 1;
                    for (let row = n - rowDeduct - 1; row > rowDeduct; row--) {
                        count += 1;
                        arr[row][rowDeduct] = count;
                    }
                    direction = 'right';
                    slide(arr, direction, colDeduct, rowDeduct, n, count)
                    break;
            }
        }
    }
    return slide(arr, direction = 'right', colDeduct = 0, rowDeduct = 0, n, count = 0)

}

module.exports = matrix;