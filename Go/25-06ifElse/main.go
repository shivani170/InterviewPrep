package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("Go conditional If else")

	age := 18

	if age >= 18 {
		fmt.Println("Eligible to vote")
	} else {
		fmt.Println("Not Eligible to vote")
	}

	// 2nd Approach

	if num := 3; num < 10 {
		fmt.Println("num is less than 10")
	} else {
		fmt.Println("num is not less than 10")
	}

	// Switch Statement
	diceNumber := rand.Intn(6) + 1
	fmt.Println("Generate random dice number ", diceNumber)

	switch diceNumber {
	case 1:
		fmt.Println("You got value 1, you can open")
	case 2:
		fmt.Println("You got value 2 spot")
	case 3:
		fmt.Println("You got value 3 spot")
		fallthrough
	case 4:
		fmt.Println("You got value 4 spot")
	case 5:
		fmt.Println("You got value 5 spot")
	case 6:
		fmt.Println("You got value 6 spot")
	default:
		fmt.Println("What is this!")

	}
}
