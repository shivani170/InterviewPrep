package main

import (
	"fmt"
	"time"
)

func main() {
	currentTime := time.Now()
	fmt.Println("current Time", currentTime)

	fmt.Println(currentTime.Format("02-01-2026 Monday 15:04:05"))
}
