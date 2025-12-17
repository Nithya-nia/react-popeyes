import logo from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home'
import Menu from '../src/Pages/Menu'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from '../src/Pages/Contact'
import Login from './Pages/Login';
import Store from './Pages/Store'
import Signup from './Pages/Signup';
import Cartpage from './Pages/Cart';
import ProtectedRoute from './Pages/ProtectedRoute';
import Form from './Pages/Validation';


function App() {
  return (
  
      <BrowserRouter>
     
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }/>
      <Route path='/menu' element={
        <ProtectedRoute>
           <Menu/>
        </ProtectedRoute>
       
        }/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
       <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/validation' element={<Form/>}/>
    </Routes>
    </BrowserRouter> 
  
    
  );
}

export default App;
