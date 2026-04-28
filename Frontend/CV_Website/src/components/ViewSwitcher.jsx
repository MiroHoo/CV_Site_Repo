import { useState } from 'react'
import OldView from './OldStyle/OldBase'
import NewView from './NewStyle/NewBase'

function ViewSwitcher() {
  const [View, setView] = useState(true)

  return (
    <>
      <div className='w-full'>
      
        {
              View ? <><NewView/></> : <><OldView/></>           
        }
        <div className='w-full z-50'>
        <div className='right-1 top-1 fixed overflow-y-auto items-center flex flex-col p-3.5 bg-amber-300/50'>
        <p className=''>Switch View</p>
        <button className='bg-amber-100 w-4/4 hover:bg-amber-400' onClick={()=>setView(!View)}>Push Here</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default ViewSwitcher
