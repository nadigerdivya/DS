//Stacks.js
////// All Basic operation of stacks - Push, Pop, Peek, isEmpty, Print, Clear, Size


//Implementation using Array - LIFO
class Stack{
    constructor(){
        this.item = [],
        this.count = 0
    }

    //isEmpty
    isEmpty(stack){
        if(this.count == 0) return true;
        else return false;
    }

    //push
    push(value){
        this.item[this.count] = value; //always to the end of the stack
        this.count++;
    }

    //pop
    pop(){
        if(this.isEmpty(this.item)) return null;
        else{
            this.count--;
            return this.item.pop();

            //let deletedItem = this.item[this.count-1] 
            //delete this.item[this.count-1] 
            //this.count --
            //return deletedItem
        }
    }

    //peek
    peek(){
        if(this.isEmpty(this.item)) return null;
        else return this.item[this.count - 1];
    }

    //size
    size(){
        return this.count;
    }


    //print
    print(){
        if(this.isEmpty(this.item)) return null;
        return this.item;
    }

    //clear
    clear(){
        this.item = [];
        this.count = 0
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(100);
stack.push(200);
stack.push(300);
console.log('Top element is : ' + stack.peek());
console.log(stack.size());
console.log(stack.print());
console.log('---- After the Pop ------');
stack.pop();
console.log('Top element is : ' + stack.peek());
console.log(stack.print());
console.log(stack.size());
console.log(stack.isEmpty());

//-------------------------------

