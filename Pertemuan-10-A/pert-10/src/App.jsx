import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

// https://jsonplaceholder.typicode.com/posts

function App() {
  // // GET
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => {
  //     setPosts(response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }, [])

  // return (
  //   <div>
  //     <h1>List Posts</h1>
  //     {posts.slice(0,10).map(post => (
  //       <p>{post.title}</p>
  //     ))}
  //   </div>
  // )


  // POST

  // const addPost = () => {
  //   axios.post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "Post Baru", 
  //     body: "Ini deskripsi dari post barunya",
  //     userId: 10
  //   })
  //   .then(response => {
  //     console.log("Data berhasil di tambah", response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }


  // return (
  //   <div>
  //     <button onClick={addPost}>Tambah Post</button>
  //   </div>
  // )




  // PUT
  // const updatePost = () => {
  //   axios.put("https://jsonplaceholder.typicode.com/posts/1", {
  //     title: "Update Title",
  //     body: "Update Body",
  //     userId: 1
  //   })
  //   .then(response => {
  //     console.log("Berhasil Update", response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }


  // return (
  //   <div>
  //     <button onClick={updatePost}>Update Post</button>
  //   </div>
  // )


  // DELETE

  const deletePost = () => {
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      console.log("Berhasil di hapus", response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  )
}

export default App
