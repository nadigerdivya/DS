//// Example 1 - Remove Duplicates from an unsorted linked list.


//delete duplicates

function removeDup(list) {
    ////o(n2)
    // let current = list;
    // let nextPointer = list.next;

    // while(current.next != null){
    //     while(nextPointer.next != null){
    //         if(current.data == nextPointer.data){
    //             nextPointer.data = nextPointer.next.data;
    //             nextPointer.next = nextPointer.next.next
    //         }
    //         else{
    //             nextPointer = nextPointer.next;
    //         }
    //     }
    //     current = current.next;
        
    // }

    // return JSON.stringify(list);

    //----------------------------------------------------------------
    //Gooogled
//     console.log(JSON.stringify(list));
//     console.log("----------- After deleting duplicates -----------");
//     let cur = list;
//   let visited = new Set([cur.data]);
//   while (cur.next) {
//     let nextnode = cur.next;
//     if (visited.has(nextnode.data)) {
//       // if current node data is visited, skip
//       cur.next = nextnode.next;
//     } else {
//       // if current node data is not visited, visit
//       visited.add(nextnode.data);
//       cur = nextnode;
//     }
//   }
//   return JSON.stringify(list);
//----------------------------------------------------------------

    //o(n) - Using Sets
    console.log(JSON.stringify(list));
    console.log("----------- After deleting duplicates -----------");
    if (!list || !list.next) return list;
    let current = list;
    let listSet = new Set();
    
    listSet.add(current.data);
    while(current.next){
        if(listSet.has(current.next.data)){
            current.next = current.next.next;
        }
        else{
            listSet.add(current.data);
            current = current.next;
        }
            
    }

    
    return JSON.stringify(list);
}

//Creating LinkedList.
let list = {
    data : 1,
    next: {
        data : 2,
        next: {
            data: 1,
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

var resList = removeDup(list);
console.log(resList);




