import NavBar from "./components/NavBar.jsx"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}

export default App
