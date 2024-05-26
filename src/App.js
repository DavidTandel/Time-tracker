import './App.css';
import LoginSignup from './Pages/LoginSignup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Vweb from './Pages/Vweb';
import Navbar from './Componants/Navbar/Navbar';
import Sidebar from './Componants/Sidebar/Sidebar';
import Rweb from './Pages/Rweb'
import Analytic from './Pages/Analytic';
import Category from './Pages/Category';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/Vweb' element={<Vweb/>}/>
        <Route path='/Rweb' element={<Rweb/>}/>
        <Route path='/Analytic' element={<Analytic/>}/>
        <Route path='/Category' element={<Category/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
