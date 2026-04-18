import { useState } from 'react'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
    <img src='src\assets\NewStyle\Crows.jpg' className='select-none w-full h-[10vh] object-cover z-0 opacity-60' />
    </div>
  )
}

export default Header
