const Graph = require('./graph');
const Queue = require('./../Queue/objectqueue');

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

const initializeColor (vertices) {
  const color = {};
  for (let i = 0; i < vertices.length; i++){
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}

function breadFirstSearch(graph, startVertex, callback){
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();

  queue.add(startVertex);

  while(!queue.isEmpty()){
    const u = queue.remove();
    const neightbors = adjList.get(u);
    color[u] = Colors.GREY;
    for ( let i = 0; i < neighbors.length; i++){
      const w = neighbors[i];
      if (Colors[w] === Colors.WHITE){
        color[w] = Colors.GREY;
        queue.add(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback{
      callback(u);
    })
  }
}
