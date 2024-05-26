import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Sidebar from '../Componants/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vweb from './Vweb'

const Profile = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/Vweb' element={<Vweb/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Profile