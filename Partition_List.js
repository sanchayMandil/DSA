function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(1),//1
n2 = new ListNode(4),//2
n3 = new ListNode(9),//2
n4 = new ListNode(6),//4
n5 = new ListNode(3),//9
n6 = new ListNode(2),//6
n7 = new ListNode(7),//3
n8 = new ListNode(2),//7
n9 = new ListNode(9);//9
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
let head = n1;
function partion_merge(head,x){
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy.next,node = null;
    let head_small = new ListNode(0),dummy_small = head_small;
    let head_large = new ListNode(0),dummy_large= head_large;
    while(current != null){
        if(current.val< x){
            node = current;
            current = current.next
            node.next = null;
            dummy_small.next = node;
            dummy_small = dummy_small.next;
        }else{
            node = current;
            current = current.next
            node.next = null;
            dummy_large.next = node;
            dummy_large = dummy_large.next;
        }
    }
    dummy_small.next = head_large.next;
    return head_small.next;
}
let res = partion_merge(head,3),ans ="";
while(res!= null){
    ans+=res.val+"->";
    res = res.next;
}
console.log(ans+"null");