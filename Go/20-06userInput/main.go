package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	greeting := "Welcome to the platform"
	fmt.Println(greeting)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the rating for our pizza")

	// comma ok ||  comma err syntax

	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for rating", input)

	// conversion

	fmt.Printf("Thanks for rating, Type of the rating is %T \n", input)

	modifiedRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)
	if err != nil {
		panic(err)
	} else {
		fmt.Println("Adding 1 to the rating", modifiedRating+1)

	}

}
