### A. Build Queue from Scratch with JavaScript
Hi Team! I'm very excited to share my experience in building a Queue (First In, First Out) with a JavaScript solution.

I will only focus on the main features of a Queue: first in (enqueue - add a new element to the queue) and first out (dequeue - remove one element from the queue). One thing that we have to remember is that both enqueue and dequeue methods should have O(1) time complexity!

### B. Solutions:
**1. Array Approach:**
- Many of us might think about using an Array to implement a Queue.
- However, adding and removing elements from an Array involves shifting the rest of the elements, which takes time. Thus, it can't achieve O(1) time complexity.

**2. Linked List Approach:**
- To maintain O(1) time complexity for both enqueue and dequeue operations, we need something like a linked list.
- In this solution, we will use a linked list of nodes: `Head -> Node1 -> Node2 -> Node3 -> Tail`.
- **Enqueue**: We add a new node to the tail of the linked list. This operation is O(1) because we simply update the tail reference.
- **Dequeue**: We remove the node from the head of the linked list. This operation is O(1) because we only update the head reference.
- Using a linked list allows us to maintain the desired O(1) time complexity for both operations, ensuring efficient queue management.
