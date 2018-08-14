const Node = require('./../LinkedList/node');

class DLNode extends Node{
  constructor(record, next, prev){
    super(record, next);
    this.prev = prev;
  }
}

module.exports = DLNode;
