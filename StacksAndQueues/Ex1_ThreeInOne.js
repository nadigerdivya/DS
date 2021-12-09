//Ex1_ThreeInOne.js
//Three in One - Implement three stacks using single array


class MultiStack{
    constructor(stackSize){
        this.stackSize = stackSize;
        this.item = [];
        this.noOfStacks = 3;
        this.sizes = [0,0,0];
    }

    isFull(stackNumber){
        return this.sizes[stackNumber] === this.stackSize;
    }

    indexOfTop(stackNumber){ // to get the index of the array
        const offset = this.stackSize * stackNumber;
        const size = this.sizes[stackNumber];
        return offset + size - 1;
    }

    isEmpty(stackNumber){
        return this.sizes[stackNumber] === 0;
    }

    push(stackNumber, value){
        if(this.isFull(stackNumber)) return console.log(`Stack number ${stackNumber} is full`);
        this.sizes[stackNumber] ++;
        this.item[this.indexOfTop(stackNumber)] = value;
    }

    pop(stackNumber){
        if(this.isEmpty(stackNumber)) return console.log(`Stack number ${stackNumber} is Empty`);
        let data = this.item[this.indexOfTop(stackNumber)];
        this.item[this.indexOfTop(stackNumber)] = 0;
        this.sizes[stackNumber] --
        return data;
    }

    peek(stackNumber){
        if(stackNumber > this.noOfStacks - 1) return console.log(`Stack number ${stackNumber} is greater`)
        if(this.isEmpty(stackNumber)) return console.log(`Stack number ${stackNumber} is Empty`);
        return this.item[this.indexOfTop(stackNumber)];
    }

    print(){
        return this.item;
    }
}

const multiStack = new MultiStack(2);
console.log(multiStack.isEmpty(1));
multiStack.peek(0);
multiStack.peek(1);
multiStack.peek(2);
multiStack.peek(3);

console.log('----- PUSH -------')
multiStack.push(1, 100);
multiStack.push(1, 200);
multiStack.push(1, 300);
multiStack.push(2, 1);
multiStack.push(2, 2);
multiStack.push(2, 3);

console.log('----- PRINT -------')
console.log(multiStack.print());

console.log('----- POP -------')
multiStack.pop(2);

console.log('----- PRINT -------')
console.log(multiStack.print());

console.log('----- PUSH -------')
multiStack.push(2, 3);

console.log('----- PRINT -------')
console.log(multiStack.print());

