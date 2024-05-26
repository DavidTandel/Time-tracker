import React from 'react'
import './CSS/Landing.css'
import Navbar from '../Componants/Navbar/Navbar'
import Sidebar from '../Componants/Sidebar/Sidebar'
import LandingView from '../Componants/LandingView/LandingView'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      {/* {localStorage.getItem('auth-token')? */}
            <Sidebar/>
            {/* <LandingView/>} */}
    </div>
  )
}

export default Landing