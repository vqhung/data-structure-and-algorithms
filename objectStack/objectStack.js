class Stack {
  constructor(){
    this.count = 0;
    this.data ={};
  }

  push(record){
    this.data[this.count] = record;
    this.count += 1;

  }

  isEmpty() {
    return this.data.count === 0;
  }

  size(){
    return this.data.count;
  }

  pop() {
    if(this.isEmpty()){
      return undefined;
    }

    this.count--;
    const result = this.data[this.count];
    delete this.data[this.count];
    return result;
  }

  peek(){
    if (this.isEmpty()){
      return undefined;
    }
    return this.data[this.count - 1];
  }

  clear(){
    this.count = 0;
    this.data = {};
  }
}

module.exports = {Stack};
