import { useState } from 'react'
import Header from '../NewStyle/components/Header'
import CvData from '../Topics.json'
function ViewSwitcher() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <div className='border-3 m-2'><RenderStudies/></div>

        <div className='border-3 m-2'><RenderExperience/></div>

        <div className='border-3 m-2'><RenderProjects/></div>
      </div>
    </>
  )
  function RenderStudies(){
      const Studies = CvData.Topics[1].Schools
      var StudyElemArrray = []; 
      Studies.forEach(el => {
        StudyElemArrray.push(
          <div className='flex-1 justify-center border-2'>
          <div className='text-center'><h className='font-bold text-2xl'>{el.Name}</h></div>
          <div className='text-center'><p className='font-light text-[20px]'>{el.Date}</p></div>
          <div className='text-center'><p className='text-[18px]'>{el.Description}</p></div>
          </div>
        )
      })
      
      return StudyElemArrray
  }
   function RenderExperience(){
      const Postitions = CvData.Topics[2].Positions
      var StudyElemArrray = []; 
      Postitions.forEach(el => {
        StudyElemArrray.push(
          <div className='flex-1 justify-center border-2 bg-amber-100'>
          <div className='flex-1 justify-between flex-row'><h className='font-bold text-2xl w-fit'>{el.Name}</h><div className='w-fit' ><img src='src\assets\NewStyle\arrow-bar-down.svg' className='w-20'/></div></div>
          <div className='text-center'><p className='font-light text-[20px]'>{el.Date}</p></div>
          <div className='text-center'><p className='text-[18px]'>{el.Description}</p></div>
          </div>
        )
      })

      return StudyElemArrray
  }
   function RenderProjects(){
      const Projects = CvData.Topics[3].Projects
      var StudyElemArrray = []; 
      Projects.forEach(el => {
        StudyElemArrray.push(
          <>
          <div><h className='font-bold text-2xl'>{el.Name}</h></div>
          <div>{el.Technologies}</div>
          <div>{el.Description}</div>
          </>
        )
      })

      return StudyElemArrray
  }
}

export default ViewSwitcher