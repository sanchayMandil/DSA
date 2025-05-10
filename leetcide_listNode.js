function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  let test = new ListNode(2),t1 = new ListNode(2), t2 = new ListNode(3),t3 = new ListNode(4)
  ,t4 = new ListNode(4);
  t3.next= t4
  t2.next = t3
  t1.next = t2;
  test.next = t1;
 
