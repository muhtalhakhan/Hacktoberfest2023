var node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.architect;
var Trainer = neataptic.Trainer;

var A = new node();
var B = new node();
var C = new node();
var D = new node();
var E = new node();


var nodes = [A, B, C,D,E];
 

for(var i = 0; i < nodes.length; i++){
  node = nodes[i];
  for(var j = 0; j < 3; j++){
    var connectTo = nodes[Math.floor(Math.random() * (nodes.length - i) + i)];
    try {
        node.connect(connectTo);
    } catch (error) {
        continue;
    }
    // console.log(node,connectTo)
  }
}
console.log(Architect)
// network.activate([0,1]);

var network = Architect.Construct(nodes);
drawGraph(network.graph(30, 30), '.draw');