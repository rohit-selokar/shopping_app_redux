import React from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Cart from './components/Cart'
// import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Filter/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App