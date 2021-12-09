//ArrayPush.js
//Implemeting Array Push() method. - Push() method adds new items to the end of an array and returns the new array length.

function Push(array, value){
    let length = findLength(array);
    array[length] = value;
    return ++length;

    //return array;
}

//Returns the length of the array
function findLength(array){
    let count = 0;

    while(array[count] != null){
        count++;
    }

    return count;
}

const newArrayLength = Push(['a', 'b', 'c'], 'd');
console.log(newArrayLength);
