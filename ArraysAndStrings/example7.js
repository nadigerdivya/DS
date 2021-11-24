////Example 7 - Rotate Matrix - Rotate N * N matrix by 90 degree.

//o(n^2)
function rotateMatrix(inputMatrix){
    var outputMatrix = '';

    for(let i = 0; i<inputMatrix.length; i++){
        let currentLine = '';
        let n = inputMatrix.length-1;
        for(let j = 0; j<inputMatrix.length; j++){
            currentLine = currentLine + inputMatrix[n][i] + ' ';
            n--;
        }
        
        outputMatrix = outputMatrix + '<br />' + currentLine ;
    }
    return outputMatrix; 
}
