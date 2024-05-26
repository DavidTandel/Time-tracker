import React from 'react'//, { useRef }
import './Sidebar.css'
import analytic from '../Assets/analytic.svg'
import visited from '../Assets/visited.svg'
import restricted from '../Assets/restricted.svg'
import category from '../Assets/category.svg'
import { Link } from 'react-router-dom'
// import nav_dropdown from '../Assets/nav_dropdown.png'

const Sidebar = () => {

    // const menuRef = useRef;
    // const dropdown_toggle = (e) =>{
    //     menuRef.current.classList.toggle('nav-menu-visible');
    //     e.target.classList.toggle('open');
    // }

  return (
    <div>
        {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
        <div className='sidebar'>
        <Link to={'/analytic'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={analytic} alt="" />
                <p>Analytics</p>
            </div>
        </Link>
        <Link to={'/vweb'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={visited} alt="" />
                <p>Visited Websites</p>
            </div>
        </Link>
        <Link to={'/rweb'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
                <img src={restricted} alt="" />
                <p>Restricted Websites</p>
            </div>
        </Link>
        <Link to={'/category'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
                <img src={category} alt="" />
                <p>Categories</p>
            </div>
        </Link>
    </div>
    </div>
  )
}

export default Sidebar