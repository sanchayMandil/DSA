class node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BT{
    constructor(){
        this.root = null;
    }
    insertion(val){
        const newNode = new node(val);
        if(this.root==null){
            this.root = newNode;
            return}
        let queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            //console.log(node);
            if(node.left == null){
                node.left = newNode;
                return;}
            queue.push(node.left)
            if(node.right== null){
                node.right = newNode;
                return;}
            queue.push(node.right);
        }
    }
    //level order trversal
    show(){
        if(this.root == null) return null;
        else{
            let queueu= [this.root];
            while(queueu.length){
                let node = queueu.shift()
                console.log(node.val);
                if(node.left!= null) queueu.push(node.left);
                if(node.right !=null) queueu.push(node.right);
            }
        }
    }
    search(target){
        if(this.root==null){ return false
        }else{
            let queue= [this.root]
            while(queue.length){
                let node = queue.shift();
                if(node.val == target) return true
                if(node.left!= null) queue.push(node.left);
                if(node.right!= null) queue.push(node.right); 
            }
            return false
        }
    }
    // for deletion
    deleteNode(target){
             if(this.root==null){ return null
        }else{
            // deleting the 
            let last = null;
            let rep = null;
            let pre = null;
            let queue= [this.root]
            while(queue.length){
                let node = queue.shift();
                if(node.val == target){
                    rep = node
                }
                if(node.left!= null){
                    last = node.left;
                    pre = node
                    queue.push(node.left);}
                if(node.right!= null){
                    pre = node
                    last =node.right
                     queue.push(node.right); }
            }
            if(rep!=null){
                rep.val = last.val;
                if(pre.left == last) pre.left = null
                else pre.right = null
            }else{
                console.log("node is not present")
            }
            //console.log(last,rep)
        }
    }
}
let b1 = new BT();
b1.insertion(1);
b1.insertion(2);
b1.insertion(3);
b1.insertion(4);
b1.show();
if(b1.search(8)){
    console.log("Found");
}else{
    console.log("Not Found");
}
b1.deleteNode(3);
b1.show();