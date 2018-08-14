const {Stack} = require('./arrayStack');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('Stack can add and remove item', () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  s.push(3)
  expect(s.pop()).toEqual(3);
});

test('Stack can follow FILO', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});

test('Stack can return the top record but not pop it', ()=>{
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
})
