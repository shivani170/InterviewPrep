package main

import (
	"fmt"
	"net/url"
)

const myUrl string = "https://www.greatfrontend.com/interviews/gfe75?team=1&&page=2"

func main() {
	fmt.Println(("Welcome to handling URlS in Golang"))

	// parsing
	result, _ := url.Parse(myUrl)

	fmt.Println(1, result)
	// fmt.Println(2, result.Host)
	// fmt.Println(3, result.Path)
	// fmt.Println(4, result.Port())
	// fmt.Println(5, result.RawQuery)
	// fmt.Println(6, result.Scheme)

	queryParams := result.Query()
	fmt.Printf("The type of query params are %T \n", queryParams)

	fmt.Println(queryParams["page"])

	// for _, val := range queryParams {
	// fmt.Println("Params is", val)
	// }

	partsOfUrl := &url.URL{
		Scheme:   "https",
		Host:     "view.com",
		Path:     "/users",
		RawQuery: "user=1",
	}

	anotherUrl := partsOfUrl.String()
	fmt.Println("anotherUrl", anotherUrl)

}
