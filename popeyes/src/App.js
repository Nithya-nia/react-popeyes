import logo from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home'
import Menu from '../src/Pages/Menu'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from '../src/Pages/Contact'
import Store from '../src/Pages/Store'

function App() {
  return (
  
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    </BrowserRouter> 

  
    
  );
}

export default App;
