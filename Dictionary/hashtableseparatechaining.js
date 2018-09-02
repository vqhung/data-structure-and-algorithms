const {defaultToString} = require('./defaultToString');
const LinkedList = require('./../LinkedList/linkedlist')
const ValuePair = require('./ValuePair');


class HashTableSeparateChaining {
  constructor (toStrFn = defaultToString){
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);

  put(key,value){
    if (key != null && value != null){
      const position = this.hashCode(key);
      if (this.table[position] == null){
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key,value));
      return true;
    }
    return false;
  }

  get(key){
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if(linkedList != null && !linkedList.isEmpty()){
      let current = linkedList.getHead();
      while(current){
        if (current.record.key === key){
          return current.record.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key){
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()){
      let current = linkedList.getHead();
      while (current){
        if (current.record.key === key){
          linkedList.remove(current.record);
          if (linkedList.isEmpty()){
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  size(){
    let count = 0;
    Object.values(this.table).forEach((linkedList) => {
      count += linkedList.size();
    })
    return count;
  }

  isEmpty(){
    return this.size() === 0;
  }

  clear(){
    return this.table = {};
  }

}
