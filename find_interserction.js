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
let s1 = new ListNode(10),
s2 = new ListNode(20),
s3 = new ListNode(30),
s5 = new ListNode(50);
s1.next = s2;
s2.next = s3;
s3.next = s5;
s5.next = n6;
let head1 = n1,head2 = s1;
function find_intersection(head1, head2){
    let head1_len =0, head2_len = 0, temp1 = head1, temp2= head2;
    while(temp1){
        head1_len++;
        temp1 = temp1.next;
    }
    while(temp2){
        head2_len++;
        temp2 = temp2.next;
    }
    while(head1_len>head2_len){
        head1 = head1.next;
        head1_len--;
    }
    while(head1_len<head2_len){
        head2 = head2.next;
        head2_len--;
    }
    if(head1_len==head2_len){
        while(head1 != head2){
            head1 = head1.next;
            head2 = head2.next;
        }
        if(head1== null && head2 == null){
            console.log(0);
        }else{
        console.log(head1.val);}
    }
}
find_intersection(head1,head2);

    //https://youtu.be/AGIj_S7_p1M?si=J7LiKMf46kv3NcA7
    //https://youtu.be/TKd_e9KVLP4?si=EE8AveMi-Z_CUicu
    //https://youtu.be/Z7fckUyPx4s?si=p6E07r0K5Njg4vG7