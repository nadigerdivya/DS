//Ex2_StackMin.js
//Stack which returns min element. Stack includes Push and Pop method also.
//o(1)

// class StackMin{
//     constructor(){
//         this.head = null;
//         this.minStack = [];
//         this.minStackTop = null;
//     }

//     push(value){
//         const newNode = {data : value, next: null}

//         if(this.head == null){
//             this.head = newNode;
//             this.minStack.push(this.head.data);
//             this.minStackTop = this.head.data;
//         }
//         else{
//             newNode.next = this.head;
//             this.head = newNode;

//             //adding to minStack and sorting it.
//             this.minStack.push(this.head.data);
//             this.minStack.sort(function(a, b){return b-a});
//             this.minStackTop = this.minStack[this.minStack.length - 1];
//             console.log(this.minStack);
            
//         }
//         return 'Min value in the stack is : ' +this.minStackTop;
//     }

//     pop(){
//         if(this.head == null) this.min = null;
//         else if(this.head.next == null) this.min = null
//         else{
//             if(this.minStack[this.minStackTop] == this.head.data){
//                 this.minStack.pop();
//             }
//             else{
//                 this.minStack = this.minStack.filter(item => item !== this.head.data)
//             }
//             this.head = this.head.next;
//             this.minStackTop = this.minStack[this.minStack.length - 1];
//         }
//         console.log(this.minStack);
//         return 'Min value in the stack is : ' +this.minStackTop;
//     }

// }

// const stack = new StackMin();
// console.log('--- PUSH ----')
// console.log(stack.push(7));
// console.log(stack.push(6));
// console.log(stack.push(3));
// console.log(stack.push(5));
// console.log(stack.push(2));

// console.log('--- POP ----')
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

//--------------------------------------------------

function last(stack){
    return stack[stack.length - 1]
}

class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }
push(x){
        if(this.minStack.length === 0 || x <= last(this.minStack)){
            this.minStack.push(x)
        }
        this.stack.push(x)
        console.log(this.minStack);
    }
    
    pop(){
        if(last(this.minStack) === last(this.stack)){
            this.minStack.pop()
        }
        return this.stack.pop()
    }
    
    top(){
        return last(this.stack)
    }
    
    min(){
        return last(this.minStack)
    }
}

let stack = new MinStack()

stack.push(6);
stack.push(2);
stack.push(3);
stack.push(5);
stack.push(7);
console.log(stack.min())
stack.pop()
console.log(stack.min())
stack.pop()
console.log(stack.min())
stack.pop()
console.log(stack.min())
stack.pop()
console.log(stack.min())

