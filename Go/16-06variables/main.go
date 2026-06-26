package main

import "fmt"

func main() {

	var username string = "Shivani"
	fmt.Println(username)
	fmt.Printf("%T \n", username)

	var age int = 23
	fmt.Println(age)
	fmt.Printf("%T \n", age)

	var isStudent bool = true
	fmt.Println(isStudent)
	fmt.Printf("%T \n", isStudent)

	var height float64 = 5.9
	fmt.Println(height)
	fmt.Printf("%T \n", height)

	var floatvalue float64
	floatvalue = 12.34
	fmt.Println(floatvalue)
	fmt.Printf("%T \n", floatvalue)

	// Without type declaration
	var country = "India"
	fmt.Println(country)
	fmt.Printf("%T \n", country)

	// With short hand operator || walrus operator
	shorthand := "Shivani"
	fmt.Println(shorthand)
	fmt.Printf("%T \n", shorthand)

}
