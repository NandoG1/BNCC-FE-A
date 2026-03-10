import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   function tambah(){
//     setCount(count + 1)
//   }

//   function kurang(){
//     setCount(count - 1)
//   }

//   function reset(){
//     setCount(0)
//   }

//   return (
//     <div>
//         <h1>Counter : {count}</h1>

//         <button onClick={tambah}>+</button>
//         <button onClick={kurang}>-</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }


function App(){
  // UseEffect + fetch API

  // https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]) // array

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json()
      setUsers(data)

      setLoading(false) // tandanya data sudah di fetch

    }

    fetchData()
  }, [])


  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
