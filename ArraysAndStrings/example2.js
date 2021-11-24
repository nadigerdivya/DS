// //Example 2 - Decide if one String is a permutation of the other or not
// // i.e., A Permutation of a string is another string that contains same characters, 
// //only the order of characters can be different. For example, “abcd” and “dabc” are Permutation of each other.


/*--- Method 1 => string with different lengths -- */
//o(2^n) + o(n) = o(2^n)
// function findPermutations(input1, input2){
//     if(input1.length == input2.length){
//         var permutationArray = permutations(input1);
//         return searchElement(permutationArray, input2);
//     }
//     else if(input1.length > input2.length){
//         var permutationArray = permutations(input2);
//         return searchElement(permutationArray, input1);
//     }
//     else{
//         var permutationArray = permutations(input1); //o(2^n)
//         return searchElement(permutationArray, input2); //o(n)
//     }
        
// }

// //o(n)
// function searchElement(inputArray, str){
//     let res = false;
//     inputArray.forEach(element => {
//         if(str.indexOf(element) != -1)
//             res = true;
//     });
//     return res;
// }

/*--- Method 1 -- */

/*--- Method 2 => strings with same length and same characters with different orders -- */
//Sort the string
//o(n)
function stringSort(input){
    let inputSpit =input.split("");
    inputSpit.sort();
    let output = "";
    for(let i=0;i<inputSpit.length;i++)
        output = output + inputSpit[i];

    return output;
}

//o(n)
function findPermutations(input1, input2){
    if(stringSort(input1) === stringSort(input2))
        return true;
    else
        return false;
}

