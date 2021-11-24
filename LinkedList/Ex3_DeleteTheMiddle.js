// //Ex3_DeleteTheMiddle.js

// //Delete the any node in the middle, given only access to that node.


// function removeMiddle(list, node){
//     let current = list;

//     while(current.next != null){
        
//             if(current.next.data == node){
//                 current.next = current.next.next
//             }
//             current = current.next;
       
//     }

//     return JSON.stringify(list);

// }

// //Creating LinkedList.
// let list = {
//     data : 'a',
//     next: {
//         data : 'b',
//         next: {
//             data: 'c',
//             next: {
//                 data: 'd',
//                 next: {
//                     data: 'e',
//                     next: {
//                         data: 'f',
//                         next: null
//                     }
//                 }
//             }
//         }
//     }
// }

// var resList = removeMiddle(list, 'c');
// console.log(resList);


function deleteMiddleNode(node){
    let next = node.next
    node.data = next.data
    node.next = next.next
    return true
}

let five = {
    data : 'e',
    next : null 
}

let four = {
    data : 'd',
    next : five
}

let three = {
    data : 'c',
    next : four
} 

let two = {
    data : 'b',
    next : three
}

let one = {
    data : 'a',
    next : two
}


console.log(deleteMiddleNode(three, one))