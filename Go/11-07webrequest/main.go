package main

import (
	"fmt"
	"io"
	"net/http"
)

const url = "http://localhost:3000/"

func main() {
	fmt.Println("Welcome to web request")

	response, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Response is of type %T\n", response)

	defer response.Body.Close()

	data, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	content := string(data)
	fmt.Println((content))
}
