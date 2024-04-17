const btn = document.getElementById("btn");
const postId = document.getElementById("sequence");
const postTittle = document.getElementById("title");
const postBody = document.getElementById("body");


let currPost =1;
let debounceTimer;

btn.addEventListener('click',() =>{

    currPost++;
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() =>{
       
        fetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`)
        .then(response => response.json())
        .then((data) => renderPostData(data));
    },2000)
});

const renderPostData = (data)=>{
    postId.innerHTML = `<b>Post Id:</b> ${data.id}`;
    postTittle.innerHTML = `<b>Post Title:</b> ${data.title}`;
    postBody.innerHTML = `<b>Post Body:</b> ${data.body}`;
};

const fetchPostData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${currPost}`);
    const data = await response.json();
    renderPostData(data);
}
fetchPostData();


// async function fetchPost



