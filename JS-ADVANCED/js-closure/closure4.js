function apiFunction(url) {
  fetch(url).then((res) => {
    console.log(res);
    console.log(url); // here url can be accessed because of closure
  });
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");
