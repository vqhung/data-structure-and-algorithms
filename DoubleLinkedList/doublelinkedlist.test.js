const DLNode = require('./dlnode');
const DoubleLinkedList = require('./doublelinkedlist');


  let list;
  let min;
  let max;

  beforeEach(() => {
    list = new DoubleLinkedList();
    min = 1;
    max = 3;
  });

  function pushesElements() {
    for (let i = min; i <= max; i++) {
      list.push(i);
    }
  }

  function verifyNode(current, i) {
    expect(current.record).not.toBe(undefined);
    expect(current.record).toBe(i);

    // verify next node
    if (i < max) {
      expect(current.next).not.toBe(undefined);
      // TS strictNullChecks
      if (current.next) {
        expect(current.next.record).toBe(i + 1);
      }
    } else {
      expect(current.next).toBe(undefined);
    }

    // verify previous node
    if (i > min) {
      expect(current.prev).not.toBe(undefined);
      if (current.prev) {
        expect(current.prev.record).toBe(i - 1);
      }
    } else {
      expect(current.prev).toBe(undefined);
    }
  }

  function verifyListFromTail() {
    let current = list.getTail();
    for (let i = max; i >= min; i--) {
      expect(current).not.toBe(undefined);
      // TS strictNullChecks
      if (current) {
        verifyNode(current, i);
        current = current.prev;
      }
    }
  }

  function verifyList() {
    let current = list.getHead();
    for (let i = min; i <= max; i++) {
      expect(current).not.toBe(undefined);
      // TS strictNullChecks
      if (current) {
        verifyNode(current, i);
        current = current.next;
      }
    }
    verifyListFromTail();
  }

  it('starts empty', () => {
    expect(list.size()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getHead()).toBe(undefined);
    expect(list.getTail()).toBe(undefined);
  });

  it('pushes elements', () => {
    pushesElements();
    verifyList();
  });


  it('returns element at specific index: invalid position', () => {
    // list is empty
    expect(list.getElementAt(3)).toBe(undefined);
  });

  it('returns element at specific index', () => {
    let node;

    pushesElements();

    for (let i = min; i <= max; i++) {
      node = list.getElementAt(i - 1);
      expect(node).not.toBe(undefined);
      if (node) {
        expect(node.record).toBe(i);
      }
    }
  });

  it('inserts elements first position empty list', () => {
   const element = 1;
   max = element;
   expect(list.insert(element, 0)).toBe(true);
   verifyList();
 });

 it('inserts elements first position not empty list', () => {
    max = 2;
    expect(list.insert(max, 0)).toBe(true);

    expect(list.insert(min, 0)).toBe(true);

    verifyList();
  });

  it('inserts elements invalid position empty list', () => {
    expect(list.insert(1, 1)).toBe(false);
  });

  it('inserts elements invalid position not empty list', () => {
    const element = 1;
    expect(list.insert(element, 0)).toBe(true);
    expect(list.insert(element, 2)).toBe(false);
  });

  it('inserts elements at the end of list', () => {
    max = 5;

    for (let i = min; i <= max; i++) {
      expect(list.insert(i, i - 1)).toBe(true);
    }

    verifyList();
  });

  it('inserts elements in the middle of list', () => {
    expect(list.insert(3, 0)).toBe(true);
    expect(list.insert(1, 0)).toBe(true);
    expect(list.insert(2, 1)).toBe(true);
    verifyList();
  });

  it('returns index of elements', () => {
    let index;

    pushesElements();

    for (let i = min; i <= max; i++) {
      index = list.indexOf(i);
      expect(index).toBe(i - 1);
    }

    expect(list.indexOf(max + 2)).toBe(-1);
  });

  it('removes element invalid position empty list', () => {
    let element;

    for (let i = min; i <= max; i++) {
      element = list.removeAt(i - 1);
      expect(element).toBe(undefined);
    }
  });
