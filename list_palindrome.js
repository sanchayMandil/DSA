function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(1),
n2 = new ListNode(2),
n3 = new ListNode(2),
n4 = new ListNode(1),
n5 = new ListNode(4),
n6 = new ListNode(6),
n7 = new ListNode(7),
n8 = new ListNode(4),
n9 = new ListNode(9);
n1.next = n2;
n2.next = n3;
n3.next = n4;
//n4.next = n5;
// n5.next = n6;
// n6.next = n7;
// n7.next = n8;
// n8.next = n9;
// reverse function :
function reverse(head){
    let current = head, pre = null, next_node = null;
    while(current != null){
        next_node = current.next;
        current.next = pre;
        pre = current;
        current = next_node; }
    let res = "", temp = pre ;
        while(temp!== null){
            res+=temp.val+"->";
            temp = temp.next;
        }
    console.log(res+"null");
    return pre;
}
let head = n1;
console.log(check_palindrome(head));
function check_palindrome(head){
    // find the middle of the list 
    let slow = head , fast = head,fist = null, second = null;
    while(fast.next!= null && fast.next.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log(slow.val);
    // make the reverse of the second haif lnk_list
    let new_head = reverse(slow.next);
    fist = head ;
    second = new_head;
    while(second != null ){
        console.log(fist.val +"  "+second.val);
        if(fist.val!= second.val){
            return false;
        }
            second = second.next;
            fist = fist.next;
    }
    return true;
}