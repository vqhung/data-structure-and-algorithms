const Dictionary = require('./../Dictionary/dictionary');

class Graph {
  constructor (isDirected = false){
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  addVertex(v){
    if(!this.vertices.includes(v)){
      this.vertices.push(v);
      this.adjList.set(v,[]);
    }
  }
  addEdge(a,b){
    if (!this.adjList.get(a)){
      this.addVertex(a);
    }
    if (!this.adjList.get(b)){
      this.addVertex(b);
    }
    this.adjList.get(a).push(b);
    if(this.isDirected !==true){
      this.adjList.get(b).push(a);
    }
  }
}
