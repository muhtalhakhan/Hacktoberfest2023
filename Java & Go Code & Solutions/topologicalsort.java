/*
issue#24
  Topological sorting :It is a linear ordering of the vertices of a directed acyclic graph (DAG) in such a way that for every directed edge (u, v), vertex u comes before vertex v in the ordering.
    In simpler terms, it's a way to arrange the vertices of a DAG in a sequence such that all edges go from left to right.
>>The time complexity of the topological sort algorithm for a directed acyclic graph (DAG) implemented using Depth-First Search (DFS)
  is O(V + E), where V is the number of vertices, and E is the number of edges in the graph.
  */

import java.util.*;
class Graph {
private int V; // Number of vertices
private LinkedList[] adj; // Adjacency list
public Graph(int v) {
    V = v;
    adj = new LinkedList[v];
    for (int i = 0; i < v; i++) {
        adj[i] = new LinkedList<>();
    }
}

public void addEdge(int v, int w) {
    adj[v].add(w);
}

// Topological Sort using DFS
private void topologicalSortUtil(int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    for (Integer neighbor : adj[v]) {
        if (!visited[neighbor]) {
            topologicalSortUtil(neighbor, visited, stack);
        }
    }
    stack.push(v);
}

public void topologicalSort() {
    Stack<Integer> stack = new Stack<>();
    boolean[] visited = new boolean[V];

    for (int i = 0; i < V; i++) {
        if (!visited[i]) {
            topologicalSortUtil(i, visited, stack);
        }
    }

    while (!stack.isEmpty()) {
        System.out.print(stack.pop() + " ");
    }
}

public static void main(String[] args) {
    Graph graph = new Graph(6);
    graph.addEdge(5, 2);
    graph.addEdge(5, 0);
    graph.addEdge(4, 0);
    graph.addEdge(4, 1);
    graph.addEdge(2, 3);
    graph.addEdge(3, 1);

    System.out.println("Topological Sort:");
    graph.topologicalSort();
}
}
