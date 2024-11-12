package main

import (
	"fmt"
	"slices"
)

func main() {

	// find the K-th largest element in the array
	// 1. sort the array in ascending order
	// 2. return the K-th element from the end of the array; 1st -> in[len(in)-1]; 2nd -> in[len(in)-2]; 3rd -> in[len(in)-3]; ...; Kth -> in[len(in)-K]
	// 3. if the array is empty, return -1

	// Test cases
	fmt.Println(Solution([]int{1, 9, 3, 3, 7}, 2)) // Expected: 7
	fmt.Println(Solution([]int{}, 1))              // Expected: -1 (empty array)
	fmt.Println(Solution([]int{5}, 1))             // Expected: 5 (single element)
	fmt.Println(Solution([]int{5, 5, 5, 5}, 2))    // Expected: 5 (all elements are the same)
	fmt.Println(Solution([]int{1, 2, 3, 4, 5}, 5)) // Expected: 1 (K is the length of the array)
	fmt.Println(Solution([]int{1, 2, 3, 4, 5}, 6)) // Expected: -1 (K is greater than the length of the array)
	fmt.Println(Solution([]int{1, 2, 3, 4, 5}, 0))
}

func Solution(in []int, k int) int {
	if k > len(in) {
		// error case
		return -1
	}
	if k < 1 {
		// error case
		return -1
	}
	if len(in) == 0 {
		// error case
		return -1
	}
	slices.Sort(in)
	return in[len(in)-k]
}
