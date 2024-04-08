
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import SignUp from './SignUp';


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/home' element={<Home />}></Route>


      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
