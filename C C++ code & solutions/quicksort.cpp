#include <iostream>
#include <vector>

using namespace std;

// Function to partition the array into two subarrays
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[low];
    int i = low + 1;
    int j = high;

    while (true) {
        while (i <= j && arr[i] <= pivot) {
            i++;
        }

        while (arr[j] >= pivot && j >= i) {
            j--;
        }

        if (i <= j) {
            swap(arr[i], arr[j]);
        } else {
            break;
        }
    }

    swap(arr[low], arr[j]);
    return j;
}

// Quicksort function
void quicksort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, high);
    }
}

int main() {
    vector<int> myVector = {3, 6, 8, 10, 1, 2, 1};

    quicksort(myVector, 0, myVector.size() - 1);

    cout << "Sorted array: ";
    for (int num : myVector) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
