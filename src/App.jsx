import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Funkos from './components/Funkos/Funkos'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { UserProvider } from './context/UserContext/UserState'
import { FunkoProvider } from './context/FunkoContext/FunkoState'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <FunkoProvider>
            <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Funkos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </FunkoProvider>
        
      </BrowserRouter>

    </>
  )
}

export default App
