//Stack_LinkedList.js
////// All Basic operation of stacks - Push, Pop, Peek, isEmpty, Print, Clear, Size
//Implementation using Linked List - LIFO

class Stack{
    constructor(){
        this.head = null;
    }

    //isEmpty
    isEmpty(){
        if(this.head == null) return true;
        else return false;
    }

    //push
    push(value){
        if(this.isEmpty()){
            this.head = {data : value , next: null};
        }
        else{
            let item = {data: value}
            item.next = this.head;
            this.head = item
        }
    }

    //pop
    pop(){
        if(this.isEmpty())
            return null;
        else{
            if(this.head.next == null){ // if only one element exist
                this.head = null;
            } 
            else{
                let item = this.head.data
                this.head = this.head.next
                return item
            }
        }    

        
    }

    //peek
    peek(){
        return this.head.data;
    }

    //size
    size(){
        let count = 0;

        let cur = this.head;
        while(cur){
            cur = cur.next;
            count++;
        }

        return count;
    }

    //print
    print(){
        return this.head;
    }

    //clear
    clear(){
        this.head = null;
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(600);
stack.push(200);
stack.push(100);
console.log('Top element is : ' + stack.peek());
console.log(stack.size());
console.log(stack.print());
console.log('---- After the Pop ------');
stack.pop();
console.log('Top element is : ' + stack.peek());
console.log(stack.print());
console.log(stack.size());
console.log(stack.isEmpty());
// console.log('---- Clearing Stack ------');
// stack.clear();
// console.log(stack.print());
// console.log(stack.size());
// console.log(stack.isEmpty());

