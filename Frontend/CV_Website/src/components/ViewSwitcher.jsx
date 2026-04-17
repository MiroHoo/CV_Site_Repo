import { useState } from 'react'
import OldView from './OldStyle/OldBase'
import NewView from './NewStyle/NewBase'

function ViewSwitcher() {
  const [View, setView] = useState(false)

  return (
    <>
      <div className='w-full'>
        <div className='fixed inset-0 max-h-none max-w-none overflow-y-auto w-auto h-30 flex-1 justify-between  bg-red-400'>
        <div>This is the modal for picking the view</div>
        <button className='bg-amber-100 hover:bg-amber-400' onClick={()=>setView(!View)}>Push Here</button>
        </div>
        {
              View ? <><NewView/></> : <><OldView/></>           
        }
      </div>
    </>
  )
}

export default ViewSwitcher
