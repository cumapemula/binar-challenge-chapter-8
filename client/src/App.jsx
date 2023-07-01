import { useState } from 'react'
import './App.css'
import FormCreate from './components/Fragments/FormCreate'
import Navbar from './components/Elements/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <FormCreate></FormCreate>
    </>
  );
}

export default App
