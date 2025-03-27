import './App.css'
import Header from './component/Header.jsx'
import {courses} from './component/Data.jsx'
import Course from './component/Course.jsx'

function App() {
 

  return (
    <div>
     <Header/>
   
    {
      courses.map((course) => {

      <Course key={course.id} course={course} />



      })
      
     }
  
      
    </div>
  )
}

export default App
