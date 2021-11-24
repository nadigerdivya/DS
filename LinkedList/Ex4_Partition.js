//Ex4_Partition.js

//Partition Linked list around a value 'x', such that all nodes less than x comes before all nodes greater than or equal to x.
//The partition element x can appear anywhere in the right partion.

//insert - using while loop
//o(n)
// function insert(part, value) {
//     const newNode = {data : value , next : null }
    
//     if(part.data == null){
//         part = newNode;
//     }
//     else{
//         let current = part;
//         while(current.next){
//                 current = current.next;
//         }
//         current.next = newNode;

//     }
    
// }


  
// function partition(list, x) {
//    let part1 = {};
//    let part2 = {};
//    let cur = list;

//    while(cur){
//        if(cur.data < x){

//            const newNode = {data : cur.data , next : null }
    

//     if(part1.data == null){
//         part1 = newNode;
//     }
//     else{
//         let current = part1;
//         while(current.next){
//                 current = current.next;
//         }
//         current.next = newNode;

//     }
//        }
//        if(cur.data >= x){
       

//         const newNode = {data : cur.data , next : null }
 

//  if(part2.data == null){
//      part2 = newNode;
//  }
//  else{
//      let current = part2;
//      while(current.next){
//              current = current.next;
//      }
//      current.next = newNode;

//  }
//     }

//        cur = cur.next;
//    }

//     console.log(JSON.stringify(part1));
//     console.log(JSON.stringify(part2));  
//     console.log("new list:"); 

//     let newlist = JSON.stringify(part1)+JSON.stringify(part2);
//    return newlist;
// }


//o(n)
function partition(list, x){
    let head = list
    let tail = list
    while(list){
        let next = list.next
        if(list.data < x){
            list.next = head
            head = list
           
        }else{
            tail.next = list
            tail = list
        }
        list= next
    }
    tail.next = null

    return JSON.stringify(head);

    // let mainHeadNode, leftRecentNode, rightRecentNode

    // while(head != null) {
    //     let val = head.data
    //     if(val < i){
    //         if(leftRecentNode == null){
    //             leftRecentNode = {data: val, next: null}
    //             mainHeadNode = leftRecentNode
    //         } else {
    //             leftRecentNode.next = {data: val, next: null}
    //             leftRecentNode = leftRecentNode.next
    //         }
    //     } else {
    //         if(rightRecentNode == null) {
    //             rightRecentNode = {data: val, next: null}
    //         } else {
    //             rightRecentNode = {data: val, next: rightRecentNode}
    //         }
    //     }
    //     head = head.next
    // }

    // if(leftRecentNode != null){
    //     leftRecentNode.next = rightRecentNode
    // } else {
    //     mainHeadNode = rightRecentNode
    // }

    // return JSON.stringify(mainHeadNode)
}

//Creating LinkedList.
let list = {
    data: 3,
    next: {
        data: 5,
        next: {
            data: 8,
            next: {
                data: 5,
                next: {
                    data: 10,
                    next: {
                        data: 2,
                        next: {
                            data: 1,
                            next: null
                        }
                    }
                }
            }
        }
    }
}


var resList = partition(list, 5);
console.log(resList);

