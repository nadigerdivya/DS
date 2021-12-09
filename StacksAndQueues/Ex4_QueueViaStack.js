//Ex4_QueueViaStack.js
//Implemeting queue using two stacks - FIFO


class QueueViaStack {
    constructor(){
        this.newStack = [];
        this.oldStack = [];
    }

    push(element){
        this.newStack.push(element)
    }

    pop(){
        this.shiftStacks()
        return this.oldStack.pop()
    }

    shiftStacks(){
        if(!this.newStack && !this.oldStack) throw Error('stack is empty')

        if(!this.oldStack.length){
            while(this.newStack.length){
                this.oldStack.push(this.newStack.pop())
            }
        }
    }

    peek(){
        this.shiftStacks()
        return this.oldStack[this.oldStack.length-1]
    }

    print(){
        console.log(this.oldStack);
        console.log(this.newStack);
    }
}

const stack = new QueueViaStack();
stack.push(6);
stack.push(2);
stack.push(4);
stack.push(7);
stack.print();
console.log(stack.peek());
stack.print();
stack.push(9);
console.log(stack.peek());
stack.print();
console.log("--- After POP -----");
stack.pop();
console.log(stack.peek());
stack.print();