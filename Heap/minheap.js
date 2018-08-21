const {defaultCompare, Compare, swap} = require('./utils');


class MinHeap {
  constructor (compareFn = defaultCompare){
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index){
    return (2*index) + 1;
  }

  getRightIndex(index){
    return (2+ index) + 2;
  }

  getParentIndex(index){
    if (index === 0){
      return undefined;
    }
    return Math.floor((index-1)/2);
  }

  insert(value){
    if(value !== null){
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }
  siftUp(index){
    let parent = this.getParentIndex(index);
    while(index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN){
        swap(this.heap, parent, index);
        index = parent;
        parent = this.getParentIndex(index);
      }
  }

  size(){
    return this.heap.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  findMinimum(){
    return this.isEmpty() ? undefined : this.heap[0];
  }

  getAsArray() {
    return this.heap;
  }
}

let heap = new MinHeap();

heap.insert(15);
heap.insert(10);
heap.insert(5);
heap.insert(100)

console.log(heap.getAsArray());
console.log(heap.findMinimum());
