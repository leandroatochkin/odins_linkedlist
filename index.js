class ListNode {
    constructor(data){
      this.data = data
      this.next = null  
    }
  }
  
  class LinkedList  {
      constructor(head = null) {
          this.head = head
      }
    append(value){
      const newNode = new ListNode(value);
      if(this.head === null){
        this.head = newNode
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next; 
        }
        current.next = newNode; 
      }
    }
    
    prepend(value){
      const newNode = new ListNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
    
    size(){
      let count = 0; 
      let node = this.head;
      while (node) {
          count++;
          node = node.next
      }
      return count;
    }
    
    head(){
      return this.head;
    }
    
    tail(){
      let lastNode = this.head;
      if (lastNode) {
          while (lastNode.next) {
              lastNode = lastNode.next
          }
      }
      return lastNode
    }
    
    at(index){
      let current = this.head;
      let count = 0;
  
      while (current) {
          if (count === index) {
              return current.data; 
          }
          count++;
          current = current.next; 
      }
  
      return null; 
    }
    
    pop(){
      if (this.head === null) {
        return; 
      }
  
      if (this.head.next === null) {
        this.head = null; 
        return;
      }
  
      let current = this.head;
      while (current.next.next) {
        current = current.next; 
      }
      current.next = null; 
    }
    
    contains(value){
      let current = this.head;
      while (current) {
          if (current.data === value) {
              return true; 
          }
          current = current.next; 
      }
      return false; 
                   }
    
    find(value){
      let current = this.head;
      let results = [];
      let index = 0;
  
      while (current) {
          if (current.data === value) {
              results.push(index); 
          }
          current = current.next; 
          index++;
      }
  
      return results.length > 0 ? results : null;
    }
    
    toString(){
      let result = '';
      let current = this.head;
      while (current) {
          result += `(${current.data}) -> `;
          current = current.next;
      }
      result += 'null';
      return result;
    }
  }
  
  
  const newLinkedList = new LinkedList()
  
  newLinkedList.append(1)
  newLinkedList.append(2)
  newLinkedList.append(3)
  newLinkedList.append(4)
  newLinkedList.append(5)
  newLinkedList.append(6)
  newLinkedList.append(7)
  
  newLinkedList.pop()
  
  console.log(newLinkedList.head)
  console.log(newLinkedList.tail())
  console.log(newLinkedList.find(4))
  console.log(newLinkedList.toString())