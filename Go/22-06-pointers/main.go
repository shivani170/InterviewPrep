package main

import "fmt"

func main() {
	fmt.Println("Welcome to a class on pointer")
	// var ptr *int
	// var strPtr *string

	myNumber := 23

	var ptr = &myNumber

	fmt.Println("value of pointer is", ptr)

}
