////Example 6 - String Compression - Check if the given string can be compresses. 
////For ex., aaabbcc to a3b2c2. if not return original string.

//o(n)
function isStringCompressed(input){
    let outputString = "";

    for (let i = 0; i < input.length; i++) {
        if(outputString.indexOf(input[i]) == -1){
            var strReg = new RegExp(input[i], 'g');
            outputString = outputString + input[i] + input.match(strReg).length;
        }
    }

    if(outputString.length < input.length)
        return outputString;
    else
        return input;  
}