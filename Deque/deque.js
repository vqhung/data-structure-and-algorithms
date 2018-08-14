class Deque {
  constructor() {
    this.data = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addFront(record){
    if (this.isEmpty()){
      this.addBack(record);
    } else if(this.lowestCount > 0){
      this.lowestCount--;
      this.data[this.lowestCount] = record;
    } else {
      for(let i = this.count; i > this.lowestCount; i--){
        this.data[i]= this.data[i-1];
      }
      this.data[this.lowestCount] = record;
      this.count++;
    }

  }

  addBack(record){
    this.data[this.count] = record;
    this.count++;
  }

  removeFront(){
    if (this.isEmpty()){
      return undefined;
    }
    const result = this.data[this.lowestCount];
    delete this.data[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.data[this.count];
    delete this.data[this.count];

    return result;
  }

  peekFront(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.data[this.lowestCount];
  }

  peekBack(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.data[this.count - 1];
  }

  size(){
    return this.count - this.lowestCount;
  }

  isEmpty(){
    return this.size() === 0;
  }



}

module.exports = Deque;
