import { useState } from 'react'
import Header from '../NewStyle/components/Header'
import CvData from '../Topics.json'
function ViewSwitcher() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Header/>
        <div>OldBase_Preview 22</div>
        <RenderStudies/>
        __________
        <RenderExperience/>
        ______________
        <RenderProjects/>
      </div>
    </>
  )
  function RenderStudies(){
      const Studies = CvData.Topics[1].Schools
      var StudyElemArrray = []; 
      Studies.forEach(el => {
        StudyElemArrray.push(
          <>
          <div>{el.Name}</div>
          <div>{el.Date}</div>
          <div>{el.Description}</div>
          </>
        )
      })
      
      return StudyElemArrray
  }
   function RenderExperience(){
      const Postitions = CvData.Topics[2].Positions
      var StudyElemArrray = []; 
      Postitions.forEach(el => {
        StudyElemArrray.push(
          <>
          <div>{el.Name}</div>
          <div>{el.Date}</div>
          <div>{el.Description}</div>
          </>
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
          <div>{el.Name}</div>
          <div>{el.Technologies}</div>
          <div>{el.Description}</div>
          </>
        )
      })

      return StudyElemArrray
  }
}

export default ViewSwitcher