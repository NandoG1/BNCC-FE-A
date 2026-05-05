import { useState } from 'react'

import Greeting from './Greeting'

import './App.css'

function App() {

  // const name: string = "HJohn";
  // const age: number = 20;

  // return (
  //   <div>
  //     <h1>Hello {name}</h1>
  //     <h1>Age: {age}</h1>
  //   </div>
  // )

  // const [count, setCount] = useState<number>(0);

  // return (
  //   <div>
  //     <h1>{count}</h1>

  //     <button onClick={() => setCount(count + 1)}>
  //       Tambah
  //     </button>
  //   </div>
  // )



  // return (
  //   <div>
  //     <Greeting name={"John"} />
  //   </div>
  // )

  interface User{
    id: number | string,
    name: string,
    age: number,
    country ?: string
  }

  const [users, setUsers] = useState<User[]>([
    {id: 1, name: "John", age: 20, country: "Indonesia"},
    {id: 2, name: "Doe", age: 21, country: "Malaysia"},
    {id: 3, name: "Budi", age: 20},
    {id: "New", name: "Test", age: 20, country: "Indonesia"}
  ])

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  )

}

export default App
