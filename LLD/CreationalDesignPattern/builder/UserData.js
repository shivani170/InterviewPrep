class UserBuilder{
    constructor(name){
        this.user = {
            name
        }
    }

     setEmail(email){
        this.user.email = email
        return this
    }

    setAge(age){
        this.user.age = age
        return this
    }


    setCountry(country){
        this.user.country = country
        return this
    }

    build(){
        return this.user
    }
}

const user = new UserBuilder("Shivani")
  .setEmail("shivani@gmail.com")
  .setAge(25)
  .setCountry("India")
  .build();

console.log(user);