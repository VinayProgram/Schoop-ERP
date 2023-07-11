import React from 'react'
import Navbar from './components/navbar'
import Sidemenu from './components/sidemenu'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Studentlogin from './components/students/login'
import Profile from './components/students/profile'
import Student from './components/students/student'
import Marksheet from './components/students/marksheet'
import Fees from './components/students/fees'
import Attendance from './components/students/attendace'
import Notice from './components/students/Notice'
import TeacherLogin from './components/Teachers/TeacherLogin'
import Dashboard from './components/Teachers/dashboard'
import Managestudents from './components/Teachers/Sidebar'
import TotalStudents from './components/Teachers/Total/TotalStudents'
import TotalAttendance from './components/Teachers/Total/TotalAttendance'
import TotalMarksheet from './components/Teachers/Total/totalmarksheet'
import TotalNotices from './components/Teachers/Total/TotalNotices'
import TotalFees from './components/Teachers/Total/TotalFees'
import CreateStudent from './components/Teachers/managingStudents/createstudent'
import Deletestudent from './components/Teachers/managingStudents/deletestudent'
import PersonalNotice from './components/Teachers/managingStudents/Personalnotice'
import StudentFees from './components/Teachers/managingStudents/StudentFees'
import CreateFees from './components/Teachers/managingStudents/CreateFees'
import CreateBatchNews from './components/Teachers/Total/createBacthnews'
import StudentPerosnalNotices from './components/students/StudentPersonalNotice'
import ManageAttendance from './components/Teachers/managingStudents/ManAttendance'
import GiveMarks from './components/Teachers/managingStudents/GiveMarks'
import Searchstudent from './components/searchstudent/searchstudent'
const App = () => {
  return (
<div>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
  <Route path='/' element={<Sidemenu/>}/>
    <Route exact path='/login' element={<Studentlogin/>} ></Route>  
    <Route exact path='/profile' element={<Profile/>}></Route>
    <Route exact path='/student-details' element={<Student/>}></Route>
    <Route exact path='/Marksheet' element={<Marksheet/>}></Route>
    <Route exact path='/Fees' element={<Fees/>}></Route>
    <Route exact path='/Attendance' element={<Attendance/>}></Route>
    <Route exact path='/Notice' element={<Notice/>}></Route>  
    <Route exact path='/StudentPersonalNotice' element={<StudentPerosnalNotices/>}></Route>
    <Route exact path='/TeacherLogin' element={<TeacherLogin/>}></Route>  
    <Route exact path='/dashboard' element={<Dashboard/>}></Route>    
    <Route exact path='/ManageStudents' element={<Managestudents/>}></Route>    
    <Route exact path="/TotalStudents" element={<TotalStudents/>}></Route>
    <Route exact path="/TotalAttendance" element={<TotalAttendance/>}></Route>
    <Route exact path="/TotalMarksheet" element={<TotalMarksheet/>}></Route>
    <Route exact path="/TotalNotices" element={<TotalNotices/>}></Route>
    <Route exact path="/TotalFees" element={<TotalFees/>}></Route>
    <Route exact path="/CreateStudent" element={<CreateStudent/>}></Route>
    <Route exact path="/Deletestudent" element={<Deletestudent/>}></Route>
    <Route exact path="/PersonalNotice" element={<PersonalNotice/>}></Route>
    <Route exact path="/ManageFees" element={<StudentFees/>}></Route>
    <Route exact path="/CreateFees" element={<CreateFees/>}></Route>
    <Route exact path="/CreateBatchNews" element={<CreateBatchNews/>}></Route>
    <Route exact path="/ManageAttendaceTeacher" element={<ManageAttendance/>}></Route>
    <Route exact path="/GiveMarks" element={<GiveMarks/>}></Route>
    <Route exact path="/Searchstudent" element={<Searchstudent/>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
