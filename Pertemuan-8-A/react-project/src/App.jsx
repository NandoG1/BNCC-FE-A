import { useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './Greeting'
import Greeting2 from './Greeting2'

function sayHello(){
  return "Welcome"
}

function App() {

  const [count, setCount] = useState(0)

  const name = "John Doe";


  return (
    <div>
      Hello, {name}
      <h1>{sayHello()}</h1>
      <Greeting />

      {/* Ngebuat tombol sama counternya. Jadi kalo tombolnya di pencet, entar counternya
        tambah
      */}
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 5)}>Tambah</button>

      {/* Property */}

      <Greeting2 name="Budi"/>


    </div>
  )
}

export default App
