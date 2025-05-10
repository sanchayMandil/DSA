function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(4),
n2 = new ListNode(4),
n3 = new ListNode(13),
n4 = new ListNode(4),
n5 = new ListNode(51),
n6 = new ListNode(6),
n7 = new ListNode(7),
n8 = new ListNode(4),
n9 = new ListNode(9);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
let head = n1, res="";
while(head){
    res+= head.val+"->"; 
    head = head.next;
}
console.log(res+"null");
remove_element(n1,4);
function remove_element(head,value){
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while(current.next!== null){
        if(current.next.val == value){
            current.next = current.next.next
        }else{
            current = current.next;
        }
    }
    head = dummy.next;
    let f_res = "";
    while(head){
        f_res+=head.val+"->";
        head = head.next; 
    }
    console.log(f_res+"null");
}