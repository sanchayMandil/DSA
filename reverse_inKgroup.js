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
// Function to reverse the nodes between 'head' and 'end'
function reverse_Kgroup(head, end){
    console.log("inside sub function");
    let new_head= end ,current= head, next_node ;
    while(current!= end){
        console.log("current :"+current.val);
        next_node = current.next;
        current.next = new_head;;
        new_head = current;
        current = next_node;
    }
    let temp = new_head, ans= "";
    while(temp != end ){
        ans+=temp.val+"->";
        temp = temp.next;
    }
    console.log(ans+end.val);
    return new_head;
}
function reverse_ingroup(head,k){
    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy, 
    pre_cn =0,
    current = dummy.next,
    next_node= current.next,
    count =1;
    while(current.next!= null && current!= null){
        if(count== k){
           pre.next =  reverse_Kgroup(pre.next,next_node);
           while(pre_cn != k){
            pre = pre.next;
            pre_cn++;
           }
           current = next_node;
           pre_cn=0;
           count = 1;
        }else{
        current = current.next;
        next_node = current.next;
        count++;}
    }
    return dummy.next;
}
let res = reverse_ingroup(n1,2), ans ="";
while(res!= null){
    ans+=res.val+"->";
    res= res.next;
}
console.log(ans+"null");
