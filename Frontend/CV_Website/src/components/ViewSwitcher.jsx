import { useState } from 'react'
import OldView from './OldStyle/OldBase'
import NewView from './NewStyle/NewBase'

function ViewSwitcher() {
  const [setView, setCount] = useState(false)

  return (
    <>
      <div>
        <div className='fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-white backdrop:bg-transparent w-full h-30'>
        <button onClick={()=>setCount(!setView)}>Push Here</button>
        </div>
        {
              setView ? <><NewView/></> : <><OldView/></>           
        }
      </div>
    </>
  )
}

export default ViewSwitcher
