package main

import "fmt"

func main() {
	fmt.Println("Welcome to our maps")

	// 1st approach
	languages := make(map[string]string)
	languages["JS"] = "JavaScript"
	languages["RB"] = "Ruby"
	languages["PY"] = "JavaScript"

	fmt.Println(languages)

	fmt.Printf("My Language Key %v and value %v\n", "JS", languages["JS"])

	// 2nd Approach

	m := map[string]int{
		"apple":  1,
		"banana": 2,
	}
	fmt.Println("My map", m)

	// Check existence

	values, exists := m["apple"]
	fmt.Printf("Does the value %v exist for map: %v", values, exists)

}
