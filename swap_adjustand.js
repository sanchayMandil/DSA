function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(1),//2
n2 = new ListNode(2),//1
n3 = new ListNode(3),//4
n4 = new ListNode(4),//3
n5 = new ListNode(5),//6
n6 = new ListNode(6),//5
n7 = new ListNode(7),//5
n8 = new ListNode(8),//8
n9 = new ListNode(9);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
let head = n1;
function Swap(p,s1,s2){
    if(s1== null || s2 == null)
        return;
    p.next =s2;
    if(s2.next!= null)
        s1.next = s2.next;
    else
        s1.next = null;
    s2.next = s1;
    p = s1;
    if(p.next == null){
        return ;
    }
    Swap(p,p.next,p.next.next);
}
function swap_adjustand(head){
    if(head == null){
        return head;
    }
    if(head.next== null){
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    Swap(pre,pre.next, pre.next.next);
    return dummy.next ;
}
let res  = swap_adjustand(head), ans ="";
while(res!= null){
    ans += res.val+"->";
    res = res.next;
}
console.log(ans+"null");