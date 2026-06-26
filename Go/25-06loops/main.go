package main

import "fmt"

func main() {
	fmt.Println("Welcome to learn loops")

	days := []string{
		"Sunday",
		"Tuesday",
		"Wednesday",
		"Friday",
		"Saturday",
	}

	// Approach 1
	// for i := 0; i < len(days); i++ {
	// 	fmt.Println(days[i])
	// }

	// Approach 2
	// for i := range days {
	// 	fmt.Println(days[i])
	// }

	// Approach 3
	for key, values := range days {
		fmt.Printf("index is %v and values is %v\n", key, values)
	}
}
