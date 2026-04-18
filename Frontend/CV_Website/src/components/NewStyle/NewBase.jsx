import { useState } from 'react'
import Header from './Components/Header'
function ViewSwitcher() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-dvh'>
         <Header/>
        <p>Here</p>
      </div>
    </>
  )
}

export default ViewSwitcher
