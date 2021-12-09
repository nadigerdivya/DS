//ArrayPop.js
////Implemeting Array Pop() method. - Pop() method removes (pops) the last element of an array and 
////returns the returns the removed element.

function Pop(array){
    let length = findLength(array);
    let lastItem = array[length - 1];
    delete array[length - 1];
    return lastItem;
}

//Returns the length of the array
function findLength(array){
    let count = 0;

    while(array[count] != null){
        count++;
    }

    return count;
}

const removedElement = Pop(['a', 'b', 'c', 'd']);
console.log(removedElement);

