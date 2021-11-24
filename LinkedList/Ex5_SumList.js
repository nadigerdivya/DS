//Ex5_SumList.js

//two numbers represented as list, write a function to add the numbers and result is represented as list.

//o(m+n+r)
function sum(list1, list2) {
    let n1 = '';
    let n2 = '';
    let sumList = {}, tail;

    let cur;
    cur = list1;
    while (cur) { //o(m) - m, first list length
        n1 = n1 + cur.data;
        cur = cur.next;
    }

    cur = list2;
    while (cur) { //0(n) - n, second list length
        n2 = n2 + cur.data;
        cur = cur.next;
    }

    let sum = parseInt(n1) + parseInt(n2); // o(m+n)
    let val = sum.toString(); //o(r)
    for (let i = 0; i < val.length; i++) { //o(r) - r, result length
        const newNode = { data: val[i], next: null }

        if (sumList.data == null) {
            tail = newNode;
            sumList = tail;
        }
        else {
            tail.next = newNode;
            tail = tail.next;
        }
    }

    return JSON.stringify(sumList);

}


let list1 = {
    data: 6,
    next: {
        data: 2,
        next: {
            data: 1,
            next: {
                data: 7,
                next: null
            }
        }
    }
}


let list2 = {
    data: 2,
    next: {
        data: 9,
        next: {
            data: 5,
            next: null
        }
    }
}


var resList = sum(list1, list2);
console.log(resList);