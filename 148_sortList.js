/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

   // Find the middle of the list
   let slow = head, fast = head, prev = null;
   while (fast && fast.next) {
       prev = slow;
       slow = slow.next;
       fast = fast.next.next;
   }
   prev.next = null; // Cut the list into two halves

   // Recursively split & sort the lists
   const left = sortList(head);
   const right = sortList(slow);

   // Merge the sorted halves
   return mergeTwoLists(left, right);
};
function mergeTwoLists(l1, l2) {
   const dummy = new ListNode();
   let current = dummy;

   while (l1 && l2) {
       if (l1.val < l2.val) {
           current.next = l1;
           l1 = l1.next;
       } else {
           current.next = l2;
           l2 = l2.next;
       }
       current = current.next;
   }

   current.next = l1 ? l1 : l2;

   return dummy.next;
}