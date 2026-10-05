const promise = new Promise((resolve, reject) => {
  let number = 3;
  if (number % 2 === 0) {
    resolve("The number is even!");
  } else {
    reject("The number is odd!");
  }
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));

// Promise.all()

const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

const promise3 = Promise.resolve("Promise 3 resolved");

const promise4 = Promise.reject("rejected");

const promiseAll = Promise.all([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));

//   Promise.allSettled()

const promiseAllSettled = Promise.allSettled([
  promise1,
  promise2,
  promise3,
  promise4,
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));


  // Async await 

  promise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


  async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}