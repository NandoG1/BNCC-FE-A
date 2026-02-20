

// FETCH API
// POST

// Link: "https://jsonplaceholder.typicode.com/posts"

// async function createPost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({
//                 userId: 1,
//                 title: "Testing",
//                 body: "Contoh POST"
//             })
//         })

//         const data = await response.json()
//         console.log("POST: ", data)
        
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// createPost()


// PUT

// async function updatePost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//             method: "PUT",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 title: "Updated Title",
//                 body: "Updated Body",
//                 userId: 1
//             })
//         })

//         const data = await response.json()
//         console.log("PUT: ", data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// updatePost();


// DELETE

async function deletePost(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1" , {
            method: "DELETE"
        })

        if(response.ok){
            console.log("Delete data berhasil")
        }
    }
    catch(error){
        console.log(error)
    }
}

deletePost();