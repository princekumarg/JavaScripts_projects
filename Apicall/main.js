const postsList= document.querySelector('.posts-list-container');
// Displaying the results
function displayResults(posts) {
    postsList.innerHTML = posts
      .map(
        (postItem) => `
      <div class="post-item">
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
      </div>
      `
      )
      .join(" ");
  }
//fetch using XHR

function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        displayResults(xhr.response);
      } else {
        console.log("Some Error ocurred");
      }
    };
}
//fetch using fetch
function fetchUsingFetchMethod() {
    const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
  
    fetchRequest
      .then((response) => response.json())
      .then((result) => displayResults(result))
      .catch((e) => console.log(e));
}
//fetching using async await
async function fetchUsingAsynCAwaitMethod(){
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });

      const result = await response.json();
      displayResults(result);
}
//fetch Using Promise
function helperMethod(method, url){
    const promise = new Promise((resolve,reject)=> {
       const xhr = new XMLHttpRequest();
       xhr.open(method,url);
       xhr.responseType = 'json';
       xhr.send();
   
       xhr.onload = ()=> {
           if(xhr.status === 200){
               resolve(xhr.response)
           } else {
               reject(xhr.response)
           }
       }
    })
    
    return promise;
}
//fetchUsingXHRAsyncAwait
async function fetchUsingXHRAndAsyncAwait(){

    const response = await helperMethod('GET', "https://jsonplaceholder.typicode.com/posts");
    displayResults(response);
}
//fetchUsingXHR();
//fetchUsingFetchMethod();
//fetchUsingAsynCAwaitMethod();
fetchUsingXHRAndAsyncAwait();