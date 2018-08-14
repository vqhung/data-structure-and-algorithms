const Queue = require('./objectQueue');

test('should enqueue and dequeue properly', ()=>{
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toBe(1);
  expect(q.remove()).toBe(2);
  expect(q.remove()).toBe(3);
  expect(q.isEmpty()).toBe(true);
})

test('should give correct size of the queue', () =>{
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.size()).toBe(3);
})

test('should determine if the queue is empty', () => {
  const q = new Queue();
  expect(q.isEmpty()).toBe(true);
})

test('should clear the queue', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  q.clear();
  expect(q.count).toBe(0);
  expect(q.lowestCount).toBe(0);
  expect(q.data).toEqual({});
})
