////Example 4 - Palindrome Permutation - Check if the given string is a permutaion of palindrome
//Method - 1
// function isPalindromePermutation(str){
//     let permutationsArray = [];

//     for(let i = 0; i< str.length; i++){
//         let char = str[i];

//         if (str.indexOf(char) != i)
//             continue

//         let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);
//         for (let permutation of permutations(remainingChars)){
//             if(strPalindrome(char + permutation) == true)
//                 permutationsArray.push((char + permutation)
//         )}
//     }

//     if(permutationsArray.length >= 2) 
//         return true;
//     else
//         return false;
// }

// //o(n)
// function strPalindrome(input){
//     const myArr = input.split(" ").join("").split("");
//     let reverseInput = myArr.reverse();
//     if(input.split(" ").join("") === reverseInput.join(""))
//         return true;
//     else 
//         return false;
// }
//////////////////


//Method - 2
//o(n)
function isPalindromePermutation(input){
    let charOccuranceCount = 0;
    let oddOccuranceArray = [];

    for(let i = 0; i< input.length; i++){
        if(input[i] !== " "){
            var strReg = new RegExp(input[i], 'g');
            charOccuranceCount = input.match(strReg).length
            if(!(charOccuranceCount % 2 == 0)) oddOccuranceArray.push(input[i]);
        }
    }

    if(oddOccuranceArray.length == 1)
        return true;
    else
        return false;
}



