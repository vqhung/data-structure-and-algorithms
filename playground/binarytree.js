const BinarySearchTree = require('./../Tree/binarySearchTree');

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);


console.log(tree.remove(7));
