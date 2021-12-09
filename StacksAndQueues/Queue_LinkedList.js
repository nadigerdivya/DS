//Queue_LinkedList.js
////// All Basic operation of queue - Enqueue, Dequeue, Peek, isEmpty, Print, Clear, Size
//Implementation using Linked List - FIFO

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }

    //isEmpty
    isEmpty(){
        if((this.front && this.back) == null) return true;
        else return false;
    }

    //add
    enqueue(value){
        const newNode = {data : value , next: null}

        if(this.isEmpty()){
            this.front = newNode;
            this.back = newNode;
        }
        else{
            this.back.next = newNode;
            this.back = newNode;
        }
            
    }

    //remove
    dequeue(){
        if(this.isEmpty())
            return null;
        else{
            if(this.front.next == null){ // if only one element exist
                this.front = null;
                this.back = null;
            } 
            else{
                let item = this.front.data
                this.front = this.front.next
                return item
            }
        }   
        
    }

    //peek
    peek(){
        return this.front.data;
    }

    //size
    size(){
        let count = 0;

        let cur = this.front;
        while(cur){
            cur = cur.next;
            count++;
        }

        return count;
    }

    //print
    print(){
        return this.front;
    }

    //clear
    clear(){
        this.front = null;
        this.back = null;
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
console.log('Top element is : ' + queue.peek());
console.log(queue.size());
console.log(queue.print());
console.log('---- After the Dequeue ------');
queue.dequeue();
console.log('Top element is : ' + queue.peek());
console.log(queue.print());
console.log(queue.size());
console.log(queue.isEmpty());
// console.log('---- Clearing Queue ------');
// queue.clear();
// console.log(queue.print());
// console.log(queue.size());
// console.log(queue.isEmpty());

