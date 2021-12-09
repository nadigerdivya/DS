//Ex3_StackOfPlates.js
// Ex of Multidimensional Array
//Push() - A new stack will be created when current stack size is full. 
//Pop() - Pops an element from current stack (multiple stacks are considered as one stack)
//PopAt() -  Pops an element from the specified stack.

class SetOfStack { 
    constructor(stackSize) {
        this.stackNumber = 0;
        this.stackSize = stackSize;
        this.mainStack = []; 
        this.subStack = [];
    }

    isFull(stack) {
        return stack.length === this.stackSize;
    }

    getLastElement(stackNumber){
        let stack = stackNumber;
        let lastElement = stack[stack.length - 1];
        return lastElement;
    }

    push(value) {
        if (!this.isFull(this.subStack)) {
            this.subStack.push(value);
            this.mainStack[this.stackNumber] = this.subStack;
        }
        else{
            this.subStack = [];
            this.stackNumber++;
            this.push(value);
        }
    }

    pop(){
        this.mainStack[this.stackNumber].pop();
        if(this.mainStack[this.stackNumber].length == 0)
            this.stackNumber--;
    }

    popAt(stackNumber){
        let stack = this.mainStack[stackNumber];
        stack.pop();
    }

    peek(){
        console.log("Top Element: " + this.getLastElement(this.mainStack[this.stackNumber]));
    }

    print(){
        console.log(this.mainStack);
    }
}

const stack = new SetOfStack(3);
stack.push(8);
stack.push(5);
stack.push(4);
stack.push(7);
stack.push(9);
stack.print();
stack.peek();
//stack.popAt(0);
stack.pop();
stack.print();
stack.peek();
stack.pop();
stack.print();
stack.peek();
stack.popAt(0);
stack.print();
stack.peek();

//------------------------------

// class SetOfStacks{
//     constructor(capacity){
//         if(!capacity) throw Error('capacity is required')
//         this.stacks = [[]];
//         this.capacity = capacity
//     }

//     push(element){
//         let lastStack = getLastStack(this.stacks)
//         if(lastStack.length === this.capacity){
//             this.stacks.push([])
//             lastStack = getLastStack(this.stacks)
//         }
//         lastStack.push(element)
//     }

//     pop(){
//         let lastStack = getLastStack(this.stacks)
//         lastStack.pop()
//         if(lastStack.length === 0){
//             this.stacks.pop()
//         }
//     }

//     popAt(stackNumber){
//         if(stackNumber > this.stacks.length -1) throw Error('Invalid Stack number')
//         if(stackNumber === this.stacks.length -1) return this.stacks[stackNumber].pop()
//         let popedElement;
//         if(stackNumber < this.stacks.length -1){
//             popedElement = this.stacks[stackNumber].pop()
//             for(let i = stackNumber ; i < this.stacks.length - 1; i++){
//                 this.stacks[i].push(this.stacks[i+1].shift())
//             }
//         }

//         if(this.stacks.length > 1 && !this.stacks[this.stacks.length -1]){
//             this.stacks.pop()
//         }

//         return popedElement
//     }

//     peek(){
//         let lastStack = getLastStack(this.stacks)
//         return lastStack[lastStack.length -1]
//     }

//     print(){
//         console.log(this.stacks)
//     }
// }

// const getLastStack = (stacks) => {return  stacks[stacks.length -1]}


// let stacks = new SetOfStacks(3)
// stacks.push(1);
// stacks.push(2);
// stacks.push(3);
// stacks.push(4);
// stacks.push(5);
// stacks.push(6);
// stacks.push(7);
// console.log(stacks.peek());
// // stacks.pop();
// // stacks.pop();
// // console.log(stacks.peek())
// //stacks.popAt(0)
// stacks.print()


