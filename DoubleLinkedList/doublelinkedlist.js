const DLNode = require('./dlnode');
const LinkedList = require('./../LinkedList/linkedlist');
const {defaultEquals} = require('./../LinkedList/utils');

class DoubleLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals){
    super(equalsFn);
    this.tail = undefined;
  }

  size(){
    return this.count;
  }

  isEmpty(){
    return this.size() === 0;
  }

  getTail(){
    return this.tail;
  }

  getHead(){
    return this.head;
  }

  push(record){
    const node = new DLNode(record);
    if (this.head === undefined){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(record, index) {
    let node = new DLNode(record);
    if (index >= 0 && index <= this.count) {
      if (index === 0){
        if (this.head === undefined){
          this.head = node;
          this.tail = node;
        } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        }
      } else if (index === this.count) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        let previous = this.getElementAt(index-1);
        node.next = previous.next;
        previous.next.prev = node;
        node.prev = previous;
        previous.next = node;
      }
      this.count++;
      return true;
    }
      return false;
  }

  indexOf(record){
    let current = this.head;
    let index = 0;
    while(current){
      if(this.equalsFn(record, current.record)){
        return index;
      }
      index++;
      current = current.next
    }
    return -1;
  }

  removeAt(index){
    if(index >= 0 && index < this.count){
      let current = this.head;
  //    if (this.head === null){
  //      return undefined;
  //    } else {
        if (index === 0){
          this.head = this.head.next;
          if (this.count === 1){
            this.tail = undefined;
          } else {
            this.head.prev = undefined;
          }
        } else if(index === this.count-1) {
          current = this.tail;
          this.tail = current.prev;
          this.tail.next = undefined;
        } else {
          current = this.getElementAt(index);
          let previous = current.prev;
          previous.next = current.next;
          current.next.prev = previous;
        }
//      }
      this.count--;
      return current.record;
    }
    return undefined;
  }


}

module.exports = DoubleLinkedList;
