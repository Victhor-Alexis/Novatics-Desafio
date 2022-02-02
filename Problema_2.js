const SudokuValidation = (matrix) => {

    let verifying_row = []
    let verifying_column = []
    let verifying_mine_table = [[],[],[]]
    let mine_tb_column = 0

    const checking_for_duplications = (arr) => {
        arr.sort((n1, n2) => (n1 - n2))

        for (let i = 0; i < arr.length; ++i) {
            if (i > 0 && arr[i] == arr[i-1]) {
                return true
            }
        }

        return false
    }

    for (let i = 0; i < 9; ++i) {

        /* In this algorithm I am verifying 3 mini tables for once, so when the loop
        reaches the row 4 or 7, we have to check the next 3 tables*/
        if (i % 3 == 0 && i != 0) {
            // if some minitable has a duplicated element:

            /* Checking if it is getting the minitables correctly
            console.log(verifying_mine_table[0])
            console.log(verifying_mine_table[1])
            console.log(verifying_mine_table[2])
            console.log("\n\n")*/

            if(checking_for_duplications(verifying_mine_table[0]) ||
               checking_for_duplications(verifying_mine_table[1]) ||
               checking_for_duplications(verifying_mine_table[2])) {

                return false
            }

            verifying_mine_table = [[],[],[]] // to get the next 3 tables
        }

        mine_tb_column = 0

        for(let j = 0; j < 9; ++j) {
            if (matrix[i][j] != '.') { // getting just the numbers
                verifying_row.push(parseInt(matrix[i][j]))
            }

            if (matrix[j][i] != '.') {
                verifying_column.push(parseInt(matrix[j][i]))
            }

            // getting 'mine tables'
            if (matrix[i][j] != '.')
                verifying_mine_table[mine_tb_column].push(parseInt(matrix[i][j]))

            if ((j+1) % 3 == 0) { // 3 first elements inside the first table, 3 in the second...
                ++mine_tb_column
            }
        }

        if (checking_for_duplications(verifying_row) || 
            checking_for_duplications(verifying_column)) {

            return false
        }

        verifying_row = [] // searching row by row for duplicates
        verifying_column = [] // searching column by column for duplicates
    }

    /* Checking if it is getting the minitables correctly -- for the last 3 minitables
    console.log(verifying_mine_table[0])
    console.log(verifying_mine_table[1])
    console.log(verifying_mine_table[2])*/

    if (checking_for_duplications(verifying_mine_table[0]) ||
        checking_for_duplications(verifying_mine_table[1]) ||
        checking_for_duplications(verifying_mine_table[2])) {

        return false
    }

    return true
}

let board =
   [["5","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

let board2 =
   [["8","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

let board3 =
   [["5","3",".","5","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

let board4 =
   [["5","3",".",".","7",".",".",".","."]
   ,["6","5",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

console.log(SudokuValidation(board))
console.log(SudokuValidation(board2)) // column with duplicated elements
console.log(SudokuValidation(board3)) // row with duplicated elements
console.log(SudokuValidation(board4)) // minitable with duplicated elements