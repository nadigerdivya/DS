//Ex8_LoopDetection.js

//Loop Detection in the list

//Using hashMap - o(n)
// function loopDetection(list) {
//     let l1 = list;
//     const hashMap = new Map();

//     while(l1) {
//         if (hashMap.has(l1))
//             return l1.data;
//         else{
//             hashMap.set(l1)
//             l1 = l1.next;
//         }   
//     }
//    return null;
// }

function loopDetection(list){
    let slow = list
    let fast = list
    // check if loop exist 
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
        if(slow == fast) break;
    }
    console.log('--->1', slow)
    console.log('--->2', fast)
    // return if no collision
    if(fast ==  null || fast.next == null) return null;

    // find the starting point of the loop
    slow = list
    while(slow != fast){
        slow = slow.next;
        fast = fast.next
    }
    return fast;
}


// //list
// let five = {
//     data: 4,
//     next: null
// }

// let four = {
//     data: 4,
//     next: five
// }

// let three = {
//     data: 3,
//     next: four
// }
// let two = {
//     data: 2,
//     next: three
// }

// let one = {
//     data: 1,
//     next: two
// }

// let list = {
//     data: 6,
//     next: {
//         data: 2,
//         next: {
//             data: 1,
//             next: {
//                 data: 7,
//                 next: {
//                     data : 2,
//                     next : null
//                 }
//             }
//         }
//     }
// }


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

five.next = three

var loopNode = loopDetection(one);
console.log(loopNode);
