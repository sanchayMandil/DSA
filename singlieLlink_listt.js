class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class link_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  list_append(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  prepend(data) {
    const newNode = new node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  print() {
    let current = this.head,
      res = "";
    while (current) {
      res += current.data + "->";
      current = current.next;
    }
    console.log(res + "null");
  }
  remove(data) {
    // if the data node is present at head
    if (this.head.data == data) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    // if list id empty
    if (this.head == null) return null;
    // now data is present in the end or in the middle of the list
    let current = this.head,
      previous = null;
    while (current && current.data != data) {
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
      this.size--;
    }
  }
  reverse() {
    // nextNode is ussed to like a pointer for the next node , previous is use like a temp variable
    let previous = null,
      current = this.head,
      nextNode = null;
    while (current) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    this.head = previous;
  }
}

// main exicution
let l1 = new link_list();
l1.list_append(1);
l1.list_append(1);
l1.list_append(2);
l1.list_append(3);
l1.list_append(3);

