const Deque = require('./deque');

let dq;
beforeEach(()=>{
  dq = new Deque();
});

test('should start empty', () => {
  expect(dq.size()).toBe(0);
  expect(dq.isEmpty()).toBe(true);
});

test('add elements in the back', () => {
  dq.addBack(1);
  expect(dq.size()).toBe(1);
  dq.addBack(2);
  expect(dq.size()).toBe(2);
});

test('add elements in the front', () => {
  dq.addFront(1);
  expect(dq.size()).toBe(1);
})
