
const dataContainer = document.getElementById("data-container");
fetch("https://jsonplaceholder.typicode.com/posts")
.then(Response => Response.json())
.then(data=>{
    data.forEach(post =>{
        console.log(post);
        const postElemant = document.createElement("p");
        postElemant.textContent = `
        Post ID: ${post.id} - Title: ${post.title}, Body: ${post.body}`
        dataContainer.appendChild(postElemant);
    })
}).catch(error =>{
    console.log("Error fetching data",error);
})
