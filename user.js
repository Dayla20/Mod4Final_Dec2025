const postListEl = document.querySelector(".post-list");

async function main() {
    const id = localStorage.getItem("Id")
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
     console.log(postsData);

postListEl.innerHTML = postsData.map((post) => 
   `<div class="post-list">
    <div class="post">
      <div class="post__title">${post.title}</div>
      <p class="post__body">${post.body}</p>
    </div>
  </div>`)
  .join("")
}
    main();