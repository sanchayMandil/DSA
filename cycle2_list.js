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
n9.next = n1;
let head = n1;
function find_joinINDEX(head){
    let slow = head , fast = head, sign =0;
    while(fast!= null && fast.next!= null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            sign = 1;
            break;}
    }
    if(sign ==1){
    fast = head;
    let count =0;
    while(fast!=null && fast.next != null){
        if(slow=== fast){
            return new ListNode(count);
        }else{
            fast = fast.next;
            slow = slow.next;
            count++;
        }
    }
    }else
    return -1;
}
console.log(find_joinINDEX(head));