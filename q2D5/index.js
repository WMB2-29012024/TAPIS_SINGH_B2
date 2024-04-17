function getDataPromise(API){
    return new Promise(res,rej){
        fetch(API);
        .then(data => data.json())
        .then(jsonData => res(jsonData))
    }
    const API = fetch("[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)");

}