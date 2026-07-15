package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

const myUrl = "http://localhost:8080/users/1"

func main() {
	PerformanceGetRequest()

}
func PerformanceGetRequest() {
	response, err := http.Get(myUrl)

	if err != nil {
		panic(err)
	}

	defer response.Body.Close()
	content, _ := io.ReadAll(response.Body)

	// fmt.Println("Status Code", response.StatusCode)

	var responseString strings.Builder
	responseString.Write(content)
	fmt.Println("strings.Builder", responseString.String())

	// fmt.Println("content", string(content))

}
