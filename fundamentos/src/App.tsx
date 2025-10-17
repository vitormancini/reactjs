import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MeuComponente } from './components/MeuComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MeuComponente />
    </div>
  )
}

export default App
