#include <iostream>
#include <vector>

using namespace std;

// Item structure
struct Item {
  int weight;
  int value;
};

// Knapsack problem
int knapsack(vector<Item> items, int capacity) {
  // Create a table to store the solutions to the subproblems.
  int table[capacity + 1];

  // Initialize the table.
  for (int i = 0; i <= capacity; i++) {
    table[i] = 0;
  }

  // Solve the subproblems and store the solutions in the table.
  for (int i = 0; i < items.size(); i++) {
    for (int j = capacity; j >= items[i].weight; j--) {
      table[j] = max(table[j], table[j - items[i].weight] + items[i].value);
    }
  }

  // Return the solution to the original problem.
  return table[capacity];
}

// Main function
int main() {
  // Create a vector of items.
  vector<Item> items = {
    {1, 10},
    {2, 15},
    {3, 20},
    {4, 25},
  };

  // Set the knapsack capacity.
  int capacity = 10;

  // Solve the knapsack problem.
  int maxValue = knapsack(items, capacity);

  // Print the maximum value.
  cout << "Maximum value: " << maxValue << endl;

  return 0;
}
