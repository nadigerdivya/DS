//Ex5_StackSort.js
//Sort the stack items such that the smallest items are on top.

class StackSort {
    constructor() {
        this.head = null; // head will point to the smallest item.
        this.temphead = null;
    }

    isEmpty() {
        if (this.head == null) return true;
        else return false;
    }

    push(value) {
        const newNode = { data: value, next: null }

        if (this.isEmpty())
            this.head = newNode;
        else {
            if (this.head.data < newNode.data) {
                let cur = this.head;
                while (cur != null && cur.data < newNode.data) {
                    this.tempPush(cur.data);
                    cur = cur.next;
                    this.head = cur;
                }

                this.push(newNode.data);
                if (this.temphead != null) {
                    while (this.temphead) {
                        let data = this.tempPop()
                        this.push(data);
                    }
                }
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
            }

        }
    }


    tempPush(value) {
        const newNode = { data: value, next: null }

        if (this.temphead == null)
            this.temphead = newNode;
        else {
            newNode.next = this.temphead;
            this.temphead = newNode;
        }
    }

    tempPop() {
        if (this.temphead == null)
            return null;
        else {
            if (this.temphead.next == null) { // if only one element exist
                let item = this.temphead.data;
                this.temphead = null;
                return item;
            }
            else {
                let item = this.temphead.data;
                this.temphead = this.temphead.next;
                return item;
            }
        }
    }

    pop() {
        if (this.isEmpty())
            return null;
        else {
            if (this.head.next == null) { // if only one element exist
                this.head = null;
            }
            else {
                let item = this.head.data;
                this.head = this.head.next;
                return item;
            }
        }
    }

    print() {
        return JSON.stringify(this.head);
    }

    peek() {
        return 'The top element is : ' + this.head.data;
    }


}

let stack = new StackSort()

stack.push(6);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(7);
stack.push(8);
stack.push(3);
console.log(stack.print());
// console.log('--- POP ----')
stack.pop()
console.log(stack.print());

//------------------------------------
// function sortStack(stack){
//     let temp = []
//     while(stack.length){
//         let popped = stack.pop()
//         while(temp.length && temp[temp.length -1] > popped){
//             stack.push(temp.pop())
//         }
//         temp.push(popped)
//     }
//     while(temp.length){
//         stack.push(temp.pop())
//     }
//     return stack
// }

// let stack = [6, 2, 1, 5, 7]
// console.log(sortStack(stack))
