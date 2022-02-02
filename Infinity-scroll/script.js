const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;


const getPost = async () =>{
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
   const data = await res.json();
   //console.log(data);

   data.map((curEle, Index) => {
       const htmlData = `
    <div class="posts">
       <p class="post-id">${postCount++}</p>
       <h2 class="title">${curEle.title}</h2>
       <p class="post-info">${curEle.body}</p>
   </div>`;

   container.insertAdjacentHTML('beforeend', htmlData)
   })
}
getPost();

const showData = () =>{
    setTimeout(() =>{
        pageCount++;
        getPost();
    }, 300)
}

window.addEventListener('scroll', () =>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if( scrollTop + clientHeight >= scrollHeight){
        console.log("im bottom");
        showData()
    }
})