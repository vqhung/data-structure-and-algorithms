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
    return (2 * index) + 2;
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
    
 siftDown(index){
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left;
        console.log('left ' + left +' '+ this.heap[left]);
    }
    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right;
        console.log('right ' + right + ' ' + this.heap[right]);
    }
    if (index !== element) {
        console.log('swap(' +index+','+element+')');
      swap(this.heap, index, element);
        console.log('siftDown!('+element+')');
      this.siftDown(element);
        
    }
}
    
 heapify(array) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = maxIndex; i >= 0; i--) {
        console.log('siftDown('+i+')');
      this.siftDown(i);
       
        
    }
    return this.heap;
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

module.exports = MinHeap;
