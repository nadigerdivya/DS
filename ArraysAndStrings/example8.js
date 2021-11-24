////Example 8 - Zero Matrix - If an element in the M * N matrix is zero then entrire row and column is set to zero.

//o(mn^2)
function zeroMatrix(inputMatrix){
    let row = col = '';

    for(let i = 0; i<inputMatrix.length; i++){
        for(let j = 0; j<inputMatrix.length; j++){
            if(inputMatrix[i][j] == 0){
                row = i;
                col = j;
            }
            
        }
    }

    if(row != '' && col != ''){
        for(let c=0;c<inputMatrix.length; c++){
            inputMatrix[row][c] = 0;
        }
        for(let r=0;r<inputMatrix.length; r++){
            inputMatrix[r][col] = 0;
        }
    }
    return inputMatrix; 
}


function displayMatrix(matrix){
    var outputMatrix = '';

    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            outputMatrix +=  matrix[i][j] + ' ';
        }
        document.write(outputMatrix + "<br />");
        outputMatrix = '';
    }
}