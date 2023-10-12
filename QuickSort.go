package Hacktoberfest2023

import "fmt"

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	pivot := arr[0]
	var left, right []int

	for _, v := range arr[1:] {
		if v <= pivot {
			left = append(left, v)
		} else {
			right = append(right, v)
		}
	}

	sorted := append(quickSort(left), pivot)
	sorted = append(sorted, quickSort(right)...)
	return sorted
}

func main() {
	arr := []int{3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5}
	fmt.Println("Unsorted array:", arr)

	arr = quickSort(arr)
	fmt.Println("Sorted array:", arr)
}
