//RemoveRepeated.js
//Function to remove the repeated chars from a string

//o(n)
function removeRepeated(string){
    let newString = '';
    let set = new Set();

    for(let i = 0; i<string.length; i++){
        let char = string[i];
        if(!set.has(char)){
            set.add(char);
            newString += char;
        }
    }

    return newString;

}


console.log(removeRepeated('hjhjgdjh'));