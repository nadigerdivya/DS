//Ex7_Intersection.js

//Determine the insection node, if the two lists intersect.
//1st approach
//o(m2 + n)
// function findIntersection(list1, list2){
//     let length1 = findLength(list1); //o(m)
//     let length2 = findLength(list2); //o(n)

//     let i = length1; j = length2;
//     while(i >= 0 || j >= 0){
//         let node1 = findNodeAt(list1, i); //o(m)
//         let node2 = findNodeAt(list2, j); //o(n)

//         if(node1 == node2){
//             i--;
//             j--;
//         }
//         else{
//             if(i == length1 && j == length2){
//                 if(node1 == node2) return node1
//                 else return null;
//             } 
//             return findNodeAt(list1, i+1); //o(m)
//         }

//     }

// }

// //o(n)
// function findNodeAt(list, index){
//     let n = 1;

//     let cur = list
//     while(cur){
//         if(n == index)
//             return cur.data;
//         else{
//             n++;
//             cur = cur.next;
//         }
//     }
// }


// //o(n)
// function findLength(list){
//     let length = 0;

//     while(list){
//         length = length + 1;
//         list = list.next;
//     }

//     return length;
// }

// //Lists
// let list1 = {
//     data: 6,
//     next: {
//         data: 5,
//         next: {
//             data: 1,
//             next: {
//                 data: 7,
//                 next: null
//             }
//         }
//     }
// }

// let list2 = {
//     data: 2,
//     next: {
//         data: 1,
//         next: {
//             data: 7,
//             next: null
//         }
//     }
// }
//--------------------------------------------


// function findIntersection(list1, list2){
//     let list1Info = findLengthAndLastNode(list1);
//     let list2Info = findLengthAndLastNode(list2);
   
//     if(JSON.stringify(list1Info.node) != JSON.stringify(list1Info.node)) return null

//     let difference = list1Info.size - list2Info.size 
//     let shorter = difference <= 0 ? list1 : list2;
//     let longer = difference >= 0 ? list1 : list2;
   
//     if(difference != 0) longer = getKthNode(longer, Math.abs(difference))
//     while(longer != shorter){
//         longer = longer.next;
//         shorter = shorter.next
//     }
//     return longer

// }

// const getKthNode = (list, length) => {
//     let count = 0
//     while(count < length && list){
//         count++
//         list = list.next
//     }
//     return list
// }

// const findLengthAndLastNode = (list) => {
   
//     let size = 1;
//     while(list.next){
//         size++
//         list = list.next
//     }
//     return {size, node: list}
// }

//Using hashMap - o(n)
function findIntersection(list1, list2) {

    let l1 = list1, l2 = list2;
    const hashMap = new Map();

    while (l1) {
        hashMap.set(l1, true)
        l1 = l1.next;
    }

    while (l2) {
        if (hashMap.has(l2))
            return l2;
        l2 = l2.next;
    }
    return;
}

//list1
let four = {
    data: 4,
    next: null
}

let three = {
    data: 3,
    next: four
}
let two = {
    data: 2,
    next: three
}

let one = {
    data: 1,
    next: two
}

//list2
let two1 = {
    data: 2,
    next: three
}

let one1 = {
    data: 1,
    next: two1
}

//console.log(findIntersection(one, three))

var intersectionNode = findIntersection(one, one1);
console.log(intersectionNode);