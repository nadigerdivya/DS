//Example 1 - String has unique character or not

// function isUniqueString(input){
//     var isUnique = false;

//     if(input.trim().length <=1)
//         return !isUnique;
//     //Method 1 - O(n^2)
//     else
//     {
//         //O(n^2)
//         for(let i = 0; i<=input.length; i++){ //O(n)
//             let j =i+1;
//             while(j < input.length){ //O(n)
//                 if(input[i].toUpperCase() === input[j].toUpperCase())
//                     return isUnique;
//                 j++;
//             }
//         }
//             return !isUnique;

//     }

//     //Method 2 - O(n^2)
//     // else{
//     //     for(let i = 0; i<=input.length; i++){
//     //         for(let j = i+1; j<input.length; j++){
//     //             if(input[i].toUpperCase() === input[j].toUpperCase())
//     //                  return isUnique;
//     //         }
//     //     }
//     //     return !isUnique;
//     // }
// }

//Method -3 --> Using data structure (Array)
//o(n)
// function isUniqueString(input){
//     let charArray =[];
//     for(let i = 0; i<input.length; i++){
//          if(!charArray.includes(input[i].toUpperCase()))
//             charArray.push(input[i].toUpperCase());
//     } 

//     if(charArray.length === input.length)
//         return true;
//     else
//         return false;

// }

//Method -3 --> Using data structure (object)
//o(n)
function isUniqueString(word){
    let collection = {}
    if(!word) return false
    for(let i =0; i < word.length; i++){
        if(collection[word[i]]){
           return false
        } else {
            collection[word[i]] = true; 
        }
    }
    return true
}