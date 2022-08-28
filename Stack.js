class Node {
    constructor() {
      this.data = 0;    

      this.prev = null;
    }
  }
  
  class Stack {
    constructor(max = 10) {
      this.top = null; 

      this.max = max;

      this.size = 0;
    }    
  
    push(element) {
      let node = new Node(); 
  
      if (node === null || this.size === this.max) {
        throw new Error('Overflow');
      }
  
      node.data = element;  

      node.prev = this.top; 

      this.top = node;     

      this.size++;

    }
  
    pop() {
      if (this.top === null) {
        throw new Error('Stack Underflow');
      }
  
      let node = new Node();

      node = this.top;      

      this.top = this.top.prev;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.top.data;
      }
      else {
        throw new Error('Stack is empty');
      }
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    toArray() {
      let result = [];

      let current = this.top;
  
      while(current !== null) {
        result.push(current.data);

        current = current.prev;
      }
      
      return result;
    }
  
    static fromIterable(iterable) {
        let isFunc = typeof iterable[Symbol.iterator] !== 'function';

        if (isFunc) {
         throw new Error('The entity is not iterable');
        }
  
        const result = new Stack();

        this.max = iterable.size;
  
        for (let i = 0; i < iterable.size; i++) {
         result.push(iterable[i]);
        }
  
      return result;
    }
}
  
  module.exports = { Stack };