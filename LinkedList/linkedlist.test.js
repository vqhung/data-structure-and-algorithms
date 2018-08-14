const LinkedList = require('./linkedlist');
const {defaultEquals} = require('./utils');

let list;
let min;
let max;

beforeEach(()=>{
  list = new LinkedList(defaultEquals);
  min = 1;
  max = 3;
});

function pushElement(){
  for (let i = min; i <= max; i++){
    list.push(i);
  }
}

function verifyList(){
  let current = list.getHead();
  for(let i = min; i <= max && current; i++){
    expect(current).not.toBe(undefined);
    if (current){
      expect(current.record).not.toBe(undefined);
      expect(current.record).toBe(i);
      if (i < max){
        expect(current.next).not.toBe(undefined);
        if (current.next){
          expect(current.next.record).toBe(i+1);
        }
      } else {
        expect(current.next).toBe(undefined);
      }
      current = current.next;
    }
  }
}

test('starts empty', () => {
  expect(list.size()).toEqual(0);
  expect(list.isEmpty()).toEqual(true);
  expect(list.getHead()).toEqual(undefined);

});

test('push elements', () =>{
  pushElement();
  verifyList();
})

test('return element at a specific invalid position', ()=>{
  expect(list.getElementAt(3)).toBe(undefined);
});

test('return element at a specific valid position', () => {
  let current;
  pushElement();

  for (let i = min; i <=max; i++){
    current = list.getElementAt(i-1);
    expect(current).not.toBe(undefined);
    if (current){
      expect(current.record).toBe(i);
    }
  }
});


test('inserts elements first position empty list', () => {
    const element = 1;
    max = element;
    expect(list.insert(element, 0)).toBe(true);
    verifyList();
  });

test('insert elements first position non-empty list', () => {
  max = 2;
  expect(list.insert(max,0)).toBe(true);
  expect(list.insert(min, 0)).toBe(true);
  verifyList();
});

test('insert elements invalid position empty list', () => {
  expect(list.insert(1,1)).toBe(false);
});

test('insert elements invalid position empty list', () => {
  let element = 1;
  expect(list.insert(element,0)).toBe(true);
  expect(list.insert(element,2)).toBe(false);
});

test('returns index of elements', () => {
    expect(list.removeAt(1)).toBe(undefined);
    expect(list.count).toBe(0);
  });
