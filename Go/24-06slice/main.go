package main

import "fmt"

func main() {
	fmt.Println("welcome to the slice")

	var fruitList = []string{"Apple", "Mango", "Banana"}
	fmt.Printf("Type of fruit list %T\n", fruitList)

	fruitList = append(fruitList, "Kiwi", "Peach")
	fmt.Println("fruitList", fruitList)

	fruitList = append(fruitList[:3])
	fmt.Println("Sliced fruitList", fruitList)

	highScores := make([]int, 4)
	highScores[0] = 234
	highScores[1] = 945
	highScores[2] = 456
	highScores[3] = 867

	highScores = append(highScores, 555)

	// Delete index at 2

	var index int = 2

	highScores = append(highScores[:index], highScores[index+1:]...)

	fmt.Println(highScores)

	fmt.Println(cap(highScores))

}
