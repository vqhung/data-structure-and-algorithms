const Node = require('./node');
const BinarySearchTree = require('./binarySearchTree');

let tree;
let arrKeys;

function assertNode(node, key, left, right){
  if (key !== null){
    expect(node.key).toBe(key);
  } else {
    expect(node).toBe(key);
    return;
  }
  if (left != null){
    expect(node.left.key).toBe(left);
  } else {
    expect(node.left).toBe(left);
  }

  if (right != null){
    expect(node.right.key).toBe(right);
  } else {
    expect(node.right).toBe(right);
  }
}

const keys = (key) =>{
  arrKeys.push(key);
}

beforeEach(() =>{
    tree = new BinarySearchTree();
    arrKeys = [];
});

test('starts empty', () => {
  expect(tree.getRoot()).toBe(null);
});

test('inserts elements in the BST', () => {
  expect(tree.getRoot()).toBe(null);
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);

  let node = tree.getRoot();
  assertNode(node, 11, 7, 15);

  node = node.left;
    assertNode(node, 7, 5, 9);

    node = node.left;
    assertNode(node, 5, 3, null);

    node = node.left;
    assertNode(node, 3, null, null);

    node = tree.getRoot().left.left.right;
    assertNode(node, null, null, null);

    node = tree.getRoot().left.right;
    assertNode(node, 9, 8, 10);

    node = node.left;
    assertNode(node, 8, null, null);

    node = tree.getRoot().left.right.right;
    assertNode(node, 10, null, null);

    node = tree.getRoot().right;
    assertNode(node, 15, 13, 20);

    node = node.left;
    assertNode(node, 13, 12, 14);

    node = node.left;
    assertNode(node, 12, null, null);

    node = tree.getRoot().right.left.right;
    assertNode(node, 14, null, null);

    node = tree.getRoot().right.right;
    assertNode(node, 20, 18, 25);

    node = node.left;
    assertNode(node, 18, null, null);

    node = tree.getRoot().right.right.right;
    assertNode(node, 25, null, null);
});

test('search an existed nodes', () => {
  expect(tree.getRoot()).toBe(null);
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);

  let node = tree.getRoot();

  expect(tree.search(13)).toBe(true);
  expect(tree.search(11)).toBe(true);
  expect(tree.search(20)).toBe(true);
});

test('search a non-existed node', () => {
  expect(tree.getRoot()).toBe(null);
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);

  let node = tree.getRoot();

  expect(tree.search(130)).toBe(false);
  expect(tree.search(110)).toBe(false);
  expect(tree.search(200)).toBe(false);
});

test('traverse in order', () => {
  expect(tree.getRoot()).toBe(null);
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);

  tree.inOrderTraverse(keys);
  expect(arrKeys[0]).toBe(3);
  expect(arrKeys[7]).toBe(12);
  expect(arrKeys[13]).toBe(25);
  expect(arrKeys[14]).toBe(undefined);
});

test('traverse pre-order', () => {
  expect(tree.getRoot()).toBe(null);
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(5);
  tree.insert(3);
  tree.insert(9);
  tree.insert(8);
  tree.insert(10);
  tree.insert(13);
  tree.insert(12);
  tree.insert(14);
  tree.insert(20);
  tree.insert(18);
  tree.insert(25);

  tree.preOrderTraverse(keys);
  expect(arrKeys[0]).toBe(tree.getRoot().key);
  expect(arrKeys[7]).toBe(15);
  expect(arrKeys[13]).toBe(25);
  expect(arrKeys[14]).toBe(undefined);
});
