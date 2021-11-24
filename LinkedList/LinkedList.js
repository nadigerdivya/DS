//// All Basic operation of LinkedList

//Creating LinkedList.
class LinkedList{
    constructor(){
        this.head = null; // First Element
        this.tail = null; // Last Element
    }
    

    //insert
    insert(value){
        const newNode = {value : value , next : null } ; // creating a node (using object)

        // if(this.tail) this.tail.next = newNode;
        // this.tail = newNode;

        // if(!this.head) this.head = newNode;
 
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //insert at first
    insertAtFirst(value){
        const newNode = {value : value , next : this.head } ; // inserting at first if already a list exist
        
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode; //if this is the first element, create tail.
        }
    }

    //insert after an value
    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue); //getting the after value node

        if(existingNode){
            const newNode = {value : value , next : existingNode.next } ; // creating new node with updated data
            existingNode.next = newNode;
        }
    }

    //search an element
    find(value){
        if(!this.head) return; //if no element

        let current = this.head; 
        while(current){
            if(current.value === value){
                return current;
            }
                current = current.next;
        }
        return;
    }

    //delete an element
    delete(value){
        
        if(!this.head) return; //if no element

        while(this.head && this.head.value == value) // deleting if value == head.value
            this.head = this.head.next;

        let current = this.head; 
        while(current.next){
            if(current.next.value == value){
                current.next = current.next.next;
            }
            else{
                current = current.next;
            }
        }

        if(this.tail.value == value) this.tail = current; // update the tail

    }

    //display linkedList
    print(){
        let toArray = [];
        let current = this.head; 
        while(current){
            toArray.push(current);
            current = current.next;
        }
        return toArray;
    }
}






const linkedList = new LinkedList;
 linkedList.insert(100);
 linkedList.insert(200);
 linkedList.insert(300);
 linkedList.insert(150);
 linkedList.insertAtFirst(50);

 
console.log(linkedList.print());

linkedList.delete(100);
linkedList.insert(400);
console.log(linkedList.find(100));
linkedList.insertAfter(250, 200);

console.log(linkedList.print());