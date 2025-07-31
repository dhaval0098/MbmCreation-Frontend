import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import  Landing  from './User/Landing'
import axios from 'axios'
import { Usernavbar } from './User/Usernavbar'
import { ContactUs } from './User/ContactUs'
import { Addwork } from './Plumber/Addwork'
import Queries from './Plumber/Queries'
import Login from './Plumber/Login'
import PrivateRoutes from './Hooks/PrivateRoute'
import { WorkGallery } from './User/WorkGallery'
import { WorkDetails } from './User/WorkDetails'
import { Signup } from './Plumber/Signup'
import { ReverseString } from './User/ReverseString'
// import Navbar from './User/Navbar'
// import Usernavbar from './User/Usernavbar'
// import reactLogo from './assets/react.svg'
// import viteLogo /from '/vite.svg'
// import './App.css'

function App() {
  
  
    axios.defaults.baseURL = "https://mbmcreation-backend.onrender.com"
      
    const location = useLocation();

  return (
    <>
    <Routes>
     <Route path='/'element={<Landing/>}></Route>
     <Route path='/revese'element={<ReverseString/>}></Route>
     <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/navbar'element={<Usernavbar/>}></Route>
      <Route path='/contactus'element={<ContactUs/>}></Route>
      <Route path='/workgallery'element={<WorkGallery/>}></Route>
      <Route path='/work/:id'element={<WorkDetails/>}></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/addwork'element={<Addwork/>}></Route>
      <Route path='/queries'element={<Queries/>}></Route>
      </Route>
      <Route path='/login'element={<Login/>}></Route>
     </Routes>
    </>
  )
}

export default App
