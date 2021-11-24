//InsertToLinkedList.js

//Insert into LinkedList without using while loop
//o(n)
function insert(list){
    let newList = {}, tail;

    while(list != null) {
            let val = list.data;
            if(newList.data == null){
                tail = {data: val, next: null}
                newList = tail
            } else {
                tail.next = {data: val, next: null}
                tail = tail.next
            }
            list = list.next;
        }
        return newList;
}

//list
let list = {
    data :2,
    next : {
        data : 9,
        next : {
            data : 5,
            next : null
        }
    }
}

var resList = insert(list);
console.log(resList);
