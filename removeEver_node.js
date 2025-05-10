function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(1),
n2 = new ListNode(1),
n3 = new ListNode(1),
n4 = new ListNode(2),
n5 = new ListNode(3),
n6 = new ListNode(4),
n7 = new ListNode(5),
n8 = new ListNode(6),
n9 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
let head = n1;
function find_end(temp_head){
       let current = temp_head, end = temp_head.next;
        while(current.val==end.val && end != null){
            if(end.next == null){
                return null;
            }else{
            end = end.next;}
        }
        return end;
}
function remove_everySameNode(head){
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy.next, pre = dummy;
    while(current!= null && current.next != null){
        if(current.val != current.next.val){
            pre = pre.next;
            current = current.next;
        }else{
            pre.next = find_end(current);
            current = pre.next;
        }
    }
    return dummy.next
}
let res = remove_everySameNode(head), ans ="";
while(res!= null){
    ans += res.val+"->";
    res = res.next;
}
console.log(ans+"null");

