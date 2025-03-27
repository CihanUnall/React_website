import './App.css'
import Header from './component/Header.jsx'
import {courses} from './component/Data.jsx'
import Course from './component/Course.jsx'

function App() {
 

  return (
  <div>
     <Header/>
    <div className='App'>  
      {
        courses?.map((course) => (
        <Course key={course.id} course={course} />
        ))      
      }
    </div>      
  </div>
  )
}

export default App
