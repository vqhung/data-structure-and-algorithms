const {defaultEquals} = require('./utils');
const Node = require('./node');


class LinkedList {
  constructor(equalsFn = defaultEquals){
    this.head = undefined;
    this.count = 0;
    this.equalsFn = equalsFn;
  }

  isEmpty(){
    return this.count === 0;
  }

  getHead(){
    return this.head;
  }

  size(){
    return this.count;
  }

  getElementAt(index){
    let current = this.getHead();
    if (index >= 0 && index <= this.count){
      for(let i = 0; i < index && current; i++ ){
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  push(record){
    const node = new Node(record);
    let current;
    if(this.head === undefined){
      this.head = node;
    } else {
      current = this.head;
      while(current.next !== undefined){
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(record, index){
    const node = new Node(record);
    if (index >= 0 && index <= this.count){

      if (index === 0){
          const current = this.head;
          node.next = current;
          this.head = node;
      } else {
        const prev = list.getElementAt(index-1);
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  indexOf(record){
    let current = this.head;
    for (let i = 0; i < this.count && current; i++){
      if(this.equalsFn(record, current.record)){
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index){
    let current = this.getHead();
    if (index >= 0 && index <= this.count){
      let current = this.head;
      if (index === 0){
        this.head = current.next;
      } else {
        const previous = list.getElementAt(i-1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;

  }



}

module.exports = LinkedList;
