import { useState } from 'react'
import Btn from './componants/btn'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='h-screen w-full duration-200' style={{ backgroundColor: color }} >
        <Btn setColor={setColor} />
      </div>
    </>
  )
}

export default App
