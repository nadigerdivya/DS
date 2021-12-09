//Queues.js
////// All Basic operation of queue - Enqueue, Dequeue, Peek, isEmpty, Print, Clear, Size
//Implementation using Array - FIFO

class Queue{
    constructor(){
        this.item = [],
        this.count = 0
    }

    //isEmpty
    isEmpty(){
        if(this.count == 0) return true;
        else return false;
    }

    //Enqueue
    enqueue(value){
        this.item[this.count] = value; //always to the end of the queue
        this.count++;
    }

    //Dequeue
    dequeue(){
        if(this.isEmpty()) return null;
        else{
            this.count--;
            return this.item.shift();
        }
    }

    //peek
    peek(){
        if(this.isEmpty()) return null;
        else return this.item[0];
    }

    //size
    size(){
        return this.count;
    }


    //print
    print(){
        if(this.isEmpty()) return null;
        return this.item;
    }

    //clear
    clear(){
        this.item = [];
        this.count = 0
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

//-------------------------------



