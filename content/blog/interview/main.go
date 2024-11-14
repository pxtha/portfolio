package main

import (
	"fmt"
)

func main() {
	//fmt.Println(Solution3([]int{2, 5, 7, 11}, 9))           // [0,1]
	fmt.Println(Solution3([]int{3, 3, 4, 5, 7, 10, 11}, 6)) // [0,1]

	// value : index
	// 0; 9-1 = 8; not in map; add 1:0
	// 1; 9-3 = 6; not in map; add 3:1
	// 2; 9-4 = 5; not in map; add 4:2
	// 3; 9-5 = 4; 4 in map; return map[4]:2, current index:3
}

func Solution3(input []int, target int) []int {
	m := make(map[int]int, len(input))
	for i, v := range input {
		j, ok := m[target-v]
		if ok {
			return []int{j, i}
		}
		m[v] = i
	}
	return nil
}
