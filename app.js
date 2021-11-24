//Function to find the mod

function findingMod(firstOperand,secondOperand){
    let result = 0;
    result = firstOperand % secondOperand;

    document.write(result);
    // console.log(result);
}


//Function to find factorial of number
//O(n)
function factorial(input){
    let result = 1;

    if(input < 0)
        return -1;
    else if(input == 0 || input == 1)
        return result;
    else{
        for(let i=1; i<=input; i++)
            result = result * i;

        return result;
    }
    
}

//Finding permutation
//o(2^n)
function permutations(input){
    if(input.length == 0)
        return "";
    else if(input.length == 1)
        return input;
    else
        return permutationsArray("", input);
}

//o(2^n)
function permutationsArray(prefix, str){
    let permutationsArray = [];

    for(let i = 0; i< str.length; i++){
        let char = str[i];

        if (str.indexOf(char) != i)
            continue

        let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let permutation of permutations(remainingChars)){
            permutationsArray.push(char + permutation) }
    }

    return permutationsArray;
}

//Finding palindrome
//o(n)
function isPalindrome(input){
    var newStr = "";
    let j = input.length - 1;
    for(let i = 0; i< input.length; i++){
        newStr += input[j];
        j--;
    }
    if(input.toUpperCase() === newStr.toUpperCase())
        return true;
    else
        return false;

//---------------------------------------------------
// //Two pointers method. - o(n/2) => o(n)
//   // For easy comparison, convert to lower case and replace
//   // any non- alpha or digit character with empty string.
//   str = str.toLowerCase().replace(/[^a-z\d]/g, '');
  
//   // Start pointers at beginning (i) and end (j).
//   // Move inward until something doesn't match -OR-
//   // the two pointers either meet or pass each other.
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] !== str[j]) return false;
//   }
  
//   // If the loop completed with no equality issues,
//   // the string is a valid palindrome.
//   return true;


//---------------------------------------------------
}