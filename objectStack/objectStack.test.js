const {Stack} = require('./objectStack');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
})

test('stack can add an element', () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.pop()).toEqual(2);
})
