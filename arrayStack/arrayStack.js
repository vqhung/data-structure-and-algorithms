class Stack {
  constructor(){
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length-1];
  }

  isEmpty(){
    return this.data.length === 0;
  }

  clear() {
    this.data.length = 0;
  }

  size() {
    return this.data.length;
  }
}

module.exports = {Stack};
