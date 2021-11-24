//LinkedListSort.js

//sort the linked list in ascending order.
function sort(list) {
    let lowest;
    let newList = list;
    let sortedList = {};

    while (newList != null) {
        lowest = findLowest(newList)
        const newNode = { data: lowest, next: null }
        if (sortedList.data == null) {
            sortedList = newNode;
        }
        else {
            let current = sortedList;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;

        }
        newList = removeLowest(newList, lowest);
    }
    return JSON.stringify(sortedList);
}


function findLowest(list) {
    let cur = list;
    let lowest = cur.data;
    while (cur) {
        if (lowest > cur.data) {
            lowest = cur.data;
        }
        cur = cur.next;
    }

    return lowest;
}

function removeLowest(list, lowest) {
    let current = list;

    if(current.data == lowest) {
        // deleting if value == head.value
        current = current.next;
        return current;
    }

    while (current.next) {
        if (current.next.data == lowest) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }


    return list;

}


// //Creating LinkedList.
// let list = {
//     data: 3,
//     next: {
//         data: 5,
//         next: {
//             data: 2,
//             next: {
//                 data: 1,
//                 next: {
//                     data: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

//Creating LinkedList.
let list = {
    data: -1,
    next: {
        data: 5,
        next: {
            data: 3,
            next: {
                data: 4,
                next: {
                    data: 0,
                    next: null
                }
            }
        }
    }
}

var resList = sort(list);
console.log(resList);