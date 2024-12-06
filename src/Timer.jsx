import { useEffect, useState } from "react"

export const Timer = ({ onDelete }) => {
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [paused,setPaused] = useState(false)
    
    useEffect(() => {
        let interval = null
        if (!paused) {
          interval = setInterval(() => {
            setSeconds((prev) => {
              if (prev === 0) {
                setMinutes((m) => (m === 0 ? 59 : m - 1))
                return 59
              }
              return prev - 1
            })
          }, 1000)
        }
         return () => clearInterval(interval)
     }, [paused])
    return <>
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="text-3xl font-bold text-gray-800">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setPaused(true)}
          disabled={paused}
          className={`px-4 py-2 rounded-lg shadow-md ${
            paused
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          Pause
        </button>
        <button
          onClick={() => setPaused(false)}
          disabled={!paused}
          className={`px-4 py-2 rounded-lg shadow-md ${
            !paused
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Continue
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900"
        >
          Delete
        </button>
      </div>
    </div>
    </>
}