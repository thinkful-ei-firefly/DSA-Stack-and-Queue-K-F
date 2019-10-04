class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _Node(value);

    if (this.first === null) {
      this.first = node;
      node.prev = null;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    node.prev = this.last;
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (this.first) this.first.prev = null
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue
