//LinkedListReverse.js

//Reversing the linked list
//o(n)
function reverse(list){
    let newList = {};

    while(list){
        if(newList.data == null){
            newList = {data : list.data, next: null}
        }
        else{
            newList = {data : list.data, next : newList}
        }
        
        list = list.next;
    }
    return newList;
}


//list
let list = {
    data :6,
    next : {
        data: 2,
        next:{
        data : 1,
        next : {
            data : 7,
            next : null
        }
        }
    }
}

var reversedList = reverse(list);
console.log(JSON.stringify(list));
console.log("After reverse:")
console.log(JSON.stringify(reversedList));

