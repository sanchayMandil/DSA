function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let n1 = new ListNode(1),
n2 = new ListNode(2),
n3 = new ListNode(3),
n4 = new ListNode(4),
n5 = new ListNode(5),
n6 = new ListNode(6),
n7 = new ListNode(7),
n8 = new ListNode(8),
n9 = new ListNode(9);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
n9.next = n4;
function remove_loop(head){
    let slow = head,fast = head;
    while(fast!= null && fast.next!= null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            console.log("loop is present");
            break;
        }
    }
    // if loop is present 
    fast = head;
    while(slow!=fast){
        slow = slow.next;
        fast = fast.next;
    }
    while(fast.next !=slow){
        fast = fast.next;
    }
    fast.next = null;
    while(head!=null){
        console.log(head.val);
        head = head.next;
    }
}
remove_loop(n1);