const MinHeap = require('./../Heap/minheap');
const {swap} = require('./../Heap/utils');

function heapSort (array) {
    let heap = new MinHeap();
    let heapArray = heap.heapify(array);
    let heapSize = heapArray.length;
    let sortedArray = [];
    while (heapSize > 1){
        swap(heapArray,0,heapSize-1);
        sortedArray.push(heapArray[heapSize-1]);
        heapArray = heapArray.slice(0,heapSize-1);
        heap.heapify(heapArray)
        heapSize--;
    }
    return sortedArray.concat(heapArray);
    
}

console.log(heapSort([7,6,5,4,3,2,1]));