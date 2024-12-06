import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer } from './Timer'

function App() {
  const [showTimer, setShowTimer] = useState(false)

  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <button onClick={()=>{setShowTimer(true)}}    className="px-4 py-2 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800">
        Create
      </button>
      {showTimer && <Timer onDelete={() => setShowTimer(false)} />}
     </div>
    </>
  )
}

export default App
