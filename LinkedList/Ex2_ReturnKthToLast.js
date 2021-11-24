//// Example 2 - Find Kth element to Last from an singly linked list.

////o(n) 
function returnKthToLast(list, k){
    console.log(JSON.stringify(list));
    console.log("----------- From Kth to Last -----------");

    let count = 1;
    while(list.next){
        if(count === k) {
            return JSON.stringify(list)
        } else {
            count++
            list = list.next
        }   
    }
    return ; 
}



//Creating LinkedList.
let list = {
    data : 5,
    next: {
        data : 2,
        next: {
            data: 6,
            next: {
                data: 3,
                next: {
                    data: 4,
                    next: {
                        data: 3
                    }
                }
            }
        }
    }
}



var resList = returnKthToLast(list, 4);
console.log(resList);