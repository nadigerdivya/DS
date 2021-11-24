//Ex6_Palindrome.js

//Check if a linked list is a palindrome.
//o(n)
function isPalindrome(list) {
    let reversedList = {};

    let cur = list
    while (cur) { //o(n)
        if(reversedList.data == null){
            reversedList = {data : cur.data, next: null}
        }
        else{
            reversedList = {data : cur.data, next : reversedList}
        }

        cur = cur.next;
    }

    while(list && reversedList){ //o(n)
        if(list.data == reversedList.data){
            list = list.next;
            reversedList = reversedList.next;
        }
        else
            return false;
    }

    return true;
}


//list
let list = {
    data: 'a',
    next: {
        data: 'b',
        next: {
            data: 'b',
            next: {
                data: 'a',
                next: null
            }
        }
    }
}

var result = isPalindrome(list);
console.log(result);


//TODO : Recursive N/2 method

