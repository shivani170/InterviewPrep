package main

import "fmt"

func main() {
	fmt.Println("Welcome to Go struct")

	shivani := User{"Shivani", "shivani@go.dev", true, 28}

	// fmt.Println("Shivani details are", shivani)
	// fmt.Printf("Shivani details are %+v\n", shivani)
	// fmt.Printf("Shivani age is %v and email is %v", shivani.Age, shivani.Email)
	shivani.GetStatus()
	shivani.NewMail()
	fmt.Printf("Shivani age is %v and email is %v", shivani.Age, shivani.Email)

}

type User struct {
	Name   string
	Email  string
	Status bool
	Age    int
}

func (u User) GetStatus() {
	fmt.Println("Is user active", u.Status)
}

func (u *User) NewMail() {
	u.Email = "test@go.dev"
	fmt.Println("Email of user", u.Email)
}
