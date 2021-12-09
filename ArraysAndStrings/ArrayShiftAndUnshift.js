//ArrayShiftAndUnshift.js
////Implemeting Array Shift() and Unshift() methods.
//Shift() - Shift (remove) the first element of the array and returns the shifted element.
//Unshift() - Adds new items to the beginning of an array and returns new length of the array.

function Shift(array){
    let item = array[0];
    delete array[0];
    console.log(array);
    return item;
}

function Unshift(array, value){
    let newArray = [];
    for(let i = 0; i < findLength(array); i++){
        newArray[i] = array[i];
    }

    array[0] = value;
    for(let i = 1; i<=findLength(newArray); i++){
        array[i] = newArray[i - 1];
    }

    console.log(array);
    return findLength(array); 
}

//Returns the length of the array
function findLength(array){
    let count = 0;

    while(array[count] != null){
        count++;
    }

    return count;
}

const removedElement = Shift(['a', 'b', 'c', 'd']);
console.log(removedElement);
const newArrayLength = Unshift(['b', 'c', 'd'], 'a');
console.log(newArrayLength);
