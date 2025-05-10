class Node{
    constructor(data){
        this.data = data
        this.next = null
        this. pre = null}
}
class DoubleList{
    constructor(){
        this.head = null
        this.tail = null
        this.size =0;}
    
    append(data){
         const newNode = new Node(data)
         if(!this.head){
            this.head = newNode;
            this.tail = newNode; }
        else{
            this.tail.next = newNode
            newNode.pre = this.tail;
            this.tail = newNode;}
            this.size++;}

    printForward(){
        let current = this.head,res="null->";
        while(current){
            res += current.data+"->"
            current = current.next;}
        console.log(res+"null")
    }
    printBackward(){
        let current = this.tail, res ="null->";
        while(current){
            res += current.data+"->";
            current = current.pre;}
        console.log(res+"null")
    }
    remove(data){
        if (this.head== null && this.tail== null)
            return null;
        else if (this.head.data === data){
            this.head.next.pre = null;
            this.head = this.head.next
            this.size--
            return
        }else if( this.tail.data === data){
            this.tail.pre.next = null;
            this.tail = this.tail.pre;
            this.size--;
            return
        }else{
            let current =this.head.next, previous= null;
            while(current.data!= data){
                current= current.next
            }
            if(current.data===data){
                current.pre.next = current.next
                current.next.pre = current.pre;
                this.size--;
            }
        }
    }
}
let d1 = new DoubleList;
d1.append(20)
d1.append(23)
d1.append(3)
d1.append(78)
d1.append(32)
//d1.remove(3)
d1.remove(3)
d1.printForward()
console.log(d1)