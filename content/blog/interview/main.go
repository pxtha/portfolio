package main

import (
	"fmt"
	"sort"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	input := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}}}
	fmt.Println(Solution(input).Val) // [0,1]

	sort.Sort()
}

func Solution(input *ListNode) *ListNode {
	// middle of the linked list
	slow, fast := input, input
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}
