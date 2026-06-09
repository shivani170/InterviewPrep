class RequestBuilder {
  constructor(url) {
    this.request = {
      url,
      method: "GET",
    };
  }

  setMethod(method) {
    this.request.method = method
    return this
  }

    setHeader(header) {
    this.request.header = header
    return this
  }

   setBody(body) {
    this.request.body = body
    return this
  }

  build(){
    return this.request
  }
}


const request = new RequestBuilder("/user")
.setBody({
    name: "shivani"
})
.setHeader({Application: "token"})
.setMethod("POST")

console.log(request)