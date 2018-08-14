class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.data = {};
  }

  add(record){
    this.data[this.count] = record;
    this.count++;
  }

  isEmpty(){
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear(){
    this.count = 0;
    this.lowestCount = 0;
    this.data ={}
  }

  remove(){
    if (this.isEmpty()){
      return undefined
    }

    const result = this.data[this.lowestCount];
    delete this.data[this.lowestCount];
    this.lowestCount++;
    return result;
  }
}

module.exports = Queue;
