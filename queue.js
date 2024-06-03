class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  // Add to the end
  // [1]
  // [1, 2]
  // [1, 2, 3]
  enqueue(val) {
      let newNode = new Node(val);
      if(this.size === 0) {
          this.first = newNode;
          this.last = newNode;
      } else {
          let oldLast = this.last;
          oldLast.next = newNode;
          this.last = newNode;
      }
      this.size++;

      return this.size;
  }

  // Remove from the beginning
  // [1, 2, 3]
  // [2, 3]
  // [3]
  dequeue(){
      if(this.size === 0) return null;
      let oldFirst = this.first;
      if(this.size == 1) {
          this.first = null;
          this.last = null;
      } else {
          let newFirst = oldFirst.next;
          this.first = newFirst;
          oldFirst.next = null;
      }
      this.size--;

      return oldFirst.value;
  }
}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.dequeue();
