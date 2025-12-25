console.log(localStorage.getItem("Id"));

async function main() {
    const id = localStorage.getItem("Id");
    await fetch ('https://jsonplaceholder.typicode.com/posts?userId=:id')
}
