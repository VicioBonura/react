import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count);

  return (
    <>
      <div>
        <h1>Simple counter</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
